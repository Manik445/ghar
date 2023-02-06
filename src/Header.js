import React from 'react'
import './Header.css'
import SearchIcon from '@mui/icons-material/Search';
import LanguageIcon from '@mui/icons-material/Language';
import DehazeIcon from '@mui/icons-material/Dehaze';
import { Avatar } from '@mui/material';
import { Link } from 'react-router-dom';

function Header() {
  return (
    // left section
    <div className='header'>
        <img src='https://assets.stickpng.com/images/580b57fcd9996e24bc43c513.png' alt='there is an image' className='image__section' />
    

    {/* middle section */}
    <div className='header__middle'>   
        <p>Anywhere</p>|
        <p>Anytime</p>
    <input type="text"/>
    <SearchIcon /> 
    </div> 


    {/* right section */}
    <div className='header__right'>
     <p>Become a Host</p>
     <LanguageIcon />
      <div className='right__section'>  
        <DehazeIcon />
        <Avatar />

      </div>




    </div>

    </div>
  )
}

export default Header