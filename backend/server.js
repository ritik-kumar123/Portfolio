// server.js
const express = require("express");
const cors = require("cors");
const dotenv = require("dotenv");
const sendMail = require("./utils/sendMail");

dotenv.config();

const app = express();
app.use(cors({
  origin: ["https://portfolio-ar-ritik.netlify.app"],
  methods: ["POST"],
}));


app.use(express.json());

// POST route to send email
app.post("/send-email", async (req, res) => {
  const { name, email, msg } = req.body;

  try {
    await sendMail({ name, email, msg });
    console.log(email)
    res.status(200).json({ message: "Email sent successfully!" });
  } catch (err) {
    console.error("Email error:", err);
    res.status(500).json({ message: "Failed to send email" });
  }
});

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`Server started on port ${PORT}`));
