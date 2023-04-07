// Imports
const express = require("express")
const app = express()
const port = 6900

// Static files
app.use(express.static("public"))
app.use("/css", express.static(__dirname + "public/css"))
app.use("/js", express.static(__dirname + "public/js"))
app.use("/img", express.static(__dirname + "public/img"))

// Set Pages
app.set("views", "./pages")
app.set("view engine", "ejs")

// Renders the HTML index file that was turned into an EJS file
app.get("", (req, res) => {
    res.render("index", { text: "This is my first web application using EJS"})
})

// Renders the HTML about file that was turned into an EJS file
app.get("/about", (req, res) => {
    res.render("about", { text: "This is the About Page. Details coming soon."})
})

// Renders the HTML about file that was turned into an EJS file
app.get("/highlow", (req, res) => {
    res.render("highlow", { text: "Welcome to Higher or Lower!"})
})

// Listens port 6900
app.listen(port, () => console.info("Listening on port 6900."))