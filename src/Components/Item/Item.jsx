import React from 'react'
import './Item.css'
import { useState } from 'react'

import { Link, useNavigate } from 'react-router-dom'
const Item = (props) => {
  console.log(props);
  
  const [selectedTopic,setSelectedTopic] = useState(null);
  const navigate = new useNavigate();

  const change=()=>{
    // setSelectedTopic(props);
    navigate('/login',{state:{props}});
  }




  return (

    <div className='item'>
       <img  className='topicQuiz' src={props.image} alt="" onClick={props.onClick} />
      {/* <p>{props.name}</p> */}
      {/* <div className="item-prices">
        <div className="item-price-new">
            ${props.new_price}
        </div>
        <div className="item-price-old">
            ${props.old_price}
        </div>
      </div> */}
    </div>
  )
}

export default Item
