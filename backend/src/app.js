import express from "express";
import cors from "cors";
import standardRoutes from "./routes/standardRoutes.js";
import authRoutes from "./routes/authRoutes.js";

const app = express();

app.use(
  cors({
    origin: "http://localhost:3000",
    credentials: true,
  })
);

app.use(express.json());

app.get("/", (req, res) => {
  res.json({
    success: true,
    message: "RenewCred CMS API is running",
  });
});

app.use("/api/standards", standardRoutes);

app.use("/api/auth", authRoutes);

export default app;