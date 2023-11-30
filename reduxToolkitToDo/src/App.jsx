
import AddTodo from './components/AddTodo'
import Todos from './components/Todos'

function App() {
  const wrapperStyle = {
    width: '400px', // Adjust the width as needed
     // Adjust the height as needed
    border: '2px solid #ccc',
    padding: '20px',
    boxSizing: 'border-box',
    margin: 'auto', // Center the box horizontally
    marginTop: '50px', // Add space from the top
  };
  const titleStyles = {
    fontSize: '2em',
    fontWeight: 'bold',
    color: '#333',
    textAlign: 'center',
    margin: '10px 0',
  };
  return (
    <>
   
    <div style={wrapperStyle}>
    <h1 style={titleStyles}>SimplyTask</h1>
    <AddTodo />
      <Todos/>
    </div>
      
      
      
    </>
  )
}

export default App