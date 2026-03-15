import React, { useState } from 'react'
import { createIdea } from '../services/api.js'

const CreateIdeaForm = ({ onIdeaCreated }) => {
    const [formData, setFormData] = useState({
        title: '',
        description: '',
        author: ''
    })
    const [errors, setErrors] = useState({})
    const [submitting, setSubmitting] = useState(false)

    const validateForm = () => {
        const newErrors = {}

        if (!formData.title.trim()) newErrors.title = 'Title is required'
        if (!formData.description.trim()) newErrors.description = 'Description is required'
        if (!formData.author.trim()) newErrors.author = 'Author name is required'

        setErrors(newErrors)
        return Object.keys(newErrors).length === 0
    }

    const handleSubmit = async (e) => {
        e.preventDefault()

        if (!validateForm()) return

        setSubmitting(true)
        try {
            await createIdea(formData)
            setFormData({ title: '', description: '', author: '' })
            setErrors({})
            onIdeaCreated()
        } catch (error) {
            console.error('Create idea failed:', error)
            alert('Failed to create idea. Please try again.')
        } finally {
            setSubmitting(false)
        }
    }

    const handleChange = (e) => {
        const { name, value } = e.target
        setFormData({
            ...formData,
            [name]: value
        })

        if (errors[name]) {
            setErrors({
                ...errors,
                [name]: ''
            })
        }
    }

    return (
        <form className="idea-form" onSubmit={handleSubmit}>
            <div className="form-group">
                <label htmlFor="title">Idea Title</label>
                <input
                    id="title"
                    type="text"
                    name="title"
                    value={formData.title}
                    onChange={handleChange}
                    className={errors.title ? 'error' : ''}
                    placeholder="Enter your idea title"
                />
                {errors.title && <span className="error-text">{errors.title}</span>}
            </div>

            <div className="form-group">
                <label htmlFor="description">Description</label>
                <textarea
                    id="description"
                    name="description"
                    rows="4"
                    value={formData.description}
                    onChange={handleChange}
                    className={errors.description ? 'error' : ''}
                    placeholder="Describe your idea in detail..."
                />
                {errors.description && <span className="error-text">{errors.description}</span>}
            </div>

            <div className="form-group">
                <label htmlFor="author">Author</label>
                <input
                    id="author"
                    type="text"
                    name="author"
                    value={formData.author}
                    onChange={handleChange}
                    className={errors.author ? 'error' : ''}
                    placeholder="Your name"
                />
                {errors.author && <span className="error-text">{errors.author}</span>}
            </div>

            <button
                type="submit"
                className="submit-btn"
                disabled={submitting}
            >
                {submitting ? 'Sparking...' : '🚀 Launch Idea'}
            </button>
        </form>
    )
}

export default CreateIdeaForm

