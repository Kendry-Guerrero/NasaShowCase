export const Main = (props) => {
    const {data} = props;
    return (
        <div className="ImageContainer">
            <img src={data.hdurl} alt={data.title || 'background image'} className="bgImage" />


        </div>


    )
}
