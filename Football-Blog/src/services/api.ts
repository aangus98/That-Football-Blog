import axios from 'axios';
import { User, Thought, Reaction } from '../types';

const BASE_URL = 'http://localhost:3001';

export const fetchUsers = async (): Promise<User[]> => {
  const response = await axios.get<User[]>(`${BASE_URL}/users`);
  return response.data;
};

export const fetchThoughts = async (): Promise<Thought[]> => {
  const response = await axios.get<Thought[]>(`${BASE_URL}/thoughts`);
  return response.data;
};

export const createThought = async (data: Partial<Thought>): Promise<Thought> => {
  const response = await axios.post<Thought>(`${BASE_URL}/thoughts`, data);
  return response.data;
};

export const updateThought = async (id: string, data: Partial<Thought>): Promise<Thought> => {
  const response = await axios.put<Thought>(`${BASE_URL}/thoughts/${id}`, data);
  return response.data;
};

export const deleteThought = async (id: string): Promise<void> => {
  await axios.delete(`${BASE_URL}/thoughts/${id}`);
};

export const addReaction = async (
  thoughtId: string,
  reaction: Partial<Reaction>
): Promise<Thought> => {
  const response = await axios.post<Thought>(`${BASE_URL}/thoughts/${thoughtId}/reactions`, reaction);
  return response.data;
};

export const removeReaction = async (thoughtId: string, reactionId: string): Promise<Thought> => {
  const response = await axios.delete<Thought>(
    `${BASE_URL}/thoughts/${thoughtId}/reactions/${reactionId}`
  );
  return response.data;
};
