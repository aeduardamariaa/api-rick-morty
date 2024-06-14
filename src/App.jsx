import { useState, useEffect } from 'react'
import { Card } from './components/Card'
import { CardAPI } from './components/CardAPI'
import produtos from './constants/produtos.json'
import { api } from "./api/rmApi"
import style from './App.module.css'
import { SearchResult } from './components/Alert'

// mapa
import 'leaflet/dist/leaflet.css';

import 'leaflet-defaulticon-compatibility/dist/leaflet-defaulticon-compatibility.css';

import "leaflet-defaulticon-compatibility";

import { MapContainer, TileLayer, useMap, Marker, Popup } from 'react-leaflet'




// graph

function App() {
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

console.log(showError, "aprendendo controle de estado")

  return (
    <>
    <div className={style.wrapBtns}>
      <button onClick={() => setShow("prod")}>Produtos</button>
      <button onClick={() => setShow("api")}>API</button>
      <button onClick={() => setShow("map")}>Mapa</button>
      <button onClick={() => setShow("graph")}>Gráfico</button>
    </div>
    <div  className={style.wrapPage}>
      <h1>Exercícios de manutenção</h1>
     {show === "prod" &&
        <>
          <h2>Showroom de produtos</h2>
            <div className={style.card}>
            {produtos.map((item) => {
              return(
                <Card name={item.name} status={item.status} desc={item.desc} value={item.value} image={item.image} key={item.id}/>
              )
             })}
            </div>
        </>
      }
      {/* && = então /  aparece de acordo com o estado setado no setShow*/}
     {show === "api" &&
        <>
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
      }
     {show === "map" &&
        <>
      <h2>Mapa</h2>
          <div>
          <MapContainer center={[51.505, -0.09]} zoom={13} scrollWheelZoom={false} style={{width:"100%", height:"400px"}}>
            <TileLayer
              attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
              url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
            />
            <Marker position={[51.505, -0.09]}>
              <Popup>
               <a href="https://maps.app.goo.gl/iF8zsG51GoSGXe5S6" target='_blank'>Google Maps</a>
              </Popup>
            </Marker>
            </MapContainer>
          </div>
         </>
      }
      {show === "graph" && 
        <>
          <h2>Gráfico</h2>
          <div>

          </div>
        </>
      }
    </div>
    </>
  )
}

export default App
