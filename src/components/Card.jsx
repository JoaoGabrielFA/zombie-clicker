import { useEffect, useState } from 'react';
import styles from './Card.module.css';

function Card({life, zombie, coins, setCoins}) {

  const [damage, setDamage] = useState(0);
  const [img, setImg] = useState(`../src/assets/zombie_${zombie}.png`);
  let status = "locked";
  useEffect(() => {
    if (damage == life) {
      setImg('../src/assets/get_coin.png');
    } else {
      setImg(`../src/assets/zombie_${zombie}.png`);
    }

    if (damage > life) {
      setDamage(0);
      setCoins(prev => prev + coins);
    }
  }, [damage]);

  if(zombie == 1) {
    status = "unlocked";
  }

  return (
    <div className={`${styles.card} ${styles[status]}`}>
      <button onClick={() => setDamage(damage + 1)} className={styles.card_button}>
        <img className={styles.card_img} src={img} alt="Zombie Img" />
      </button>
      <div className={styles.card_lifeBar}>
        <div className={styles.card_life} style={{ width: (100 - ((100 / life) * damage)) + '%' }}></div>
      </div>
    </div>
  )
}

export default Card;