import React, { useState, useEffect } from 'react';
import { fetchUsers, fetchThoughts, deleteThought } from '../services/api';
import { User, Thought } from '../types';

const Admin: React.FC = () => {
  const [users, setUsers] = useState<User[]>([]);
  const [thoughts, setThoughts] = useState<Thought[]>([]);

  useEffect(() => {
    const loadData = async () => {
      try {
        const [userData, thoughtData] = await Promise.all([fetchUsers(), fetchThoughts()]);
        setUsers(userData);
        setThoughts(thoughtData);
      } catch (error) {
        console.error('Error loading data:', error);
      }
    };

    loadData();
  }, []);

  const handleDeleteThought = async (id: string) => {
    try {
      await deleteThought(id);
      setThoughts(thoughts.filter((thought) => thought._id !== id));
    } catch (error) {
      console.error('Error deleting thought:', error);
    }
  };

  return (
    <div className="container mt-4">
      <h1>Admin Dashboard</h1>

      <section className="mt-4">
        <h2>Users</h2>
        <ul className="list-group">
          {users.map((user) => (
            <li key={user._id} className="list-group-item">
              {user.username} ({user.email})
            </li>
          ))}
        </ul>
      </section>

      <section className="mt-4">
        <h2>Thoughts</h2>
        <ul className="list-group">
          {thoughts.map((thought) => (
            <li key={thought._id} className="list-group-item d-flex justify-content-between">
              <div>
                <strong>{thought.thoughtText}</strong> - {thought.username}
              </div>
              <button
                className="btn btn-danger btn-sm"
                onClick={() => handleDeleteThought(thought._id)}
              >
                Delete
              </button>
            </li>
          ))}
        </ul>
      </section>
    </div>
  );
};

export default Admin;
