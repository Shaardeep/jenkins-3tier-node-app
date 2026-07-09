const express = require("express");
const app = express();

const PORT = 3000;

app.get("/", (req, res) => {
    res.send("Auto Deploy in Docker Working 🚀 - Take 10");
});

app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
});
