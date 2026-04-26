const mongoose = require("mongoose");
const Bhakti = require("./models/Bhakti");

mongoose.connect("mongodb+srv://pujaAdmin:vedant211206@cluster0.hcgxuk6.mongodb.net/?appName=Cluster0");

const data = [
  {
    title: "Shree Ganesh Aarti",
    category: "aarti",
    content: "Jai Ganesh, Jai Ganesh, Jai Ganesh Deva..."
  },
  {
    title: "Hanuman Chalisa",
    category: "shlok",
    content: "Shri Guru Charan Saroj Raj..."
  },
  {
    title: "Shiv Tandav",
    category: "bhajan",
    content: "Jata Tavi Galaj Jala..."
  }
];

const seedDB = async () => {
  await Bhakti.deleteMany({});
  await Bhakti.insertMany(data);
  console.log("Data inserted successfully 🚀");
  mongoose.connection.close();
};

seedDB();