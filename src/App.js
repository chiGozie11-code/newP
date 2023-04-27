import './App.css';
import Main from './Main';
import Normal from "./Normal";
import { Route, Routes} from "react-router-dom"


function App() {
  return (
    <div className="App">
      
      <Routes>
        <Route path='/' element={<Main /> } exact/>
        <Route path='/Normal' element={ <Normal /> } />
      </Routes>
    </div>
  );
}

export default App;
