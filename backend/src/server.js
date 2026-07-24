import dotenv from "dotenv";
import app from "./app.js";
import connectDB from "./config/db.js";
import createDefaultAdmin from "./utils/createAdmin.js";

dotenv.config();

const PORT = process.env.PORT || 5000;

const startServer = async () => {
  await connectDB();
  await createDefaultAdmin();

  app.listen(PORT, () => {
    console.log(`🚀 Server running on port ${PORT}`);
  });
};

startServer();