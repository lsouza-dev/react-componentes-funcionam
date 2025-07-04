import './colaborador.css'
import { IoCloseCircleSharp } from "react-icons/io5";
import { FaHeart,FaRegHeart  } from "react-icons/fa";

const Colaborador = ({ colaborador, corDeFundo,aoDeletar,favoritar }) => {

    function favoritarColaborador(){
        favoritar(colaborador.id)
    }

    const propsFavorito = {
        size: 25,
        onClick: favoritar,
        color:'red'
    }

    return (<div className="colaborador">
        <IoCloseCircleSharp 
            size={30} 
            className='deletar' 
            onClick={() => aoDeletar(colaborador.id)} />
        <div className="cabecalho" style={{ backgroundColor: corDeFundo }}>
            <img src={colaborador.imagem} alt={colaborador.nome} />
        </div>
        <div className="rodape">
            <h4>{colaborador.nome}</h4>
            <h5>{colaborador.cargo}</h5>

            <div className='favoritar'>
                {colaborador.favorito ? <FaHeart  {...propsFavorito}/> : <FaRegHeart {...propsFavorito} color='black'/>}
            </div>
        </div>
    </div>)
}

export default Colaborador