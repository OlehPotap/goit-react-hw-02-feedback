import './feedback-options.css'

const FeedbackOptions = ({onGood, onNeutral, onBad}={}) => {
    return (
        <div  className="feedback__buttom-box button-box">
    <h1 className="button-box__heading">Please leave feedback</h1>
    <ul className="button-box__list">
      <li className="button-box__list-item">
        <button className="button-box__button" onClick={onGood}>Good</button>
      </li>
      <li className="button-box__list-item">
        <button className="button-box__button" onClick={onNeutral}>Neutral</button>
      </li>
      <li className="button-box__list-item">
        <button className="button-box__button" onClick={onBad}>Bad</button>
      </li>
    </ul>
    </div>
    )
}

export default FeedbackOptions;