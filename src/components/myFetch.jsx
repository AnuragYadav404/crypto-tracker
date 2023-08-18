async function myFetch() {
  console.log("fetch queried")
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve( [
        {
          id: 'bitcoin',
          current_price: 26431, 
        },
        {
          id: 'ethereum',
          current_price: 1683.43,
        },
        {
          id: 'polkadot',
          current_price: 4.49,
        }
      ])
    }, 0);
  })
  
}

export default myFetch;