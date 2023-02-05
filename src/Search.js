import React, { useState } from 'react'; 
import './Search.css'; 
import "react-date-range/dist/styles.css"; // main style file
import "react-date-range/dist/theme/default.css"; // theme css file   
import { DateRangePicker } from "react-date-range";   
import { Button } from '@mui/material';
import HailIcon from '@mui/icons-material/Hail';
// import DatePicker from "react-datepicker";



function Search() {
    const [startDate , setStartDate] = useState(new Date()); 
    const [endDate , setEndDate] = useState(new Date()); 

    const selectionRange = {
        startDate : startDate , 
        endDate : endDate ,
        key : 'selection'
    }
    function handleSelection(ranges) {
      setStartDate(ranges.selection.startDate);  
      setEndDate(ranges.selection.endDate); 
    }

  return (
    <div className='search'>
       <DateRangePicker ranges={
        [selectionRange]}  
        onChange={handleSelection}   
       />
       <h2>Number of Guest
        <HailIcon />
       </h2>
       <input min={0} 
       defaultValue={2}   
       type="number"
       />
       <Button>Search Ghar </Button>
    </div>
  )
}   

export default Search