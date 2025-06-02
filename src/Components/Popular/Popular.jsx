import React, { useEffect, useState } from 'react'
import './Popular.css'
import topics from '../Assets/topic'
import Item from '../Item/Item'
import LoginSignup from '../../Pages/LoginSignup'
const Popular = () => {
  const [showLogin, setShowLogin] = useState(false);
  const [selectedTopic, setSelectedTopic] = useState(null);

  const handleTopicClick = (topic) => {
    setSelectedTopic(topic);
    setShowLogin(true);
  };

  const closeModal = () => {
    setShowLogin(false);
    setSelectedTopic(null);
  };
  // const [popularProducts,setPopularProducts] = useState("");


  // useEffect(()=>{
  //   fetch('http://localhost:4000/popularinwomen')
  //   .then((response)=>response.json())
  //   .then((data)=>setPopularProducts(data));
  // },[])
  return (
    <div className='popular'>
      <h1>Choose Your Topic</h1>
    <hr/>
    <div className='popular-item'>
        {
            topics.map((item,i)=>{
                return <Item key={i}   image={item.image} name={item.name} onClick={() => handleTopicClick(item)} />
            })
        }
    </div>
    {showLogin && (
      <>
        <div className="login-popup-overlay">
          
          <div className="login-popup">
            
            <LoginSignup topic={selectedTopic} />
          </div>
        </div>
       
        </>
      )}
    </div>
  )
}

export default Popular
