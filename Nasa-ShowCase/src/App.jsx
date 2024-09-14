import { useEffect, useState } from "react"
import { Footer } from "./Components/Footer"
import { Main } from "./Components/Main"
import { SideBar } from "./Components/SideBar"
import { SideBarData } from "./Components/SideBarData"


function App() {
  const [data, setData] = useState(null);
  const [loading,setLoading] = useState(false);
  const [showModal,setShowModal] = useState(false);

  function handleToggleModal(){
    setShowModal(!showModal);
  }
  useEffect(() => {
    const NASA_KEY = import.meta.env.VITE_NASA_API_KEY;
    
    async function fetchAPIData(params) {
      const url = 'https://api.nasa.gov/planetary/apod' + `?api_key=${NASA_KEY}`;
      const today = (new Date()).toDateString();
      const localKey= `NASA-${today}`;
      if(localStorage.getItem(localKey)){
        const apiData = JSON.parse(localStorage.getItem(localKey));
        setData(apiData);
        console.log('Fetched from cache today');
        return;
      }
      localStorage.clear();
      try{
        const res = await fetch(url);
        const apiData = await res.json();
        setData(apiData);
        localStorage.setItem(localKey, JSON.stringify(apiData))
        console.log('Fetched from api today');

      }
      catch (error){
        console.log(err.message)
      }
      
    }
    fetchAPIData();
  }, [])
  
  return (
    //sideBar: Si se pone en los curly y dentro se los parentesís se puede renderizar condicionalmente
    <>
    {data ? (<Main data={data}/>): (

      <div className="loadingState">
        <p>Loading...</p>
        <i className="fa-solid fa-gear"></i>
      </div>
    )}
    
    {/* {showModal &&  (<SideBar data={data} handleToggleModal={handleToggleModal}/>)} */}
    {showModal && <SideBarData data={data} handleToggleModal={handleToggleModal}/>}
       
      {data && (<Footer data={data} handleToggleModal={handleToggleModal}/>)}


    </>
  )
}

export default App
