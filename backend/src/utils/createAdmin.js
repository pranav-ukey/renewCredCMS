import bcrypt from "bcryptjs";
import Admin from "../models/Admin.js";

const createDefaultAdmin = async () => {
  try {
    const adminExists = await Admin.findOne({
      email: "admin@renewcred.com",
    });

    if (adminExists) {
      console.log("✅ Default admin already exists");
      return;
    }

    const hashedPassword = await bcrypt.hash("admin123", 10);

    await Admin.create({
      name: "Admin",
      email: "admin@renewcred.com",
      password: hashedPassword,
    });

    console.log("✅ Default admin created");
  } catch (error) {
    console.log(error.message);
  }
};

export default createDefaultAdmin;