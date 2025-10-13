import './App.css';
import Navbar from './components/Navbar';
import Hero from './components/Hero';

function App() {
  return (
    <div className="bg-black w-full m-0 p-0 font-poppins">
      <Navbar />
      <Hero />
      {/* Completely black webpage */}
    </div>
  );
}

export default App;
