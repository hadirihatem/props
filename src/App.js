import './App.css';
import Propc from './comp/Propc';
import myImage from './Macy.jpg'

function App() {
  var name = "William H. Macy";
  var age = 71;
  var profession = "actor";
  var bio = "shameless"
  

  return (
    <div className="App-header" >

    <Propc name={name} age={age} profession={profession} bio={bio}> <img src={myImage} alt='' className='chim'  ></img> </Propc>
    </div>
  );
}

export default App;
