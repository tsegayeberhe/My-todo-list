import { useState } from 'react';

function App() {
  const todos = ['Wake up', 'Eat breakfast', 'Study React', 'Sleep'];

  return (
    <div style={{
      minHeight: '100vh',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      backgroundColor: '#f0f8ff', 
      padding: '20px'
    }}>
      <div style={{
        padding: '40px',
        borderRadius: '12px',
        textAlign: 'center',
        maxWidth: '400px',
        width: '100%',
        backgroundColor: '#ffffff', 
        boxShadow: '0 4px 12px rgba(0,0,0,0.1)'
      }}>
        <h1 style={{
          marginBottom: '30px',
          color: '#2c3e50' 
        }}>
          My To-Do List
        </h1>
        
        <ul style={{
          listStyle: 'none',
          padding: '0',
          margin: '0'
        }}>
          {todos.map((todo, i) => (
            <li key={i} style={{
              padding: '15px',
              margin: '10px 0',
              backgroundColor: '#e8f4f8', 
              color: '#2c3e50', 
              borderRadius: '8px',
              fontSize: '16px'
            }}>
              {todo}
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}

export default App;