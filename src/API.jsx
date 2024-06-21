
import { CardAPI } from './components/CardAPI';
import { SearchResult } from './components/Alert';
import { useState, useEffect } from 'react';
import { api } from "./api/rmApi";
import style from './App.module.css';
import { NavBar } from "./components/NavBar";


export default function API() {
    const [show, setShow] = useState("")
    const [data, setData] = useState([])
    const [page, setPage] = useState("")
    const [name, setName] = useState("")
    const [showError, setShowError] = useState(false)
  
    // Quando muda o estado da page, name ele recarrega as informaçoes
    useEffect(() => {
      setShowError(false)
  
      api.get(`/character/?page=${page}&name=${name}`).then((response) => {
        if(!response.data.results){
          console.log("Vazio")
        }
        setData(response.data.results)
      }).catch((error) => {
        if(error.response.status === 404){
          console.log("Esta pagina nao contem este personagem")        
          setShowError(true)
        }
  
        console.error(error)
      })
    }, [page, name])


    return (
        <>
            <NavBar/>

            <h2>Rick and Morty API</h2>
            <div>
               <input type="text" placeholder="1/43" value={page} onChange={(event) => setPage(event.target.value)}/>
               <input type="text" placeholder="Nome de persongem" value={name} onChange={(event) => setName(event.target.value)}/>
                {showError &&   <SearchResult/>}
            </div>
            <div className={style.card}>
            {data.map((item) => { 
             return(
              <div key={item.id} >
                
                <CardAPI name={item.name} spicies={item.species} type={item.type} image={item.image} status={item.status} gender={item.gender}/>
                {/* <button onClick={() => {}}>Info</button> */}
              </div>
              )
            })}
            </div>
        </>
    )
}