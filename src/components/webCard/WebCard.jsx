
import './WebCard.css'

export const WebCard = ({titlte, image, link}) => {
  return (
    <a href={link}>

    <div className='card-container'>
        <h3>{titlte}</h3>
        <img src={image} alt='web screen' className='screenshot'/>
    </div>
    </a>
  )
}
