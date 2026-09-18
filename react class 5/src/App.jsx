import React, { useState, useEffect } from 'react'

function App() {
  const [users, setUsers] = useState([])
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState(null)

  useEffect(() => {

    fetch('https://jsonplaceholder.typicode.com/users')
      .then((res) => {
        if (!res.ok) {
          throw new Error('The data is not loading.!')
         }
        return res.json()
      })
      .then((data) => {
        setUsers(data)
        setLoading(false)
      })
      .catch((err) => {
        setError(err.message)
        setLoading(false)
      })
  }, [])


  if (loading) {
    return <h2>Loading Users... wait.</h2>
  }


  if (error) {
    return <h2 style={{ color: 'red' }}>Error: {error}</h2>
  }


  return (
    <div>
      <h1>User List (useEffect)</h1>
      {users.map((user) => (
        <h3 key={user.id}>{user.name} - ({user.email})</h3>
      ))}
    </div>
  )
}

// function App() {
//   const [nbr, setnbr] = useState(0)
//   const [nbr2, setnbr2] = useState(45)
//   return (
//     <>
//       <h1>halo</h1>
//       <h2>{nbr}</h2>
//       <h2>{nbr2}</h2>
//       <button onClick={() =>
//         setnbr(nbr + 1)
//       }>
//         Increment
//       </button>
//       <button onClick={() =>
//         setnbr2(nbr2 - 1)
//       }>
//         Decrement
//       </button>

//     </>
//   )
// }

export default App