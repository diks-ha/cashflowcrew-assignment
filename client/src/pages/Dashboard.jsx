import React, { useState, useEffect, useCallback } from 'react'
import CreateIdeaForm from '../components/CreateIdeaForm.jsx'
import IdeaList from '../components/IdeaList.jsx'
import SearchBar from '../components/SearchBar.jsx'

const Dashboard = () => {
    const [ideas, setIdeas] = useState([])
    const [filteredIdeas, setFilteredIdeas] = useState([])
    const [searchTerm, setSearchTerm] = useState('')
    const [loading, setLoading] = useState(true)

    const fetchIdeas = useCallback(async () => {
        try {
            setLoading(true)
            const response = await fetch('/api/ideas')
            const data = await response.json()
            setIdeas(data)
            setFilteredIdeas(data)
        } catch (error) {
            console.error('Error fetching ideas:', error)
        } finally {
            setLoading(false)
        }
    }, [])

    useEffect(() => {
        fetchIdeas()
    }, [fetchIdeas])

    useEffect(() => {
        const filtered = ideas.filter(idea =>
            idea.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
            idea.author.toLowerCase().includes(searchTerm.toLowerCase())
        )
        setFilteredIdeas(filtered)
    }, [searchTerm, ideas])

    const handleRefresh = useCallback(() => {
        fetchIdeas()
    }, [fetchIdeas])

    if (loading) {
        return (
            <div className="loading">
                <h2>Loading ideas...</h2>
            </div>
        )
    }

    return (
        <div className="container">
            <header className="header">
                <h1>💡 IdeaSpark</h1>
                <p>Pitch your ideas. Vote the best. Build the future.</p>
            </header>

            <div className="form-section">
                <CreateIdeaForm onIdeaCreated={handleRefresh} />
            </div>

            <SearchBar searchTerm={searchTerm} onSearchChange={setSearchTerm} />

            <IdeaList ideas={filteredIdeas} onUpdate={handleRefresh} />
        </div>
    )
}

export default Dashboard

