import React from 'react';

// Child Component
function UserCard({ name, role, isOnline }) {
  return (
    <div style={{
      border: '1px solid #ccc',
      borderRadius: '8px',
      padding: '16px',
      margin: '10px 0',
      backgroundColor: '#f9f9f9'
    }}>
      <h2>{name}</h2>
      <p>Role: <strong>{role}</strong></p>
      <p>Status: {isOnline ? "🟢 Online" : "🔴 Offline"}</p>
    </div>
  );
}

export default UserCard;