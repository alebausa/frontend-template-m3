import './App.css';
import { Routes, Route } from 'react-router-dom';
import { Toaster } from 'react-hot-toast';
import Home from './views/Home';
import Contact from './views/Contact';
import About from './views/About';
import Products from './views/Products';
import Company from './views/Company';
import Navbar from './components/Navbar';
import Projects from './views/Projects';
import ProjectDetails from './components/ProjectDetails';
import ErrorPage from './views/ErrorPage';
import Joke from './views/Joke';
import CreateProject from './views/CreateProject';
import EditProject from './views/EditProject';
import Signup from './views/auth/Signup';
import Login from './views/auth/Login';
import IsPrivate from './components/IsPrivate';

function App() {
  return (
    <div className="App">
      <Toaster/>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />}>
          <Route path="company" element={<Company />} />
          <Route path="products" element={<Products />} />
        </Route>
        <Route path="/contact" element={<Contact />} />
        <Route path="/create" element={<IsPrivate><CreateProject /></IsPrivate>} />
        <Route path="/edit/:id" element={<EditProject />} />
        <Route path="/projects" element={<Projects />} />
        <Route path="/projects/:id" element={<ProjectDetails />} />
        <Route path="/joke" element={<Joke />} />
        <Route path="/signup" element={<Signup />} />
        <Route path="/login" element={<Login />} />
        <Route path="*" element={<ErrorPage />} />
        </Routes>
    </div>
  );
}

export default App;
