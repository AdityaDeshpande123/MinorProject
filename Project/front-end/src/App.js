import logo from './logo.svg';
import WebBase from './views/WebBase';
import Signpage from './views/sigin_up/Signpage';
import Homepage from './views/home_page/Homepage';
import Card from './views/card-view/Card';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Profile from './views/profile/Profile';
<<<<<<< HEAD
import Tempone from './views/blog_create/Tempone';

=======
import Auth from './views/sigin_up/Auth.js'
>>>>>>> ed2adae648fe112f56d0166b78763bea7302e75f
function App() {

  return (

    <div>

      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Tempone></Tempone>}></Route>
          <Route path='signup' element={<Signpage></Signpage>}></Route>
          <Route path='profile' element={<Profile></Profile>}></Route>

        </Routes>


  </BrowserRouter>
  

    </div>

  );
}

export default App;
