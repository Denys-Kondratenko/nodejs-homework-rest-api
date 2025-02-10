// require("dotenv").config();

const express = require("express");
const logger = require("morgan");
const cors = require("cors");

// const mongoose = require("mongoose");

// mongoose.Promise = global.Promise;
// mongoose.connect(process.env.DB_URI, {
//   useNewUrlParser: true,
//   useCreateIndex: true,
//   useUnifiedTopology: true,
// });

// const { MongoClient } = require("mongodb");

// const DB_URI = process.env.DB_URI;

// console.log(DB_URI);

// const client = new MongoClient(DB_URI);

// async function run() {
//   try {
//     await client.connect();

//     await client.db("admin").command({ ping: 1 });
//     console.info(
//       "Pinged your deployment. You successfully connected to MongoDB!"
//     );
//   } catch (error) {
//     console.error(error);
//     process.exit(1);
//   } finally {
//     await client.close();
//   }
// }

// run().catch(console.dir);

const contactsRouter = require("./routes/api/contacts");

const app = express();

const formatsLogger = app.get("env") === "development" ? "dev" : "short";

app.use(logger(formatsLogger));
app.use(cors());
app.use(express.json());

app.use("/api/contacts", contactsRouter);

app.use((req, res) => {
  res.status(404).json({ message: "Not found" });
});

app.use((err, req, res, next) => {
  res.status(500).json({ message: err.message });
});

module.exports = app;

// denys
// 2b9nIsRwBDRcxkNa
