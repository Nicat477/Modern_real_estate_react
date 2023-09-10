import React from 'react'
import Heading from '../common/Heading'
import FeaturedCard from './FeaturedCard'
import './featured.css'
const Featured = () => {
  return (
    <>
      <section className='featured  background'>
        <div className='container'>
          <Heading title='Search Your Next Home ' subtitle='Find new & featured property located in your local city.' />
           <FeaturedCard/>
        </div>
      </section>
    </>
  )
}

export default Featured
