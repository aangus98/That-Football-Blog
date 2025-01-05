import React from 'react';
import { Thought } from '../types';

interface ThoughtCardProps {
  thought: Thought;
}

const ThoughtCard: React.FC<ThoughtCardProps> = ({ thought }) => (
  <div className="col-md-4 mb-4">
    <div className="card">
      <div className="card-body">
        <h5 className="card-title">{thought.thoughtText}</h5>
        <p className="card-text">- {thought.username}</p>
        <p className="card-text">
          <small className="text-muted">
            {new Date(thought.createdAt).toLocaleString()}
          </small>
        </p>
      </div>
    </div>
  </div>
);

export default ThoughtCard;
