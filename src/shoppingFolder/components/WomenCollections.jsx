import React from 'react'

const WomenCollections = (props) => {
    const {title,image1,image2,image3}=props.ladiesFashion 

  return (
    <div>
        <h4>{title}</h4>
        <div className="bannerBox">
        <img src="assets/LadiesBanner.gif" alt="" />
        </div>
      <div className="mensColection">
        <img className='gentsImage' src={image1} alt={title}/>
        <img  className='gentsImage' src={image2} alt={title}/>
        <img className='gentsImage' src={image3} alt={title}/>
        <img className='gentsImage' src={image1} alt={title}/>
        <img  className='gentsImage' src={image2} alt={title}/>
        <img className='gentsImage' src={image3} alt={title}/>
      </div>
    </div>
  )
}

export default WomenCollections
