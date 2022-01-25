import React from "react" 
 
export default function Card(props) {  
    return (
    <div className="card">
        <img className="card__img" src={`/images/${props.item.cardImg}`}  />
        <div className="card__info">
            <div className="card__location"> 
            <i className="fas fa-map-marker-alt"></i>
                <h5 className="card__country">{props.item.location}</h5> 
                <a className="card__map-url" href={props.item.googleMapsUrl} target="_blank">View on Google Maps</a>
            </div> 
            <div className="card__title"> <p className="card__title-name">{props.item.title}</p> </div> 
            <div className="card__date">
                <span className="card__date-date">{props.item.startDate}</span> <span className="card__date-date">{props.item.endDate}</span>
            </div>
            <div className="card__description">
                <p className="card__description-text">{props.item.description}</p>
            </div>
        </div>
    </div> 
    )
}