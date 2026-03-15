import asyncHandler from 'express-async-handler';
import Idea from '../models/Idea.js';

// @desc    Get all ideas
// @route   GET /api/ideas
// @access  Public
const getIdeas = asyncHandler(async (req, res) => {
    // Sort by upvotes desc, then newest
    const ideas = await Idea.find().sort({ upvotes: -1, createdAt: -1 });
    res.json(ideas);
});

// @desc    Create idea
// @route   POST /api/ideas
// @access  Public
const createIdea = asyncHandler(async (req, res) => {
    const { title, description, author } = req.body;

    if (!title || !description || !author) {
        res.status(400);
        throw new Error('Please fill all fields');
    }

    const idea = new Idea({
        title,
        description,
        author
    });

    const createdIdea = await idea.save();
    res.status(201).json(createdIdea);
});

// @desc    Upvote idea
// @route   PUT /api/ideas/:id/upvote
// @access  Public
const upvoteIdea = asyncHandler(async (req, res) => {
    const idea = await Idea.findById(req.params.id);

    if (!idea) {
        res.status(404);
        throw new Error('Idea not found');
    }

    idea.upvotes += 1;
    const updatedIdea = await idea.save();
    res.json(updatedIdea);
});

// @desc    Delete idea
// @route   DELETE /api/ideas/:id
// @access  Public
const deleteIdea = asyncHandler(async (req, res) => {
    const idea = await Idea.findById(req.params.id);

    if (!idea) {
        res.status(404);
        throw new Error('Idea not found');
    }

    await idea.remove();
    res.json({ message: 'Idea deleted' });
});

export { getIdeas, createIdea, upvoteIdea, deleteIdea };

