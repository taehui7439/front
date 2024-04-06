import styled from 'styled-components';
import * as SC from './components/navbar/navbarStyle';
import Weather from "./components/weather/weather";
import Navbar from "./components/navbar/navbar";

function App() {
  return (
    <div>
      <Navbar />
      <Weather />
      <h1>how-weather</h1>

    </div>
  );
}

export default App;
