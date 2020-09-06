---
path: "/writing/react-website-on-virtual-private-server"
date: 2019-08-13T17:12:33.962Z
title: "How to Host a React Site on a Virtual Private Server"
tags: ["React", "Cloud"]
featimage: "../../images/react-banner.png"
---

So, you've finished building up the UI for your React project and you want to host it up on a remote machine. In this article, we'll be using Google Cloud Platform to host our sample React website.

## Step 1: SSH into your virtual private server

Build your React website using `npm build` and upload the code to your preferred git repository.

## Step 2: SSH into your virtual private server

Log in to your virtual private server

For Unix-like devices (Mac OS or Linux)
`ssh <username>@<computer name or IP address>`

For example

```bash
ssh dennis@computer
```

or

```bash
ssh dennis@127.0.0.1
```

## Step 3: Install Apache

```bash
sudo apt-get update && sudo apt-get install apache2 -y
```

At this point, if you go to your IP address, you should be able to see Apache2 Debian Default Page.

## Step 4: Install git and clone your React Project

Before cloning the React project, you'll need to have git installed

```bash
sudo apt-get install git
```

You can then clone your repo into your virtual machine.

```bash
sudo git clone <git repository>
```

## Step 5: Copy the React build into the web server directory

Copy all the content of the build folder into the web server directory.

```bash
sudo cp -r ./<react repository folder>/build/* /var/www/html/
```

For sanity check, you can confirm the content of your web server directory to be sure you copied all the contents of your build folder

```bash
ls /var/www/html/
```

With that done, you can check your IP to see your React project live.
