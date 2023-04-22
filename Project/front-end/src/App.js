import logo from './logo.svg';
import WebBase from './views/WebBase';
import Signpage from './views/sigin_up/Signpage';
import Homepage from './views/home_page/Homepage';
import Card from './views/card-view/Card';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Profile from './views/profile/Profile';
import Tempone from './views/blog_create/Tempone';
import Template1 from './views/blog_create/template/Template1'
import Template2 from './views/blog_create/template/Template2'

function App() {

  return (

    <div>


      {/* <BrowserRouter>
        <Routes>
          <Route path="/" element={<Homepage></Homepage>}></Route>
          <Route path='signup' element={<Signpage></Signpage>}></Route>
          <Route path='profile' element={<Profile></Profile>}></Route>
          <Route path='createblog' element={<Tempone></Tempone>}></Route>
        </Routes>
        


  </BrowserRouter> */}

   {/* <Tempone></Tempone>  */}

   <Template2></Template2>
  

      

    </div>

  );
}

export default App;
