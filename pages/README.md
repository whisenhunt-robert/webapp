# Overview

I wanted to learn about web applications using HTML, CSS, and JavaScript. I heard of NodeJS, and wanted to learn the basics of it.
I feel learning this could be a big step to furthering what I know about HTML, CSS, and JavaScript.

I just made a basic "Hello World" web app that shows a picture of my Black Mage from Final Fantasy XIV.
I learned by following along with a video I found on YouTube (link is down below), and edited a few things to my liking.
I was not sure what to put on the About page just yet, but I did figure out how to add a third page, and on that third page I
was able to add my Higher or Lower game I created in a previous project.

To start a test server on your computer, you need to open up a terminal like Node.js and create your package by typing "npm init".
When creating a package, it will ask you a few things to fill out. You don't have to fill out them all, but the ones I recommend
filling out are: package name, description, and maybe author so they know it's by you.
Once you fill everything out, it will ask if it's okay, just type "yes" or hit enter.
Doing this creates a package file in your folder. You can open it by typing "code ." in the terminal, or just click "Open Folder" as you normally would on VS Code.

Once you open it, it'll generate a few things already for you based on what you answered during the setup.
Next, you can open New Terminal in VS Code and type: npm install express ejs
Doing so, installs both express and ejs to your web app.
Next, you can install nodemon to automatically restart the application in the terminal when you make changes to the lines of code.
To do this, type: npm install nodemon --save-dev
Next, you will want to create a folder to store your pages. I just simply named it "pages".
In the folder, you can go ahead and create the index.html file.
Next, you want to create your app.js file in the main folder of your project.
In the package file, under scripts, add a comma after the string "test" and start a new line (should be line 8) and type:
"start": "nodemon app.js"
This should be inside the brackets that is part of scripts.

Next, at the top of the app.js file, you want to add the following:
const express = require("express")
const app = express()
const port = xxxx
Replace xxxx with whatever number port you want to work with.

Once you've done this, add another line of code as followed:
app.listen(port), () => console.info("Hello World!")

If you've followed all of the above steps carefully, you can go ahead and type in the terminal: "npm start"
This will officially start your project!

To open your project on the browser, open your browser and type: localhost:xxxx
Replace the xxxx with the number you chose for your port.
If done correctly, it'll display something like this:
Cannot GET /

If you GET that message, it means that everything is working correctly and you can begin to build your web application.

I wanted to write this software as a reminder of how to use Nodejs with HTML, CSS, and JavaScript, while turning the HTML files into EJS files. I thought it'd be a neat experience, and I was right. Once I was able to add my own third page, my Higher or Lower game, I was excited and proud of myself that I was able to understand what I learned from following along the video below.

[Software Demo Video](Coming Soon!)

# Web Pages

The home page just simply prints out "Hello World!" and shares that this is my first web application.
It also features a picture of my Black Mage from Final Fantasy XIV.
Followed by some buttons to transition from the home page to one of the other two pages.

The About Page, I wasn't quite sure exactly what to put on it just yet, but plan to add some things to it soon.
It at least has a link to go back to the home page.

The Higher or Lower page features my Higher or Lower minigame that I wrote on a previous project.
This lets you play a game where you predict if your number is higher or lower than the computer's number.
Each number is randomly generated, and once you press either the higher or lower buttons, it reveals what the two numbers were and if you won, lost, or tied.
I added a link on the bottom to go back to the home page.

# Development Environment

- NodeJS
- Visual Studio Code
- HTML Programming Language
- CSS Programming Language
- JavaScript Programming Language
- Git & GitHub

# Useful Websites

- [Git](https://git-scm.com/download)
- [GitHub](https://github.com/)
- [Virtual Studio Code](https://code.visualstudio.com/download)
- [Download and learn NodeJS](https://nodejs.dev/en/)
- [Node.js Setup Tutorial](https://www.youtube.com/watch?v=A01KtJTv1oc)

# Future Work

* Add some information on the About Page that explains the purpose of the web application.
* Turn the links into buttons that transition from page to page.
* Maybe add other games to this web application.