export default function Coin({data}) {
    return (
        <tr>
            <td>{data.id}</td>
            <td>{data.symbol}</td>
            <td>{data.current_price}</td>
            <td>{data.price_change_percentage_24h}</td>
        </tr>
    )
}