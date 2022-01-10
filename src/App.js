import logo from './logo.svg';
import './App.css';
import Profile from './profile/profile';

function App() {

  const alertMyInput = name => alert(name);

  return (
    <div className="App">
      <Profile fullName="Mouhamed Amine Mbarek" 
                    bio="There is great ability in knowing how to conveal one's ability." 
                    profession='Full Stack Developer'
                    alertMyInput={alertMyInput} 
                    >
                       <img src="/images/med.jpg" alt='myImage' style={{ width: '100px', height: '100px', borderRadius:"50%" }} />
                    </Profile>
    </div>
  );
}

export default App;
