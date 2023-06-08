// Write your code here.
import './index.css'

const CardDetails = props => {
  const {attributes} = props
  const {title, description, imgUrl, className} = attributes
  const card = 'card'
  return (
    <div className="card-container">
      <li className={`${className} ${card}`}>
        <h1 className="sub-heading">{title}</h1>
        <p className="sub-para">{description}</p>
        <img className="image" src={imgUrl} alt={title} />
      </li>
    </div>
  )
}

export default CardDetails
