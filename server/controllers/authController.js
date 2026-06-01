import jwt from "jsonwebtoken";
import bcrypt from "bcryptjs";
import User from "../models/User.js";

const JWT_SECRET = process.env.JWT_SECRET || "dev_jwt_secret";

export const register = async (req, res) => {
  const { name, email, password } = req.body;
  if (!name || !email || !password) return res.status(400).json({ message: "Name, email and password required" });

  const existing = await User.findOne({ email: email.toLowerCase() });
  if (existing) return res.status(409).json({ message: "Email already registered" });

  const salt = await bcrypt.genSalt(10);
  const passwordHash = await bcrypt.hash(password, salt);

  const user = new User({ name, email: email.toLowerCase(), passwordHash });
  await user.save();

  const token = jwt.sign({ sub: user.email, name: user.name }, JWT_SECRET, { expiresIn: "8h" });
  return res.status(201).json({ token, user: { email: user.email, name: user.name } });
};

export const login = async (req, res) => {
  const { email, password } = req.body;
  if (!email || !password) return res.status(400).json({ message: "Email and password required" });

  const user = await User.findOne({ email: email.toLowerCase() });
  if (!user) return res.status(401).json({ message: "Invalid credentials" });

  const ok = await bcrypt.compare(password, user.passwordHash);
  if (!ok) return res.status(401).json({ message: "Invalid credentials" });

  const token = jwt.sign({ sub: user.email, name: user.name }, JWT_SECRET, { expiresIn: "8h" });
  return res.json({ token, user: { email: user.email, name: user.name } });
};

export const updateProfile = async (req, res) => {
  // Protected route - req.user should be populated by authMiddleware
  const email = req.user && req.user.sub;
  if (!email) return res.status(401).json({ message: "Unauthorized" });

  const { name, password } = req.body;
  const user = await User.findOne({ email: email.toLowerCase() });
  if (!user) return res.status(404).json({ message: "User not found" });

  if (name) user.name = name;
  if (password) {
    const salt = await bcrypt.genSalt(10);
    user.passwordHash = await bcrypt.hash(password, salt);
  }

  await user.save();

  // Optionally re-issue token with updated name
  const token = jwt.sign({ sub: user.email, name: user.name }, JWT_SECRET, { expiresIn: "8h" });
  return res.json({ token, user: { email: user.email, name: user.name } });
};
