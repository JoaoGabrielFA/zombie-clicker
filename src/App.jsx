import './App.css'
import Card from './components/Card';
import Coins from './components/Coins';
import { useState } from 'react';

function App() {

  const [coins, setCoins] = useState(0);
  const [kills, setKill] = useState(0);

  return (
    <>
      <Coins coins={coins} />
      <div className="cards">
        <Card zombie={1} life={5}  coins={1} setCoins={setCoins} />
        <Card zombie={2} life={10} coins={2} setCoins={setCoins} />
        <Card zombie={3} life={20} coins={5} setCoins={setCoins} />
        <Card zombie={4} life={30} coins={1} setCoins={setCoins} />
        <Card zombie={5} life={40} coins={1} setCoins={setCoins} />
        <Card zombie={6} life={50} coins={1} setCoins={setCoins} />
      </div>
    </>
  )
}

export default App
