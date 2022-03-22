import'./statistics.css'

const Statistics = ({good, neutral, bad, total}={}) => {
    let percentage = good / (good + neutral + bad) * 100;
    return (
        <div className="feedback__stats-box stats-box">
    <ul className="stats-box__list">
        <li className="stats-box__list-item">Good: {good}</li>
        <li className="stats-box__list-item">Nautral: {neutral}</li>
        <li className="stats-box__list-item">Bad: {bad}</li>
        <li className="stats-box__list-item">Total: {total}</li>
        <li className="stats-box__list-item">Positive percentage: {Math.trunc(percentage)}%</li>
      </ul>
    </div>
    )
}

export default Statistics;