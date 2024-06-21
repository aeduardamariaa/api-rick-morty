import style from '../App.module.css'

export const NavBar = () => {
    return (
        <div className={style.wrapBtns}>
            <a href="/products"><button>Produtos</button></a>
            <a href="/api"><button>API</button></a>
            <a href="/map"><button>Mapa</button></a>
            <a href={"/graph"}><button> Gráfico</button></a>
      </div>
    )
}