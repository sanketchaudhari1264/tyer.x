const mongoose = require("mongoose");
const express = require("express");
const cors = require("cors");

const app = express();

app.use(cors());
app.use(express.json());

const PORT = process.env.PORT || 5000;

mongoose.connect("mongodb+srv://tyrexuser:Tyrex%4012345@cluster0.kfdws64.mongodb.net/tyrexdb?appName=Cluster0")
  .then(() => console.log("MongoDB connected successfully ✅"))
  .catch((err) => console.error("MongoDB connection error ❌", err));

const EnquirySchema = new mongoose.Schema({
  name: String,
  phone: String,
  message: String,
});

const Enquiry = mongoose.model("Enquiry", EnquirySchema);

app.get("/", (req, res) => {
  res.send("TyerX Backend is running 🚀");
});

app.post("/api/enquiry", async (req, res) => {
  try {
    const { name, phone, message } = req.body;

    const newEnquiry = new Enquiry({
      name,
      phone,
      message,
    });

    await newEnquiry.save();

    res.json({
      success: true,
      message: "Enquiry saved to database successfully ✅",
    });

  } catch (error) {
    console.error("Error saving enquiry ❌", error);

    res.status(500).json({
      success: false,
      message: "Server error",
    });
  }
});

app.post("/api/admin/login", (req, res) => {

  const { email, password } = req.body;

  const adminEmail = "admin@tyrex.com";
  const adminPassword = "123456";

  if (email === adminEmail && password === adminPassword) {
    res.json({ success: true });
  } else {
    res.json({ success: false });
  }

});

app.get("/api/enquiries", async (req, res) => {

  try {

    const enquiries = await Enquiry.find().sort({ _id: -1 });

    res.json(enquiries);

  } catch (error) {

    console.error("Error fetching enquiries ❌", error);

    res.status(500).json({ message: "Server error" });

  }

});

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
