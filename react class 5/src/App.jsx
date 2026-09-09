import React, { useState, useEffect } from 'react'

function App() {
  const [users, setUsers] = useState([])
  const [loading, setLoading] = useState(true) // Loading track karne ke liye
  const [error, setError] = useState(null)     // Error track karne ke liye

  useEffect(() => {
    // API Call
    fetch('https://jsonplaceholder.typicode.com/users')
      .then((res) => {
        if (!res.ok) {
          throw new Error('Data load nahi ho saka!')
        }
        return res.json()
      })
      .then((data) => {
        setUsers(data)        // Data aa gaya, state mein set kar diya
        setLoading(false)     // Loading ko band kar diya
      })
      .catch((err) => {
        setError(err.message) // Agar error aaye toh save kar lo
        setLoading(false)     // Loading band kar do
      })
  }, []) // Khali array: Sirf ek baar chalega jab component load hoga

  // 1. Agar data load ho raha ho:
  if (loading) {
    return <h2>Loading Users... Barae meharbani intezaar karen.</h2>
  }

  // 2. Agar koi error aa jaye:
  if (error) {
    return <h2 style={{ color: 'red' }}>Error: {error}</h2>
  }

  // 3. Jab data successfully aa jaye:
  return (
    <div>
      <h1>User List (useEffect)</h1>
      {users.map((user) => (
        <h3 key={user.id}>{user.name} - ({user.email})</h3>
      ))}
    </div>
  )
}

export default App