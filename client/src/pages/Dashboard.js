import React, { useState, useEffect } from 'react';
import { getIdeas } from '../services/api';
import CreateIdeaForm from '../components/CreateIdeaForm';
import IdeaList from '../components/IdeaList';

const Dashboard = () => {
  const [ideas, setIdeas] = useState([]);
  const [filteredIdeas, setFilteredIdeas] = useState([]);
  const [searchTerm, setSearchTerm] = useState('');
  const [loading, setLoading] = useState(true);
  const [totalIdeas, setTotalIdeas] = useState(0);

  const fetchIdeas = async () => {
    try {
      setLoading(true);
      const { data } = await getIdeas();
      setIdeas(data);
      setFilteredIdeas(data);
      setTotalIdeas(data.length);
    } catch (error) {
      console.error('Failed to fetch ideas:', error);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchIdeas();
  }, []);

  useEffect(() => {
    const filtered = ideas.filter(idea =>
      idea.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
      idea.author.toLowerCase().includes(searchTerm.toLowerCase())
    );
    setFilteredIdeas(filtered);
    setTotalIdeas(filtered.length);
  }, [searchTerm, ideas]);

  const handleUpdate = () => {
    fetchIdeas();
  };

  if (loading) {
    return (
      <div className="loading-skeleton">
        <div className="header"></div>
        <div className="ideas-grid">
          <div className="skeleton-card"></div>
          <div className="skeleton-card"></div>
          <div className="skeleton-card"></div>
        </div>
      </div>
    );
  }

  return (
    <>
      <header className="header">
        <div className="header-content">
          <div className="logo">
            <span>💻</span>
            IdeaSpark
          </div>

          <div className="search-nav">
            <div className="search-container">
              <input
                type="text"
                className="search-input"
                placeholder="Search ideas..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
              />
              <img src="/search-icon.png" alt="Search" className="search-icon" />
            </div>
          </div>

          <div className="stats">
            <div className="stat-item">
              <div className="stat-number">{totalIdeas}</div>
              <div className="stat-label">Ideas</div>
            </div>
            <div className="stat-item">
              <div className="stat-number">↑{ideas.reduce((sum, idea) => sum + idea.upvotes, 0)}</div>
              <div className="stat-label">Upvotes</div>
            </div>
          </div>
        </div>
      </header>

      <div className="container">
        <div className="form-section">
          <CreateIdeaForm onIdeaCreated={handleUpdate} />
        </div>

        <section className="ideas-section">
          <h2 className="section-title">Recent Ideas</h2>
          <IdeaList ideas={filteredIdeas} onUpdate={handleUpdate} />
        </section>
      </div>
    </>
  );
};

export default Dashboard;

