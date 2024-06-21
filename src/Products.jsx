import style from './App.module.css'
import { NavBar } from './components/NavBar';
import produtos from './constants/produtos.json'
import { Card } from './components/Card'

export default function Products() {
    return (
        <>
        <NavBar/>
        <h2>Showroom de produtos</h2>
          <div className={style.card}>
          {produtos.map((item) => {
            return(
              <Card name={item.name} status={item.status} desc={item.desc} value={item.value} image={item.image} key={item.id}/>
            )
           })}
          </div>
      </>
    )
}