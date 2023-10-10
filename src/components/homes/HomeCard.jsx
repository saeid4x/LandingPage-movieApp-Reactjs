import React from 'react'
import {Link} from 'react-router-dom'
 
const HomeCard = ({item:{id, cover, name, rating, time, desc, starrring, genres, tags, video}}) => {
    
  return (
     <>
       <div className='box'>
         <div className="coverImage">
           
            <img src={cover} alt="" />
            
         </div>

         <div className='content flex'>
            <div className='details row'>
            <h1>{name}</h1>
            <div className='rating flex'>
                <i className="fa fa-star"></i>
                <i className="fa fa-star"></i>
                <i className="fa fa-star"></i>
                <i className="fa fa-star"></i>
                <i className="fa fa-star-half"></i>
            </div>

            <label>{rating}</label>
            <span>GP</span>
            <label>{time}</label>
          

         <p>{desc}</p>
         <div className="cast">
            <h4>
                <span>Starring</span>
                {starrring}
            </h4>

            <h4>
                <span>Genres</span> 
                {genres}
            </h4>

            <h4>
                <span>Tags</span>
                {tags}
            </h4>
            </div>

            <button className='prirmary-btn'>
                <i className='fas fa-play'></i>
                PLAY NOW
            </button>

         </div>

        

         <div className="playButton row">
            <Link to={`/singlepage/${id}`}>
                <button>
                    <div className="img">
                        <img src="./images/play-button.png" alt="" />
                        <img src="./images/play.png" alt="" className='change' />
                    </div>

                    WATCH TRAILER
                </button>
            </Link>
         </div>


       </div>
       </div>
       
     </>
  )
}

export default HomeCard
