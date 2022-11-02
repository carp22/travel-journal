import React from 'react'

function List(props) {
  return (
    <div>
        <div className="places">
          <img src={props.place.imageUrl} alt="Not found" className='places-img' />
            <div className="places_information">
              <div className="google_map-link">
                <img src="../../images/at_mark.png" alt="" />
                <h4 className='places_location'>{props.place.location}</h4>
                <a  className='places_link' href={props.place.googleMapsUrl}>View on Google Maps</a>
              </div>
              <h2 className='places_title'>{props.place.title}</h2>
              <span className='places_dates'>{props.place.startDate} - {props.place.endDate}</span>
              <p className='places_description'>{props.place.description} </p>
            </div>
        </div>
    </div>
  )
}
export default List