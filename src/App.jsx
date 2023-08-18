import { useEffect, useState } from 'react'
import './App.css'


const CACHE_KEY = 'cachedCoins';
const CACHE_TIME = 'cachedTime';


function getTime() {
  const currDate = new Date();
  const currTime = currDate.getHours() + ':' + currDate.getMinutes() + ':' + currDate.getSeconds();
  return currTime;
}

function App() {
  // const [coins, setCoins] = useState([]);
  // const [time, setTime] = useState(getTime());
  // const [currentTime, setCurrentTime] = useState(getTime());
  // const [fetchFlag, setFetchFlag] = useState(true);
  // const [error, setError] = useState(null);

  // useEffect(() => {
  //   const timeUpdate = async function() {
  //     setInterval(() => {
  //       setCurrentTime(getTime());
  //     }, 1000);
  //   }
  //   timeUpdate();
  // })

  // useEffect(() => {
  //   const getData = async function() {
  //     try{
  //       const dataFetch = await fetch('https://api.coingecko.com/api/v3/coins/markets?vs_currency=usd&order=market_cap_desc&per_page=100&page=1&sparkline=false&locale=en');
  //       const dataJson = await dataFetch.json();
  //       const coinsArray = dataJson.slice(0, 5);
  //       setCoins(coinsArray);
  //       setTime(getTime());
  //       setError(null); 
       
  //     }catch (er){
        
  //     }  
  //   }
  //   getData();
  // }, [fetchFlag])


  // useEffect(() => {
  //   const interval = setInterval(() => {
  //     setFetchFlag(fetchFlag => !fetchFlag);
  //   }, 120000)
  //   return () => clearInterval(interval);
  // }, [])



  // const [coins, setCoins] = useState([]);
  // const [time, setTime] = useState(getTime());
  // const [currentTime, setCurrentTime] = useState(getTime());
  // const [fetchFlag, setFetchFlag] = useState(true);
  // const [error, setError] = useState(null);
  // const [intervalTime, setIntervalTime] = useState(2*60*1000);


  // useEffect(() => {
  //   const getData = async function () {
  //     try{
  //       const dataFetch = await fetch('https://api.coingecko.com/api/v3/coins/markets?vs_currency=usd&order=market_cap_desc&per_page=100&page=1&sparkline=false&locale=en');
  //       const dataJson = await dataFetch.json();
  //       const coinsArray = dataJson.slice(0, 5);
  //       setCoins(coinsArray);
  //       setTime(getTime());
  //       setError(null); 
  //       if(intervalTime === (10*60*1000)) {
  //         setIntervalTime((2*60*1000));
  //       }
       
  //     }catch (er){
  //       console.log("Fetch Error has occured");
  //       setError("Fetch Error has occured");
  //       setIntervalTime(10*60*1000);
  //     } 
  //   }
  //   getData();
  // }, [fetchFlag, intervalTime])

  // useEffect(() => {
  //     const timeUpdate = async function() {
  //       setInterval(() => {
  //         setCurrentTime(getTime());
  //       }, 1000);
  //     }
  //     timeUpdate();
  //   })


  // useEffect(() => {
  //   const interval = setInterval(() => {
  //     setFetchFlag((value) => !value)
  //   },intervalTime)

  //   return () => clearInterval(interval);
  // },[intervalTime])

  const [coins, setCoins] = useState([]);
  const [time, setTime] = useState(getTime());
  const [currentTime, setCurrentTime] = useState(getTime());
  const [fetchFlag, setFetchFlag] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const timeUpdate = function() {
      setInterval(() => {
        setCurrentTime(getTime());
      }, 1000);
    }
    timeUpdate();
  }, [])


  useEffect(() => {
    const lastCacheTime = localStorage.getItem(CACHE_TIME);
    const presentTime = new Date().getTime();
    if(lastCacheTime && (presentTime-lastCacheTime <= (4*60*1000))) {
      console.log("Using cached data");
      const cachedData = localStorage.getItem(CACHE_KEY);
      if (cachedData) {
        setCoins(JSON.parse(cachedData));
        setError(null);
      }
    }
  }, [])

  useEffect(() => {
    const getData = async function() {
      try{
        const dataFetch = await fetch('https://api.coingecko.com/api/v3/coins/markets?vs_currency=usd&order=market_cap_desc&per_page=100&page=1&sparkline=false&locale=en');
        const dataJson = await dataFetch.json();
        const coinsArray = dataJson.slice(0, 5);
        localStorage.setItem(CACHE_KEY, JSON.stringify(coinsArray));
        localStorage.setItem(CACHE_TIME, new Date().getTime());
        setCoins(coinsArray);
        setTime(getTime());
        setError(null); 
       
      }catch (er){
        setError("Fetch error has occured");
      }  
    }
    const lastCacheTime = localStorage.getItem(CACHE_TIME);
    const presentTime = new Date().getTime();
    if(lastCacheTime === null) {
      console.log("No previous cache data");
      getData();
    }else if(lastCacheTime && (presentTime-lastCacheTime >= (4*60*1000))) {
      console.log("Updating cache data")
      getData();
    }else {
      console.log("not fetching");
    }
  }, [fetchFlag])


  useEffect(() => {
    const interval = setInterval(() => {
      setFetchFlag(fetchFlag => !fetchFlag);
    }, 120000)
    return () => clearInterval(interval);
  }, [])


  return (
    <>
    <p>Current Time is : {currentTime}</p>
    {error && <p className="error-message">{error}</p>}
    {!error && (<div className="display">
      <h2>Updates every 2 mins</h2>
      <ul>
        {coins.map((coin) => {
          return (
            <li key={coin.id}>
              <p>{coin.name} value (in USD) : {coin.current_price}</p>
              <img src={coin.image} alt={coin.id} />
            </li>
          )
        })}
      </ul>
      
    </div>)}
    <h3>Last updated: {time}</h3>
    </>
  )
}

export default App
