import './App.css';
import Sidebar from './pages/Sidebar/Sidebar';
import GlobalStyle from './Styles/GlobalStyle';
import Home from './pages/Home/Home';
import Profil from './pages/Profil/Profil';
import Projets from './pages/Home/Projets';
import { Route, Routes } from 'react-router-dom';
import Pageprojet from './pages/Home/Pageprojet';
import Login_component from './pages/Authentification/Login_component';
import Signup_component from './pages/Authentification/Signup_component';
import Userdetails from './pages/Authentification/Userdetails';
import Ajouterprojet from './pages/creationprojet/Ajouterprojet';
import Ajouterinfopers from './pages/informationspers/Ajouterinfopers';
import Projetenvoye from './pages/creationprojet/Projetenvoye';
import Projetsaffiches from './pages/creationprojet/Projetsaffiches';

function App() {
  return (
    <div className="App">
        <Routes> 
        <Route path="/profil" element={<Profil/>}/> 
        <Route path="/home" element={<Home/>}/> 
        <Route path="/projets" element={<Projets/>}/> 
        <Route path="/pageprojet" element={<Pageprojet/>}/> 
        <Route path="/login" element={<Login_component/>}/> 
        <Route path="/signup" element={<Signup_component/>}/> 
        <Route path="/userdetails" element={<Userdetails/>}/> 
        <Route path="/ajouterprojet" element={<Ajouterprojet/>}/> 
        <Route path="/ajouterinfopers" element={<Ajouterinfopers/>}/> 
        <Route path="/projetenvoye" element={<Projetenvoye/>}/> 
        <Route path="/projetsaffiches" element={<Projetsaffiches/>}/> 
        </Routes>
        <GlobalStyle/>
        <Sidebar/> 
    
    </div>
  );
}

export default App;
