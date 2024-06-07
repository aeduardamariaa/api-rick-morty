import style from './CardAPI.module.css'

export const CardAPI = ({name, status, species, type, gender, image}) => {
    return(
        <div className={style.card}>
              <h1>{name}</h1>
              <h2>{species}</h2>
              <p>{type}</p>
              <p>{gender}</p>
              <div className={style["status"]} style={{ backgroundColor: (status === "Alive") ? 'green' : (status === "Dead") ? 'red' : 'blue' }}></div>
              <img src={image} alt={name} width={150} height={"auto"}/>
        </div>
    )
}