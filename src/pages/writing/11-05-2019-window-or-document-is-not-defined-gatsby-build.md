---
path: "/writing/window-document-not-defined-gatsby-build"
date: 2019-05-11T17:12:33.962Z
title: "How to fix 'document not defined' in Gatsby Build"
tags: ["Gatsby"]
featimage: "../../images/gatsby-build.png"
---

The error `document is not defined` or `window is not defined` you see when building a gatsby project is as a result of gatsby attempting to query the DOM on the server as it is server-side rendering. This can occur either when you're trying to manipulate or query the DOM.

Note: When querying elements in the DOM in Gatsby or React in general, it is recommended to do this inside of the Component lifecycle method, or inside the `useEffect` hook when the page is rendered. This ensures that the DOM is ready before querying DOM elements.

In a scenario where you want to make use of the document or window outside of the useEffect hook, you will run into a problem as neither of them are defined on the server. A quick fix for this problem is to set a condition to check if the document or window is defined.

```javascript
  if (typeof document !== `undefined`) {
    return {
      // Do something with the document
      // Call your modules and libraries
    };
  } else {
    return {
      // Do something different while window and document are not defined on the server
    };
  }
```

If you observe that the error you're getting is coming from a node module, you can simply ignore the module during server-side rendering to avoid the error during the build process by adding the following code snippet to the `gatsby-node.js` file. For my example, I'm using the canvas module. You can change the module to any one of your choice.

```javascript
  exports.onCreateWebpackConfig = ({ stage, loaders, actions }) => {
    
  actions.setWebpackConfig({
    node: {
      fs: 'empty'
    }
  })

  if(stage === 'build-html'){
    actions.setWebpackConfig({
      module: {
        rules: [{
          test: /canvas/,
          use: loaders.null()
        }]
      }
    })
  }
}
```
