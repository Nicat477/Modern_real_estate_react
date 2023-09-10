import React from 'react'
import Back from '../common/Back'
import FeaturedCard from '../featured/FeaturedCard'
import img from "../images/services.jpg"
import "../featured/featured.css"
const Service = () => {
  return (
    <>
       <section className='services mb'>
            <Back name='Services' title='Services -All Services' cover={img} />
            <div className='featured container'>
              <FeaturedCard />
            </div>
      </section>
    </>
  )
}

export default Service
