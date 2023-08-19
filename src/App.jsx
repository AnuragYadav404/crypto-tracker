
import './App.css'
import useCoinData from './components/useCoinData'

import Coin from './components/Coin';



function App() {
  const coins = useCoinData();

  return (
    <div className='body'>
      <span><h3>Live Crypto Price Tracker</h3></span>
      <span>The site updates itself every minute automatically</span>
      <div className="thead-container">
        <table className="container">
          <thead>
            <tr>
              <th><h1>ID</h1></th>
              <th><h1>SYMBOL</h1></th>
              <th><h1>PRICE (USD)</h1></th>
              <th><h1>Price Change Percentage (24h)</h1></th>
            </tr>
          </thead>
        </table>
      </div>
      <div className="table-container">
        <table className='container'>
          <tbody>
            {coins.map((coin) => {
              return (
                  <Coin data={coin} key={coin.id}/>
              )
            })}
          </tbody>
        </table>
      </div>
    </div>
  )

}

export default App
