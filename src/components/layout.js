import React, { useEffect, useRef } from "react"
import PropTypes from "prop-types"
import { StaticQuery, graphql } from "gatsby"
import SimplexNoise from "simplex-noise"
import paper from "paper-jsdom-canvas"

import Header from "./header"
import Footer from "./footer"
import "../sass/style.sass"
import useWindowSize from "../utils/useWindowSize"

const Layout = ({ children }) => {

  //Hook to grab window size
  const size = useWindowSize();
  
  // Ref for parent div and scrolling div
  const app = useRef();
  const scrollContainer = useRef();
  
  // Configs
  const data = {
    ease: 0.4,
    current: 0,
    previous: 0,
    rounded: 0
  };
  
  //Set the height of the body to the height of the scrolling div
  const setBodyHeight = () => {
    // console.log(document.body.style.height)
    document.body.style.height = `${
      scrollContainer.current.getBoundingClientRect().height
    }px`;
    // console.log(scrollContainer.current.getBoundingClientRect().height)
    // console.log(document.body.style.height)

  };
  
  // Scrolling
  const skewScrolling = () => {
    //Set Current to the scroll position amount
    data.current = window.scrollY;
    // Set Previous to the scroll previous position
    data.previous += (data.current - data.previous) * data.ease;
    // Set rounded to
    data.rounded = Math.round(data.previous * 100) / 100;
    
    // Difference between
    const difference = data.current - data.rounded;
 
    let acceleration
    if (size.width < 1000) {
      acceleration = difference / size.width;
    } else {
      acceleration = difference / 250;
    }

    const velocity = +acceleration;
    const skew = velocity * 5;

    //Assign skew and smooth scrolling to the scroll container
    // check if the ScrollContainer.current has a value
    if (scrollContainer.current !== null) {
      scrollContainer.current.style.transform = `translate3d(0, -${data.rounded}px, 0) skewY(${skew}deg)`;
    }
    
    //loop vai raf
    requestAnimationFrame(() => skewScrolling());

  }; // eslint-disable-line
    
  // Run scrollrender once page is loaded.
  useEffect(() => {
    requestAnimationFrame(() => skewScrolling());
  }, []); // eslint-disable-line

  //set the height of the body.
  useEffect(() => {
    setBodyHeight();
  }, [size.height]); // eslint-disable-line
  
  useEffect(() => {
    // set the starting position of the cursor outside of the screen
    let clientX = -100
    let clientY = -100
    const innerCursor = document.querySelector(".cursor--small")

    const initCursor = () => {
      // add listener to track the current mouse position
      document.addEventListener("mousemove", e => {
        clientX = e.clientX
        clientY = e.clientY
      })

      // transform the innerCursor to the current mouse position
      // use requestAnimationFrame() for smooth performance
      const render = () => {
        innerCursor.style.transform = `translate(${clientX}px, ${clientY}px)`
        // if you are already using TweenMax in your project, you might as well
        // use TweenMax.set() instead
        // TweenMax.set(innerCursor, {
        //   x: clientX,
        //   y: clientY
        // });

        requestAnimationFrame(render)
      }
      requestAnimationFrame(render)
    }

    initCursor()

    // Handing Hover States
    const initHovers = () => {
      // find the center of the link element and set stuckX and stuckY
      // these are needed to set the position of the noisy circle
      const handleMouseEnter = e => {
        const navItem = e.currentTarget
        const navItemBox = navItem.getBoundingClientRect()
        stuckX = Math.round(navItemBox.left + navItemBox.width / 2)
        stuckY = Math.round(navItemBox.top + navItemBox.height / 2)
        isStuck = true
      }

      // reset isStuck on mouseLeave
      const handleMouseLeave = () => {
        isStuck = false
      }

      // add event listeners to all items
      const linkItems = document.querySelectorAll(".link")
      linkItems.forEach(item => {
        item.addEventListener("mouseenter", handleMouseEnter)
        item.addEventListener("mouseleave", handleMouseLeave)
      })
    }

    initHovers()

    // Modifying the Canvas
    let lastX = 0
    let lastY = 0
    let isStuck = false
    let group, stuckX, stuckY

    const initCanvas = () => {
      const canvas = document.querySelector(".cursor--canvas")
      const shapeBounds = {
        width: 75,
        height: 75,
      }
      paper.setup(canvas)
      const strokeColor = "#0F52BA"
      const strokeWidth = 1
      const segments = 8
      const radius = 15

      // we'll need these later for the noisy circle
      const noiseScale = 150 // speed
      const noiseRange = 4 // range of distortion
      let isNoisy = false // state

      // the base shape for the noisy circle
      const polygon = new paper.Path.RegularPolygon(
        new paper.Point(0, 0),
        segments,
        radius
      )
      polygon.strokeColor = strokeColor
      polygon.strokeWidth = strokeWidth
      polygon.smooth()
      group = new paper.Group([polygon])
      group.applyMatrix = false

      const noiseObjects = polygon.segments.map(() => new SimplexNoise())
      let bigCoordinates = []

      // function for linear interpolation of values
      const lerp = (a, b, n) => {
        return (1 - n) * a + n * b
      }

      // function to map a value from one range to another range
      const map = (value, in_min, in_max, out_min, out_max) => {
        return (
          ((value - in_min) * (out_max - out_min)) / (in_max - in_min) + out_min
        )
      }

      // the draw loop of Paper.js
      // (60fps with requestAnimationFrame under the hood)
      paper.view.onFrame = event => {
        // using linear interpolation, the circle will move 0.2 (20%)
        // of the distance between its current position and the mouse
        // coordinates per Frame
        if (!isStuck) {
          // move circle around normally
          lastX = lerp(lastX, clientX, 0.2)
          lastY = lerp(lastY, clientY, 0.2)
          group.position = new paper.Point(lastX, lastY)
        } else if (isStuck) {
          // fixed position on a nav item
          lastX = lerp(lastX, stuckX, 0.2)
          lastY = lerp(lastY, stuckY, 0.2)
          group.position = new paper.Point(lastX, lastY)
        }

        if (isStuck && polygon.bounds.width < shapeBounds.width) {
          // scale up the shape
          polygon.scale(1.08)
        } else if (!isStuck && polygon.bounds.width > 30) {
          // remove noise
          if (isNoisy) {
            polygon.segments.forEach((segment, i) => {
              segment.point.set(bigCoordinates[i][0], bigCoordinates[i][1])
            })
            isNoisy = false
            bigCoordinates = []
          }
          // scale down the shape
          const scaleDown = 0.92
          polygon.scale(scaleDown)
        }

        // while stuck and big, apply simplex noise
        if (isStuck && polygon.bounds.width >= shapeBounds.width) {
          isNoisy = true
          // first get coordinates of large circle
          if (bigCoordinates.length === 0) {
            polygon.segments.forEach((segment, i) => {
              bigCoordinates[i] = [segment.point.x, segment.point.y]
            })
          }

          // loop over all points of the polygon
          polygon.segments.forEach((segment, i) => {
            // get new noise value
            // we divide event.count by noiseScale to get a very smooth value
            const noiseX = noiseObjects[i].noise2D(event.count / noiseScale, 0)
            const noiseY = noiseObjects[i].noise2D(event.count / noiseScale, 1)

            // map the noise value to our defined range
            const distortionX = map(noiseX, -1, 1, -noiseRange, noiseRange)
            const distortionY = map(noiseY, -1, 1, -noiseRange, noiseRange)

            // apply distortion to coordinates
            const newX = bigCoordinates[i][0] + distortionX
            const newY = bigCoordinates[i][1] + distortionY

            // set new (noisy) coodrindate of point
            segment.point.set(newX, newY)
          })
        }

        if (isNoisy) {
          innerCursor.style.width = `20px`
          innerCursor.style.height = `20px`
          innerCursor.style.top = `-10px`
          innerCursor.style.left = `-10px`
        } else {
          innerCursor.style.width = `5px`
          innerCursor.style.height = `5px`
        }
        polygon.smooth()
      }
    }

    initCanvas()
  }, []); // eslint-disable-line
  return (
    <StaticQuery
      query={graphql`
        query SiteTitleQuery {
          site {
            siteMetadata {
              title
            }
          }
        }
      `}
      render={data => (
        <>
          <div ref={app} className="core-app">
            <div className="cursor cursor--small"></div>
            <canvas className="cursor cursor--canvas"></canvas>
            <div ref={scrollContainer} className="scroll">
              <Header siteTitle={data.site.siteMetadata.title} />
                <main className="">
                  {children}
                </main>
              <Footer />
            </div>
          </div>
        </>
      )}
    />
  )
}

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Layout
