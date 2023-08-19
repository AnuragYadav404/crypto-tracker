
import './App.css'
import useCoinData from './components/useCoinData'

import Coin from './components/Coin';



function App() {
  const coins = useCoinData();

  return (
    <div className='body'>
      <table className='container'>
        <thead>
          <tr>
            <th><h1>ID</h1></th>
            <th><h1>SYMBOL</h1></th>
            <th><h1>PRICE (USD)</h1></th>
            <th><h1>Price Change Percentage (24h)</h1></th>
          </tr>
        </thead>
        <tbody>
          {coins.map((coin) => {
            return (
                <Coin data={coin} key={coin.id}/>
            )
          })}
        </tbody>
      </table>
    </div>
  )

}

export default App
