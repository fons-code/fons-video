import React from "react";
import { connect } from "react-redux";
import {setFavorite} from "../actions";
import play_icon from "../assets/static/play-icon.png";
import plus_icon from "../assets/static/plus-icon.png";
import "../assets/styles/components/carousselItem.scss";

const CarousselItem = (props) => {
  const { cover, title, year, duration, contentRating } = props;
	const handleSetFavorite = () => {
		props.setFavorite({
			cover,
			title,
			year,
			duration,
			contentRating,
		});
	};
  return (
    <div className="carousel-item">
      <img className="carousel-item__img" src={cover} alt={title} />
      <div className="carousel-item__details">
        <div>
          <img
            className="carousel-item__details--img"
            src={play_icon}
            alt="Play Icon"
          />
          <img
            className="carousel-item__details--img"
            src={plus_icon}
            alt="Plus Icon"
            onClick={handleSetFavorite}
          />
        </div>
        <p className="carousel-item__details--title">{title}</p>
        <p className="carousel-item__details--subtitle">
          {`${year} ${contentRating} ${duration}`}
        </p>
      </div>
    </div>
  );
};
// Redux
const mapDispatchToProps = {
	setFavorite,
};

// export default CarouselItem;
export default connect(null, mapDispatchToProps)(CarousselItem);