import { useEffect, useState } from 'react'
// import myFetch from './myFetch';

const cacheTimeKey = 'cache_time';
const cacheCoins = 'cache_coins';


export default function useCoinData() {
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
  
      let flag = true;

      const fetchData = async function () {
  
        const currentTime = new Date().getTime();
        const cacheTime = localStorage.getItem(cacheTimeKey);
  
        if(cacheTime === null || (currentTime-cacheTime)>40000) {
          // console.log("Update cache"); for build only
          // const jsonData = await myFetch(); 
          const fetchedData = await fetch("https://api.coingecko.com/api/v3/coins/markets?vs_currency=usd&order=market_cap_desc&per_page=100&page=1&sparkline=false&locale=en");
          const jsonData = await fetchedData.json();
          const coinArray = jsonData;
          // console.log(coinArray);
          if(flag) {
            localStorage.setItem(cacheTimeKey, new Date().getTime());
            localStorage.setItem(cacheCoins, JSON.stringify(coinArray));
            setCoins(coinArray);
          }
        }else {
          // console.log("keep using the old cache"); for build only
        }
            
      }
      
      fetchData();
      
      return () => flag = false;

    },[fetchFlag])
  
    useEffect(() => {
      const interval = setInterval(() => {
        // console.log("setting flag"); for build only
        setFetchFlag(value => !value);
        // console.log("flag set") for build only
      }, (20000))
  
      return () => clearInterval(interval);
    }, [])

    return coins;
}