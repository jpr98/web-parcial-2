const express = require('express');

const app = express();

app.use(express.json());

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

app.listen(5000, () => {
    console.log("Server listening on port 5000...");
});