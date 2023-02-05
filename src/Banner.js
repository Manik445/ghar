import './Banner.css'
import { Button } from '@mui/material'
import { useState } from 'react'
import Search from './Search';

function Banner() {
    const [showSearch , setShowSearch] = useState(false); 
  return (
    <div className="Banner">  
    <div className='Banner__search'>

    {showSearch && <Search/>}      

        <Button className='Search__Buton' variant='outlined' 
        onClick={()=>setShowSearch(!showSearch )}>  {showSearch ? "Hide" : "Show Search"}  </Button>    
    </div>

     <div className='Banner_info'>
      <h1>Get out and strech your imagination</h1>  
      <h4>
        plan a different kind of  
        gateway to uncover the gem 
        inside you .    
      </h4>
      <Button>Explore NearBy</Button>
     </div>
    </div>
  )
}

export default Banner