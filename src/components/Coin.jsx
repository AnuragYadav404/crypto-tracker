export default function Coin({data}) {
    const classValue = (data.price_change_percentage_24h<0) ?  "negative" : "positive"
    return (
        <tr>
            <td>{data.id}</td>
            <td>{data.symbol}</td>
            <td >{data.current_price}</td>
            <td className={classValue}>{data.price_change_percentage_24h}</td>
        </tr>
    )
}