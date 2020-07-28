// Imports express
const express = require('express');

// Creates express app instance
const app = express();

// Set up middlewares
app.use(express.json());

// Set up routes
app.get("/", (req, res) => {
    res.send("You are on the homepage");
});

app.post("/post", (req, res) => {
    console.log(req.body);
    res.send(`Welcome ${req.body.user}`);
});

app.delete("/delete", (req, res) => {
    console.log(req.body);
    res.json({delete: true});
});

app.put("/put/:id", (req, res) => {
    res.send(`Task ${req.params.id} has been updated`);
});

// Start server on given port
app.listen(5000, () => {
    console.log("Server listening on port 5000...");
});