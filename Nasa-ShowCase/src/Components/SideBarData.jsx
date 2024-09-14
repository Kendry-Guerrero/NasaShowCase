import React from 'react'

export const SideBarData = (props) => {
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
