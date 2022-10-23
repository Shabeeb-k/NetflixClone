import './App.css';
import React from 'react';
import Navbar from './Component/Navbar/Navbar';
import Banner from './Component/Banner/Banner';
import Rowpost from './Component/Rowpost/Rowpost';
import {Trending,Originals,ComedyMovies,HorrorMovies,RomanceMovies,action} from './urls'
function App() {
  return (
    <div className="App">
      <Navbar/>
      <Banner/>
      <Rowpost url={Originals} title ="Netflix Originals" />
      <Rowpost url={Trending}title ="Trending" isSmall />
      <Rowpost url={ComedyMovies}title ="Comedy Movies" isSmall />
      <Rowpost url={HorrorMovies}title ="Horror Movies" isSmall />
      <Rowpost url={RomanceMovies}title ="Romance Movies" isSmall />
      <Rowpost url={action}title ="Action" isSmall />
      
    </div>
  );
}

export default App;
