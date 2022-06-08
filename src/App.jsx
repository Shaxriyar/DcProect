
import Navbar from './components/Navbar/Navbar'
import Container from './components/Container/Container';
import AOS from "aos";
import "aos/dist/aos.css";
import './App.css';
import { useEffect } from 'react';

const App = () => {
  useEffect(() => {
    AOS.init();
    AOS.refresh();
  }, []);
  return (
    <div className='App'>
      <Navbar />
      <Container/>
    </div>
  );
}

export default App;
