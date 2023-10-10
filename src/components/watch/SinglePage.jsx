import React from 'react'
import { useEffect } from 'react';
import { useState } from 'react';
import {useParams} from 'react-router-dom';
import { homeData, recommended } from '../../dummyData';
import Upcomming from '../Upcomming/Upcomming';
import "./SinglePage.css"


const SinglePage = () => {
    const {id} = useParams();
    const [item, setItem] = useState(null);
    const [recommend, setRecommend] = useState(recommended)

    useEffect(() => {
        let item = homeData.find((item) => item.id === parseInt(id));
        if(item){
            setItem(item);
            console.log(item)
        }

    } , [id])
  return (
    <>
        {item ? (
            <> 
              <section className='singlePage'>
                 <div className="singleHeading">
                    <h1>{item.name}</h1>
                    <span> | {item.time} | </span>
                    <span>HD</span>
                 </div>

                 <div className='container'>
                    <video src={item.video} controls> </video>
                    <div className='para'>
                        <h3>Date: {item.date}</h3>
                        <p>{item.desc}</p>
                        
                        <p>
                            Get access to the direct Project Overview with this report.
                             Just by a quick glance, you’ll have an idea of the total tasks allotted 
                             to the team, number of milestones given & completed, total Links created for 
                             the project and the total time taken by all the users.
                             Each section would elaborate the data further, if chosen.
                        </p>

                        <p>
                            Get access to the direct Project Overview with this report.
                             Just by a quick glance, you’ll have an idea of the total tasks allotted 
                             to the team, number of milestones given & completed, total Links created for 
                             the project and the total time taken by all the users.
                             Each section would elaborate the data further, if chosen.
                        </p>

                        <p>
                            Get access to the direct Project Overview with this report.
                             Just by a quick glance, you’ll have an idea of the total tasks allotted 
                             to the team, number of milestones given & completed, total Links created for 
                             the project and the total time taken by all the users.
                             Each section would elaborate the data further, if chosen.
                        </p>

                    </div>

                    <div className='social'>
                        <h3> Share:</h3>
                            <img src='https://img.icons8.com/color/48/000000/facebook-new.png' />
                            <img src='https://img.icons8.com/fluency/48/000000/twitter-circled.png' />
                            <img src='https://img.icons8.com/fluency/48/000000/linkedin-circled.png' />

                    </div>
                 </div>
              </section>

              <Upcomming items={recommend} title="Recommended Movies" />

            </>
        ) : null}
    </>
  )
}

export default SinglePage
