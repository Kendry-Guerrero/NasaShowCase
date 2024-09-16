import React from 'react'
import gsap from 'gsap';
import {useGSAP} from '@gsap/react';

export const SideBarData = (props) => {
    const tl =  gsap.timeline();
    console.log("furrurla 1");
    useGSAP(()=>{
        console.log("furrurla");
        tl.to('close-button', {
            y: 30,
            scale: 1.1,
            yoyo: true,
            repeat: -1,
            duration: 1
        })
    
    })
   



    const {data, handleToggleModal} = props;
    return (
        <div className='sidebar'>
            <h1 className='sidebar-title'>{data?.title}</h1>
            <h2 className='sidebar-date'>{data?.date}</h2>
            <div className='sidebar-information-container'>
                <p className='sidebar-information'>
                    {data?.explanation}
                </p>
            </div>

            <button className='close-button' onClick={handleToggleModal}>
            <i className="fa-duotone fa-solid fa-right-long" ></i>
            </button>
        </div>
    )
}
