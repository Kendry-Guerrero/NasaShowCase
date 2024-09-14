
export const SideBar = (props) => {

    const{handleToggleModal,data} = props; 

    return (
        <div className="sidebar">
            <div onClick={handleToggleModal}
            className="bgOverlay"></div>
            <div className="sidebarContent">
                <h2>{data?.title}</h2>
                <div className="descriptionContainer">
                    <p className="descriptionTitle">{data?.date}</p>
                    <p>{data?.explanation}</p>
                  
                </div>
                <button onClick={handleToggleModal}>
                    <i className="fa-duotone fa-solid fa-right-long" ></i>
                    </button>
            </div>

        </div>
    )
}

