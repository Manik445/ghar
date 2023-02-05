import React from 'react'

function Card({src , title , description , price}) {
  return (
    <div className='Card__section'>
     <img src={src} />
    <div className='Card__info'>
     <h2>{title}</h2>
     <h3>{description}</h3>
     <h3>{price}</h3>
       </div>     
    </div>
  )
}

export default Card