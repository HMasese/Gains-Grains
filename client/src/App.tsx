import { Outlet } from 'react-router-dom';
import Navbar from './components/Navbar';
import Header from './components/header';
import Footer from './components/Footer';
import Animal from './components/animal';
import EnterButton from './components/EnterButton';
import Loginbutton from './components/Loginbutton';

function App() {
  return (
    <div>
      <Header />
      <Navbar />
      <main className='container pt-5'>
        <EnterButton />
        <Loginbutton />
        <Outlet />
        <Animal />
        
      </main>
      <Footer />
    </div>
  );
}

export default App
