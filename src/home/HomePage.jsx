import React from 'react'
import { useState } from 'react'
import Homes from '../components/homes/Homes'
import Trending from '../components/trending/trending'
import Upcomming from '../components/Upcomming/Upcomming'
import { latest, recommended, upcome } from '../dummyData'
 


    const HomePage = () => {
      
      const [items, setItems] = useState(upcome);
      const [item, setItem] = useState(latest);
      const [recommend, setRecommend] = useState(recommended)

      return (
        <>
          <Homes />
          <Upcomming items={items} title="Upcomming Movies" />
          <Upcomming items={item} title="Latest Movies" />
          <Trending />
          <Upcomming items={recommend} title="Recommended Movies" />
        </>
  )
}

export default HomePage
