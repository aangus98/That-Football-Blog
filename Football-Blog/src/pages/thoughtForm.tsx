import React, { useState } from 'react';
import { createThought, updateThought } from '../services/api';
import { Thought } from '../types';
import { useNavigate } from 'react-router-dom';

interface ThoughtFormProps {
  initialData?: Partial<Thought>;
}

const ThoughtForm: React.FC<ThoughtFormProps> = ({ initialData = {} }) => {
  const [thoughtText, setThoughtText] = useState(initialData.thoughtText || '');
  const [username, setUsername] = useState(initialData.username || '');
  const navigate = useNavigate();

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    try {
      if (initialData._id) {
        // Update existing thought
        await updateThought(initialData._id, { thoughtText, username });
      } else {
        // Create new thought
        await createThought({ thoughtText, username });
      }
      navigate('/');
    } catch (error) {
      console.error('Error saving thought:', error);
    }
  };

  return (
    <div className="container mt-4">
      <h1>{initialData._id ? 'Edit Thought' : 'New Thought'}</h1>
      <form onSubmit={handleSubmit}>
        <div className="mb-3">
          <label htmlFor="thoughtText" className="form-label">
            Thought Text
          </label>
          <textarea
            id="thoughtText"
            className="form-control"
            value={thoughtText}
            onChange={(e) => setThoughtText(e.target.value)}
            required
          />
        </div>
        <div className="mb-3">
          <label htmlFor="username" className="form-label">
            Username
          </label>
          <input
            type="text"
            id="username"
            className="form-control"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
            required
          />
        </div>
        <button type="submit" className="btn btn-primary">
          Save Thought
        </button>
      </form>
    </div>
  );
};

export default ThoughtForm;
