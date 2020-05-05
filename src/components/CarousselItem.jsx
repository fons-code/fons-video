import React from 'react'
import play_icon from '../assets/static/play-icon.png'
import plus_icon from '../assets/static/plus-icon.png'
import '../assets/styles/components/carousselItem.scss'

const CarousselItem = ({cover, title, year, contentRating, duration}) =>(
    <div className="carousel-item">
    <img className="carousel-item__img" src={cover} alt={title}  />
    <div className="carousel-item__details">
      <div>
        <img className="carousel-item__details--img" src={play_icon} alt="Play Icon"/> 
        <img className="carousel-item__details--img" src={plus_icon} alt="Plus Icon"/> 
      </div>
<p className="carousel-item__details--title">{title}</p>
      <p className="carousel-item__details--subtitle">
        {`${year} ${contentRating} ${duration}`}
      </p>
    </div>
    </div>
)

export default CarousselItem;