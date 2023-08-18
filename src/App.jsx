
import './App.css'
import useCoinData from './components/useCoinData'




function App() {
  const coins = useCoinData();

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
