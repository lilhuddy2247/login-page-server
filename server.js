const express = require("express");
const app = express();

app.use(express.json());

app.post("/login", (req, res) => {
    const { username, password } = req.body;

    console.log("Received:", username, password);

    // TODO: store/save/do something with the data.
    // If you want I can show you file saving or database storage.

    res.send("Login received");
});

app.get("/login", (req, res) => {
    res.send("Render server is running");
});

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => console.log("Server running on port", PORT));
