import React from 'react'

const IdeaCard = ({ idea, onUpdate }) => {
    const handleUpvote = async () => {
        try {
            const response = await fetch(`/api/ideas/${idea._id}/upvote`, {
                method: 'PUT'
            })
            if (response.ok) {
                onUpdate()
            }
        } catch (error) {
            console.error('Upvote failed:', error)
        }
    }

    const handleDelete = async () => {
        if (window.confirm('Delete this idea?')) {
            try {
                const response = await fetch(`/api/ideas/${idea._id}`, {
                    method: 'DELETE'
                })
                if (response.ok) {
                    onUpdate()
                }
            } catch (error) {
                console.error('Delete failed:', error)
            }
        }
    }

    return (
        <div className="idea-card">
            <div className="card-header">
                <h3>{idea.title}</h3>
                <span className="author">@{idea.author}</span>
            </div>
            <p className="description">{idea.description}</p>
            <div className="card-footer">
                <button className="upvote-btn" onClick={handleUpvote}>
                    👍 {idea.upvotes}
                </button>
                <button className="delete-btn" onClick={handleDelete}>
                    🗑️ Delete
                </button>
            </div>
            <small className="date">
                {new Date(idea.createdAt).toLocaleDateString()}
            </small>
        </div>
    )
}

export default IdeaCard

