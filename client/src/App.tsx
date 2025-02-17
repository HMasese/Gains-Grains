import { Outlet } from 'react-router-dom';
import Navbar from './components/Navbar';
import Header from './components/header';
import Footer from './components/Footer';
import Animal from './components/animal';

function App() {
  return (
    <div>
      <Header />
      <Navbar />
      <main className='container pt-5'>
        <Outlet />
        <Animal />
      </main>
      <Footer />
    </div>
  );
}

export default App
