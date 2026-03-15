import express from 'express';
import cors from 'cors';
import dotenv from 'dotenv';
import connectDB from './config/db.js';
import ideaRoutes from './routes/ideaRoutes.js';

// Load env vars
dotenv.config();

const app = express();
const PORT = process.env.PORT || 5000 || 3001;

// Connect DB
connectDB();

// Middleware
app.use(cors({
    origin: process.env.NODE_ENV === 'production'
        ? process.env.FRONTEND_URL
        : 'http://localhost:3000'
}));
app.use(express.json());

// Routes
app.use('/api/ideas', ideaRoutes);

// Error handling middleware
app.use((err, req, res, next) => {
    console.error(err.stack);
    res.status(500).json({ message: 'Server Error' });
});

app.get('/', (req, res) => {
    res.json({ message: 'IdeaSpark API running!' });
});

const server = app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
});

export default app;

