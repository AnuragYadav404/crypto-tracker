
import { useEffect, useState } from 'react'
import './App.css'

const cacheTimeKey = 'cache_time';
const cacheCoins = 'cache_coins';



function App() {
  const [coins, setCoins] = useState([]);
  const [fetchFlag, setFetchFlag] = useState(true);

  useEffect(() => {
    const cacheTime = localStorage.getItem(cacheTimeKey);
    const currentTime = new Date().getTime();
    if((currentTime-cacheTime) < 40000) {
      const coinArray = JSON.parse(localStorage.getItem(cacheCoins));
      setCoins(coinArray);
    }   
  }, [])

  useEffect(() => {

    const fetchData = async function () {

      const currentTime = new Date().getTime();
      const cacheTime = localStorage.getItem(cacheTimeKey);

      if(cacheTime === null || (currentTime-cacheTime)>40000) {
        console.log("Update cache");
        // const fetchedData = await myFetch();
        const fetchedData = await fetch("https://api.coingecko.com/api/v3/coins/markets?vs_currency=usd&order=market_cap_desc&per_page=100&page=1&sparkline=false&locale=en");
        const jsonData = await fetchedData.json();
        const coinArray = jsonData.slice(0, 3);
        localStorage.setItem(cacheTimeKey, new Date().getTime());
        localStorage.setItem(cacheCoins, JSON.stringify(coinArray));
        setCoins(coinArray);
      }else {
        console.log("keep using the old cache");
      }
          
    }
    
    fetchData();

  },[fetchFlag])

  useEffect(() => {
    const interval = setInterval(() => {
      console.log("setting flag");
      setFetchFlag(value => !value);
      console.log("flag set")
    }, (20000))

    return () => clearInterval(interval);
  }, [])

  return (
    <div>
      <ul>
        {coins.map((coin) => {
          return (
            <li key={coin.id}>{coin.id} Value (USD) : {coin.current_price}</li>
          )
        })}
      </ul>
    </div>
  )

}

export default App
