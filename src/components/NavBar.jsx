import style from '../App.module.css'

export const NavBar = () => {
    return (
        <div className={style.wrapBtns}>
            <a href="/"><button>Produtos</button></a>
            <a href="/"><button>API</button></a>
            <a href="/"><button>Mapa</button></a>
            <a href={"/graph"}><button> Gráfico</button></a>
      </div>
    )
}