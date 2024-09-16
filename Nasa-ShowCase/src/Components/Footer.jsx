
import React from 'react'
import gsap from'gsap';
import {useGSAP} from '@gsap/react';

export const Footer = (props) => {

   const{showModal,handleToggleModal, data} = props; 
   const tl = gsap.timeline();
  
   useGSAP(()=>{
    tl.to('.info-button', {
        y: 30,
        // scale: 1.7,
        // color: 'red',s
        yoyo: true,
        repeat: -1,
        duration: 1
    })
      
   

  


})
    return (
        <footer>
            <div className="bgGradient"></div>
            <div>
                <h2> {data?.title}</h2>
                
            </div>
   
            
            <button className ='info-button'onClick={handleToggleModal}>
                
                <i className="fa-solid fa-circle-info"></i>
            </button>


        </footer>

    )
}
