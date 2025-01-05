export interface User {
    _id: string;
    username: string;
    email: string;
    friends: User[];
  }
  
  export interface Thought {
    _id: string;
    thoughtText: string;
    username: string;
    createdAt: string;
    reactions: Reaction[];
  }
  
  export interface Reaction {
    reactionBody: string;
    username: string;
    createdAt: string;
  }
  