import express from "express";
import { ENV } from "./lib/env.js";
import path from "path";
import { connectDB } from "./lib/db.js";

const app = express();
const __dirname = path.resolve();
app.get("/healt", (req, res) => {
  res.status(200).json({
    msg: "This is our healt center",
  });
});
app.get("/books", (req, res) => {
  res.status(200).json({
    msg: "This is our book store",
  });
});
if (ENV.NODE_ENV === "production") {
  app.use(express.static(path.join(__dirname, "../frontend/dist")));
  app.get("/{*any}", (req, res) => {
    res.sendFile(path.join(__dirname, "frontend", "dist", "index.html"));
  });
}

const startServer = async () => {
  try {
    await connectDB();
    app.listen(ENV.PORT, () => {
      console.log(`server running ont this port: ${ENV.PORT}`);
    });
  } catch (error) {
    console.error("Error will be in MongoDB", error);
  }
};
startServer();
