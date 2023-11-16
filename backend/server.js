const express = require("express");
const notes = require("./data/notes");
const dotenv = require("dotenv");
const cors = require("cors");


const app = express();
dotenv.config();
app.use(cors());

app.get('/', (req,res) => {
    res.send("api is runnnig!!");
})

app.get('/api/users', (req,res) => {
    res.json(notes);
})

app.get('/api/users/:id', (req,res) => {
    const note = notes.find((n) => n._id === req.params.id);
    res.json(note);
})


const PORT = process.env.PORT || 5000;
app.listen(PORT, console.log(`Server Started on Port : ${PORT} `));