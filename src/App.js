import './App.css';
import CreateTask from './Pages/CreateTask';
import Signup from './Pages/Signup';
import Login from './Pages/LoginForm';
import Navbar from './components/Navbar/Navbar';
import CreateNewProject from './Pages/createNewProject'
import ProjectDetails from './Pages/ProjectDetails'

import { Routes, Route } from 'react-router-dom';

function App() {
  return (
    <>
    <Navbar/>
      <Routes>
        <Route path="/signup" element={<Signup />} />
        <Route exact path="/" element={<Login/>} />
        <Route path="/createtask" element={<CreateTask />} />
        <Route path="/createnewproject" element={<CreateNewProject />} />
        <Route path="/projectdetails" element={<ProjectDetails />} />
      </Routes>
    </>
  )
}


export default App;