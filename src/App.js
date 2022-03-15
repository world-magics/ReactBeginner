import '../src/index.css'
import MainComponent from './MainComponent'
function App() {
  const users = [
    { id: 1, name: 'Nathan', role: 'Web Developer' },
    { id: 2, name: 'John', role: 'Web Designer' },
    { id: 3, name: 'Jane', role: 'Team Leader' },
    ]
  
    const pStyle={
      fontSize:'24px',
      color:'blue',
      backgroundColor:'yellow'
    }
    

  return (
    <div className="App">
      <header className="App-header">
          <h1>The currently active users list:</h1>
          <p style={pStyle}>This is p style</p>
          <p style={{...pStyle,color:'red',backgroundColor:'black'}}>Inline styles are the most basic example of a </p>
          <ul>
            {
              users.map((user,index)=>{
                return(
                  <li key={index}>{user.name} as the {user.role}</li>
                )
              })
            }
          </ul>

          <hr/>
          <MainComponent/>
      </header>
    </div>
  );
}

export default App;
