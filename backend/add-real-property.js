import mongoose from "mongoose";
import dotenv from "dotenv";
import Property from "./models/Property.js";

dotenv.config();

const realProperties = [
  {
    title: "Luxury 2BR Fallsview Condo",
    description:
      "Breathtaking Niagara Falls views from private balcony. Modern kitchen w/ quartz counters & stainless appliances. In-unit laundry. 1 parking spot included. Steps from Casino Niagara & restaurants.",
    price: 2450,
    bedrooms: 2,
    bathrooms: 2,
    address: "610 Clifton Hill, Unit 1204",
    city: "Niagara Falls",
    state: "ON",
    zipCode: "L2G 7N7",
    imageUrl:
      "https://images.unsplash.com/photo-1566073771259-6a8506099945?w=800",
    amenities: [
      "Fallsview balcony",
      "Gym & pool",
      "24hr concierge",
      "Underground parking",
      "In-suite laundry",
    ],
  },
  {
    title: "Cozy 1BR Downtown Apartment",
    description:
      "Charming renovated 1-bedroom in vibrant downtown core. Hardwood floors, exposed brick walls, central A/C/heat. Walk to shops, dining, transit. Pet-friendly (small pets).",
    price: 1625,
    bedrooms: 1,
    bathrooms: 1,
    address: "456 Queen Street, Apt 305",
    city: "Niagara Falls",
    state: "ON",
    zipCode: "L2V 2B5",
    imageUrl:
      "https://images.unsplash.com/photo-1564013799919-ab600027ffc6?w=800",
    amenities: [
      "Pet friendly",
      "In-suite laundry",
      "Bike storage",
      "Rooftop terrace",
      "Hydro included",
    ],
  },
  {
    title: "Spacious 3BR Family Townhome",
    description:
      "End-unit townhome perfect for families. Finished basement rec room, fully fenced yard, double garage. Close to schools, parks, Hwy 420. No pets/smoking.",
    price: 2899,
    bedrooms: 3,
    bathrooms: 2.5,
    address: "789 Lundy's Lane, Unit 15",
    city: "Niagara Falls",
    state: "ON",
    zipCode: "L2H 1G9",
    imageUrl:
      "https://images.unsplash.com/photo-1570129477492-45c003edd2be?w=800",
    amenities: [
      "Double garage",
      "Fenced private yard",
      "Finished basement",
      "Central vacuum",
      "6 appliances",
    ],
  },
  {
    title: "Modern Furnished Studio",
    description:
      "Brand new studio steps from Clifton Hill attractions. Fully furnished option available. High-speed internet included. Perfect for professionals or short-term rental.",
    price: 1350,
    bedrooms: 0,
    bathrooms: 1,
    address: "350 Clifton Hill, Suite 208",
    city: "Niagara Falls",
    state: "ON",
    zipCode: "L2G 1M2",
    imageUrl:
      "https://images.unsplash.com/photo-1445019980597-93fa8acb246c?w=800",
    amenities: [
      "Furnished available",
      "Utilities included",
      "High-speed WiFi",
      "Walk to attractions",
      "Secure entry",
    ],
  },
  {
    title: "Executive 2BR + Den Penthouse",
    description:
      "Top-floor corner unit with panoramic city views. 9' ceilings, hardwood throughout, gourmet kitchen. Includes 2 parking spots + locker. Immediate possession.",
    price: 3295,
    bedrooms: 2,
    bathrooms: 2,
    address: "100 Rainbow Blvd, Penthouse 1802",
    city: "Niagara Falls",
    state: "ON",
    zipCode: "L2H 3K6",
    imageUrl: "https://images.unsplash.com/photo-1558618047-3c8c76ca7e42?w=800",
    amenities: [
      "Penthouse level",
      "2 parking spots",
      "Storage locker",
      "Rooftop lounge access",
      "Wine cooler",
    ],
  },
];

const seedRealDB = async () => {
  try {
    await mongoose.connect(process.env.MONGODB_URI);
    console.log("✅ Connected to MongoDB Atlas");

    await Property.deleteMany({});
    console.log("🗑️ Cleared existing listings");

    const savedProperties = await Property.insertMany(realProperties);
    console.log(
      `🏠 Added ${savedProperties.length} professional rental listings!`
    );
    console.log("🌐 Frontend: http://localhost:3000/listings");
    console.log("🔧 Backend API: http://localhost:5001/api/properties");
  } catch (error) {
    console.error("❌ Error:", error.message);
  } finally {
    mongoose.connection.close();
  }
};

seedRealDB();
