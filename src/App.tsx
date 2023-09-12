import './App.css'
import Navbar from './components/Navbar';
import Map from "./components/Map";
import Footer from './components/Footer';

const App = () => {
  return (
    <>
      <Navbar></Navbar>
      <h1>Leaflet</h1>
      <Map></Map>
      <Footer></Footer>
    </>
  );
}

export default App;
