import './App.css'
import Card from './components/Card';
import Coins from './components/Coins';
import { useState } from 'react';

function App() {

  const [coins, setCoins] = useState(0);
  const [kills, setKills] = useState(0);

  return (
    <>
      <Coins coins={coins} />
      <Coins coins={kills}/>
      <div className="cards">
        <Card zombie={1} life={5}    coins={1}   setCoins={setCoins} kills={kills} setKills={setKills}/>
        <Card zombie={2} life={10}   coins={2}   setCoins={setCoins} kills={kills} setKills={setKills}/>
        <Card zombie={3} life={50}   coins={10}  setCoins={setCoins} kills={kills} setKills={setKills}/>
        <Card zombie={4} life={100}  coins={25}  setCoins={setCoins} kills={kills} setKills={setKills}/>
        <Card zombie={5} life={500}  coins={50}  setCoins={setCoins} kills={kills} setKills={setKills}/>
        <Card zombie={6} life={1000} coins={100} setCoins={setCoins} kills={kills} setKills={setKills}/>
      </div>
    </>
  )
}

export default App
