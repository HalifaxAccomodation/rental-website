import express from "express";
import Property from "../models/Property.js";

const router = express.Router();

// Get all properties
router.get("/", async (req, res) => {
  try {
    const properties = await Property.find({ available: true });
    res.json(properties);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
});

// Get single property
router.get("/:id", async (req, res) => {
  try {
    const property = await Property.findById(req.params.id);
    if (!property)
      return res.status(404).json({ message: "Property not found" });
    res.json(property);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
});

// Create property (for admin use)
router.post("/", async (req, res) => {
  const property = new Property(req.body);
  try {
    const newProperty = await property.save();
    res.status(201).json(newProperty);
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
});

export default router;
