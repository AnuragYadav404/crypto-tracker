async function myFetch() {
  console.log("fetch queried")
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve( [
        {
          id: "bitcoin",
          symbol: "btc",
          name: "Bitcoin",
          image: "https://assets.coingecko.com/coins/images/1/large/bitcoin.png?1547033579",
          current_price: 25961,
          market_cap: 505607043894,
          market_cap_rank: 1,
          fully_diluted_valuation: 545575488505,
          total_volume: 20071438969,
          high_24h: 26571,
          low_24h: 25677,
          price_change_24h: -396.95950168645504,
          price_change_percentage_24h: -1.506,
          market_cap_change_24h: -6587799325.737854,
          market_cap_change_percentage_24h: -1.28619,
          circulating_supply: 19461556,
          total_supply: 21000000,
          max_supply: 21000000,
          ath: 69045,
          ath_change_percentage: -62.37052,
          ath_date: "2021-11-10T14:24:11.849Z",
          atl: 67.81,
          atl_change_percentage: 38215.2505,
          atl_date: "2013-07-06T00:00:00.000Z",
          roi: null,
          last_updated: "2023-08-19T05:16:04.836Z"
        },
        {
            id: "ethereum",
            symbol: "eth",
            name: "Ethereum",
            image: "https://assets.coingecko.com/coins/images/279/large/ethereum.png?1595348880",
            current_price: 1660.7,
            market_cap: 199699419185,
            market_cap_rank: 2,
            fully_diluted_valuation: 199699419185,
            total_volume: 11626939208,
            high_24h: 1694.04,
            low_24h: 1644.21,
            price_change_24h: -9.689371334498901,
            price_change_percentage_24h: -0.58007,
            market_cap_change_24h: -933822742.4560547,
            market_cap_change_percentage_24h: -0.46544,
            circulating_supply: 120210036.265943,
            total_supply: 120210036.265943,
            max_supply: null,
            ath: 4878.26,
            ath_change_percentage: -65.93288,
            ath_date: "2021-11-10T14:24:19.604Z",
            atl: 0.432979,
            atl_change_percentage: 383725.39765,
            atl_date: "2015-10-20T00:00:00.000Z",
            roi: {
            times: 84.48750708222717,
            currency: "btc",
            percentage: 8448.750708222717
            },
            last_updated: "2023-08-19T05:16:10.011Z"
        },
        {
            id: "tether",
            symbol: "usdt",
            name: "Tether",
            image: "https://assets.coingecko.com/coins/images/325/large/Tether.png?1668148663",
            current_price: 0.999513,
            market_cap: 82873851633,
            market_cap_rank: 3,
            fully_diluted_valuation: 82873851633,
            total_volume: 24867998397,
            high_24h: 1.006,
            low_24h: 0.996399,
            price_change_24h: 0.00014755,
            price_change_percentage_24h: 0.01476,
            market_cap_change_24h: 45194171,
            market_cap_change_percentage_24h: 0.05456,
            circulating_supply: 82846484080.7792,
            total_supply: 82846484080.7792,
            max_supply: null,
            ath: 1.32,
            ath_change_percentage: -24.41761,
            ath_date: "2018-07-24T00:00:00.000Z",
            atl: 0.572521,
            atl_change_percentage: 74.6708,
            atl_date: "2015-03-02T00:00:00.000Z",
            roi: null,
            last_updated: "2023-08-19T05:15:01.590Z"
        },
      ])
    }, 0);
  })
  
}

export default myFetch;