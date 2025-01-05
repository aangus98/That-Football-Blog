import React, { useState, useEffect } from 'react';
import { fetchUsers } from '../services/api';
import { User } from '../types';

const Profile: React.FC = () => {
  const [user, setUser] = useState<User | null>(null);

  useEffect(() => {
    const loadUser = async () => {
      try {
        const data = await fetchUsers();
        setUser(data[0]); // Fetch the first user for simplicity
      } catch (error) {
        console.error('Error fetching user:', error);
      }
    };

    loadUser();
  }, []);

  if (!user) return <p>Loading...</p>;

  return (
    <div className="container mt-4">
      <h1>{user.username}</h1>
      <p>Email: {user.email}</p>
      <h2>Friends</h2>
      <ul>
        {user.friends.map((friend) => (
          <li key={friend._id}>{friend.username}</li>
        ))}
      </ul>
    </div>
  );
};

export default Profile;
