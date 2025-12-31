import express from "express";
import bodyParser from "body-parser";


const app = express();
const port = 3000;
let path;

let blogs = [];

app.use(express.static("public"));
app.use(bodyParser.urlencoded({extended: true}));

app.get("/", (req, res) => {
    res.render("partials/home.ejs");  
})

app.get("/blogs", (req, res) => {
    console.log(`Request: ${req.url}`);
    res.render("partials/blogs.ejs", {
        blogs: blogs
    });
})

app.get("/blogs/:id", (req, res) => {
    console.log("request received")
    const blogId = req.params.id;
    console.log(blogs[blogId - 1]);
    res.render("partials/blog.ejs", {
        blog: blogs[blogId - 1]
    })
})

app.post("/search", (req, res) => {
    console.log("action : search");
    console.log(req.body.searchKey);

    const searchResults = [];

    blogs.forEach(blog => {
        if (blog.title === req.body.searchKey) {
            searchResults.push(blog);
        }
    })
    res.render("partials/blogs.ejs", {
        blogs: searchResults
    })
})

app.get("/publish", (req, res) => {
    res.render("partials/publish.ejs");
})

app.get("/about", (req, res) => {
    res.render("partials/about.ejs");
})

app.post("/publish", (req, res) => {
    res.render("partials/publish.ejs");
    blogs.push(
        {   
            id: blogs.length + 1,
            title: req.body["title"],
            content: req.body["content"],
            author: req.body["author"],
            date: new Date().getTime()
        }
    )
})

app.listen(port, () => {
    console.log(`Server is listening on port ${port}.`)
})