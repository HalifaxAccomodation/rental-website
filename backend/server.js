import express from "express";
import mongoose from "mongoose";
import cors from "cors";
import dotenv from "dotenv";
import propertyRoutes from "./routes/properties.js";
import contactRoutes from "./routes/contact.js";

dotenv.config();

const app = express();

// Middleware
app.use(cors());
app.use(express.json());

// MongoDB Connection
mongoose
  .connect(process.env.MONGODB_URI)
  .then(() => console.log("MongoDB Connected"))
  .catch((err) => console.log("MongoDB Error:", err));

// Routes
app.use("/api/properties", propertyRoutes);
app.use("/api/contact", contactRoutes);

app.get("/", (req, res) => {
  res.json({ message: "Rental Listings API" });
});

const PORT = process.env.PORT || 5001;
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});

export default app;
