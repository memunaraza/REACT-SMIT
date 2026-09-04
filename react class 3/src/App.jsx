import React from 'react';
import UserCard from './components/UserCard'; // Component import kiya

function App() {
  return (
    <div style={{ padding: '20px', fontFamily: 'sans-serif' }}>
      <h1>Team Members</h1>
      
      {/* Components ko yahan call kiya aur props paas kiye */}
      <UserCard name="Ali Khan" role="Frontend Developer" isOnline={true} />
      <UserCard name="Sara Ahmed" role="UI/UX Designer" isOnline={false} />
      <UserCard name="Usman Raza" role="Backend Engineer" isOnline={true} />
    </div>
  );
}

export default App;