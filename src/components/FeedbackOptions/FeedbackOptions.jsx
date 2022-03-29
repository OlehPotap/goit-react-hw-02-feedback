import s from './feedback-options.module.css'

const FeedbackOptions = ({onGood, onNeutral, onBad}={}) => {
    return (
        <div  className="feedback__buttom-box button-box">
    <h1 className="button-box__heading">Please leave feedback</h1>
    <ul className={s.list}>
      <li className={s.item}>
        <button className={s.button} onClick={onGood}>Good</button>
      </li>
      <li className={s.item}>
        <button className={s.button} onClick={onNeutral}>Neutral</button>
      </li>
      <li className={s.item}>
        <button className={s.button} onClick={onBad}>Bad</button>
      </li>
    </ul>
    </div>
    )
}

export default FeedbackOptions;