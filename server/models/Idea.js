import mongoose from 'mongoose';

const IdeaSchema = new mongoose.Schema({
    title: {
        type: String,
        required: [true, 'Title is required'],
        trim: true
    },
    description: {
        type: String,
        required: [true, 'Description is required'],
        trim: true
    },
    author: {
        type: String,
        required: [true, 'Author is required'],
        trim: true
    },
    upvotes: {
        type: Number,
        default: 0
    }
}, {
    timestamps: true
});

const Idea = mongoose.model('Idea', IdeaSchema);

export default Idea;

