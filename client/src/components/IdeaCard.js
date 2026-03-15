import React from 'react';
import { upvoteIdea, deleteIdea } from '../services/api';

const IdeaCard = ({ idea, onUpdate }) => {
    const handleUpvote = async (e) => {
        e.stopPropagation();
        try {
            await upvoteIdea(idea._id);
            onUpdate();
        } catch (error) {
            console.error('Upvote failed:', error);
        }
    };

    const handleDelete = async (e) => {
        e.stopPropagation();
        if (window.confirm('Delete this idea?')) {
            try {
                await deleteIdea(idea._id);
                onUpdate();
            } catch (error) {
                console.error('Delete failed:', error);
            }
        }
    };

    return (
        <div className="idea-card">
            <div className="card-header">
                <h3 className="card-title">{idea.title}</h3>
                <span className="author-badge">@{idea.author}</span>
            </div>
            <p className="description">{idea.description}</p>
            <div className="card-footer">
                <div className="upvote-container">
                    <button className="upvote-btn" onClick={handleUpvote} title="Upvote">
                        👍
                    </button>
                    <span className="upvote-count">{idea.upvotes}</span>
                </div>
                <button className="delete-btn" onClick={handleDelete} title="Delete">
                    Delete
                </button>
            </div>
            <div className="card-date">
                {new Date(idea.createdAt).toLocaleDateString()}
            </div>
        </div>
    );
};

export default IdeaCard;

