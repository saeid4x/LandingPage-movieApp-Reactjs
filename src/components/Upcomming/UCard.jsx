import React from 'react'

const UCard = ({item:{id, cover, name, time}}) => {
  return (
    <>
      <div className='movieBox'>
         <div className='img'>
            <img src={cover} alt="" />
         </div>

         <div className="text">
            <h3>{name}</h3>
            <span>{time}</span> <br />
            <button className='primary-btn'>
                <i className="fa fa-play"></i> PPLAY NOW
            </button>
         </div>
      </div>
    </>
  )
}

export default UCard
