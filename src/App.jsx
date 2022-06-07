
import Navbar from './components/Navbar/Navbar'
import Container from './components/Container/Container';

import './App.css';
// import AOS from 'aos';
import { useEffect } from 'react';

const App = () => {
  useEffect(() => {

  }, []);
  return (
    <div className='App'>
      <Navbar />
      <Container/>
    </div>
  );
}

export default App;
