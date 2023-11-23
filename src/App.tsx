import React, {useState}from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import './App.css';
import Home from "./Pages/Home"
import Settings from "./Pages/Settings"
import Profile from "./Pages/Profile"
import Messages from "./Pages/Messages"
import Navbar, {NavButton} from "./Components/Navbar";
import Homeicon from "./Assets/homeicon.png"

function App() {

  const [ activeButton , setActiveButton ] = useState( 0 )

  return (
    <div className="App">
      <Router>
        <Routes>
          <Route path={"/"} element={ <p>root</p>}></Route>
          <Route path={"/home"} element={ <Home/> }></Route>
          <Route path={"/messages"} element={<Messages/>}></Route>
          <Route path={"/profile"} element={<Profile/>}></Route>
          <Route path={"/settings"} element={<Settings/>}></Route>
        </Routes>
        <Navbar>
          <NavButton id={0} buttonController={[ activeButton , setActiveButton ]} to={"home"} icon={Homeicon} alt={"homeicon"}/>
          <NavButton id={1} buttonController={[ activeButton , setActiveButton ]} to={"messages"} icon={Homeicon} alt={"messageicon"}/>
          <NavButton id={2} buttonController={[ activeButton , setActiveButton ]} to={"profile"} icon={Homeicon} alt={"profileicon"}/>
          <NavButton id={3} buttonController={[ activeButton , setActiveButton ]}  to={"settings"} icon={Homeicon} alt={"settings"}/>
        </Navbar>
      </Router>

    </div>
  );
}

export default App;
