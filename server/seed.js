import mongoose from 'mongoose';
import dotenv from 'dotenv';
import Idea from './models/Idea.js';

dotenv.config();

const seedIdeas = async () => {
    try {
        await mongoose.connect(process.env.MONGODB_URI || 'mongodb://localhost:27017/ideaspark');

        await Idea.deleteMany({});
        console.log('Cleared existing ideas');

        const ideas = [];
        const authors = ['Alice', 'Bob', 'Charlie', 'Diana', 'Eve', 'Frank', 'Grace', 'Henry', 'Ivy', 'Jack'];

        for (let i = 0; i < 50; i++) {
            ideas.push({
                title: `Innovative Idea #${i + 1}`,
                description: `This is a comprehensive demo idea #${i + 1} showcasing MERN stack capabilities with real-time upvoting, search, and full CRUD operations. Perfect for assignment showcase!`,
                author: authors[i % 10],
                upvotes: Math.floor(Math.random() * 25)
            });
        }

        await Idea.insertMany(ideas);
        console.log('✅ Successfully seeded 50 ideas!');

        process.exit(0);
    } catch (error) {
        console.error('Seed failed:', error.message);
        process.exit(1);
    }
};

seedIdeas();

