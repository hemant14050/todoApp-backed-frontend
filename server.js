const express = require("express");
const app = express();
const PORT = 3000;

app.get("/", (req, res)=> {
    res.sendFile(__dirname + "/views/todo.html");
});

app.get("/todo.css", (req, res)=> {
    res.sendFile(__dirname + "/views/todo.css");
});

app.get("/todo.js", (req, res)=> {
    res.sendFile(__dirname + "/views/todo.js");
});



app.listen(PORT, ()=> {
    console.log(`Todo app started at PORT: ${PORT}`);
});