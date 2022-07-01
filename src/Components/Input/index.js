import React from 'react';
import "./style.css"

function Input() {
  return (
    <div className='input-container'>
       <span className='paragraphs-span'>Paragraphs Number 
           <br />
           <input type="number" className='input-span'/>
           
       </span>

       <span className='include-span'>
           Include HTML?
           <br />
           <select name="" id="" className='select'>
               <option value="Yes">Yes</option>
               <option value="No">No</option>
           </select>
       </span>

    </div>
  )
}

export default Input;