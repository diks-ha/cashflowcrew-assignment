import React from 'react'
import IdeaCard from './IdeaCard.jsx'

const IdeaList = ({ ideas, onUpdate }) => {
    if (ideas.length === 0) {
        return (
            <div className="empty-state">
                <h3>No ideas yet</h3>
                <p>Be the first to share your idea!</p>
            </div>
        )
    }

    return (
        <div className="ideas-grid">
            {ideas.map(idea => (
                <IdeaCard
                    key={idea._id}
                    idea={idea}
                    onUpdate={onUpdate}
                />
            ))}
        </div>
    )
}

export default IdeaList

