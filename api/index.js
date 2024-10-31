import express from 'express';
import bcrypt from 'bcryptjs';
import jwt from 'jsonwebtoken';
import cors from 'cors';
import dotenv from 'dotenv';

const PORT = process.env.PORT || 3010;
const app = express();
const users = []; // Массив для хранения пользователей (для тестов)

dotenv.config();
app.use(express.json());
app.use(cors());

const generateToken = (user) => {
    return jwt.sign({ id: user.id }, process.env.JWT_SECRET, { expiresIn: "1h" });
};

// Регистрация пользователя
app.post("/register", async (req, res) => {
    const { username, password } = req.body;
    const hashedPassword = await bcrypt.hash(password, 10);
    const user = { id: Date.now(), username, password: hashedPassword };
    users.push(user);
    res.status(201).json({ message: "User registered successfully" });
});

// Авторизация пользователя
app.post("/login", async (req, res) => {
    const { username, password } = req.body;
    const user = users.find((u) => u.username === username);

    if (!user || !(await bcrypt.compare(password, user.password))) {
        return res.status(401).json({ message: "Invalid credentials" });
    }

    const token = generateToken(user);
    res.json({ token });
});

// Проверка авторизации
app.get("/profile", (req, res) => {
    const token = req.headers.authorization?.split(" ")[1];
    if (!token) return res.status(401).json({ message: "Token required" });

    jwt.verify(token, process.env.JWT_SECRET, (err, user) => {
        if (err) return res.status(403).json({ message: "Invalid token" });
        res.json({ message: `Welcome ${user.id}` });
    });
});

app.listen(PORT, ()=> {
    console.log(`Server listening on ${PORT}`);
});