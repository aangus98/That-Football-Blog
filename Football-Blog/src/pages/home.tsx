import React, { useState, useEffect } from 'react';
import { fetchThoughts } from '../services/api';
import { Thought } from '../types';
import ThoughtCard from '../components/thoughtCard';

const Home: React.FC = () => {
  const [thoughts, setThoughts] = useState<Thought[]>([]);

  useEffect(() => {
    const loadThoughts = async () => {
      try {
        const data = await fetchThoughts();
        setThoughts(data);
      } catch (error) {
        console.error('Error fetching thoughts:', error);
      }
    };

    loadThoughts();
  }, []);

  return (
    <div className="container mt-4">
      <h1>Recent Thoughts</h1>
      <div className="row">
        {thoughts.map((thought) => (
          <ThoughtCard key={thought._id} thought={thought} />
        ))}
      </div>
    </div>
  );
};

export default Home;
