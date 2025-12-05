// server.js - debug CORS version
const express = require("express");
const cors = require("cors");

const app = express();

// Log requests so we can see what's coming in
app.use((req, res, next) => {
  console.log("=== REQUEST ===");
  console.log(req.method, req.path);
  console.log("Headers:", req.headers);
  next();
});

// Enable CORS for all origins (debug mode)
app.use(cors({
  origin: true,           // reflect the request origin
  methods: ["GET","POST","PUT","DELETE","OPTIONS"],
  allowedHeaders: ["Content-Type","Authorization","X-Requested-With"],
  credentials: true
}));

// Make sure OPTIONS (preflight) is handled
app.options("*", cors());

app.use(express.json());

app.post("/login", (req, res) => {
  console.log("BODY:", req.body);
  res.status(200).json({ ok: true, received: req.body });
});

app.get("/", (req, res) => res.send("Server running"));

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => console.log("Server running on port", PORT));
