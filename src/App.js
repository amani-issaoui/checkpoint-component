
import './App.css';
import Profilephoto from './component/profile/Profilephoto';
import Fullname from './component/profile/Fullname';
import Address from "./component/profile/Address";

function App() {
  return (
    <div className="App">
      <div className="contenu">
        <div className="photo-contenu">
          <div className="image-contenu"> 
          <Profilephoto/></div>
        
        </div>
      <div className="name"> 
      <Fullname/>
      <Address/>
      <button >Contact Me</button>
      </div>
      
      </div>
    </div>
  );
}

export default App;
