
import { useEffect, useState } from 'react'
import './App.css'

const cacheTimeKey = 'cache_time';
const cacheCoins = 'cache_coins'

// async function myFetch() {
//   console.log("fetch queried")
//   return new Promise((resolve) => {
//     setTimeout(() => {
//       resolve( [
//         {
//           id: 'bitcoin',
//           current_price: 26431, 
//         },
//         {
//           id: 'ethereum',
//           current_price: 1683.43,
//         },
//         {
//           id: 'polkadot',
//           current_price: 4.49,
//         }
//       ])
//     }, 0);
//   })
  
// }


// async function storage () {
//   console.log("fetching data");
//   // const fetchedData = await myFetch("https://api.coingecko.com/api/v3/coins/markets?vs_currency=usd&order=market_cap_desc&per_page=100&page=1&sparkline=false&locale=en");
//   const fetchedData = await myFetch();
//   console.log(fetchedData)
//   console.log("data fetch");
//   // const jsonData = await fetchedData.json();
//   const coinArray = fetchedData.slice(0, 3);
//   setCoins(coinArray);
// }



function App() {
  const [coins, setCoins] = useState([]);
  const [fetchFlag, setFetchFlag] = useState(true);



  useEffect(() => {

    const fetchData = async function () {

      const currentTime = new Date().getTime();
      const cacheTime = localStorage.getItem(cacheTimeKey);

      if(cacheTime === null) {
        console.log("cache is empty");
        // const fetchedData = await myFetch();
        const fetchedData = await fetch("https://api.coingecko.com/api/v3/coins/markets?vs_currency=usd&order=market_cap_desc&per_page=100&page=1&sparkline=false&locale=en");
        const jsonData = await fetchedData.json();
        const coinArray = jsonData.slice(0, 3);
        localStorage.setItem(cacheTimeKey, new Date().getTime());
        localStorage.setItem(cacheCoins, JSON.stringify(coinArray));
        setCoins(coinArray);
      }else if((currentTime-cacheTime)>60000) {
        console.log("cache has become old");
        const fetchedData = await fetch("https://api.coingecko.com/api/v3/coins/markets?vs_currency=usd&order=market_cap_desc&per_page=100&page=1&sparkline=false&locale=en");
        const jsonData = await fetchedData.json();
        const coinArray = jsonData.slice(0, 3);
        localStorage.setItem(cacheTimeKey, new Date().getTime());
        localStorage.setItem(cacheCoins, JSON.stringify(coinArray));
        setCoins(coinArray);
      }else {
        console.log("keep using the displayed value");
      }
          
    }
    
    
    fetchData();

  },[fetchFlag])

  useEffect(() => {
    const interval = setInterval(() => {
      console.log("setting flag");
      setFetchFlag(value => !value);
      console.log("flag set")
    }, (30000))

    return () => clearInterval(interval);
  }, [])

  return (
    <div>
      <ul>
        {coins.map((coin) => {
          return (
            <li key={coin.id}>Value (USD) : {coin.current_price}</li>
          )
        })}
      </ul>
    </div>
  )

}

export default App
