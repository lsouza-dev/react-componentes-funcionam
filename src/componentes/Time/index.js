import { useState } from 'react'
import Colaborador from '../Colaborador'
import './time.css'
import hexToRgba from 'hex-to-rgba'

const Time = ({ time, colaboradores,handleDelete,mudarCor, favoritarColaborador }) => {

    const [cor,setCor] = useState('')

    return (

        colaboradores.length > 0 && 
        <section className='time' style={{ backgroundImage: 'url(/imagens/fundo.png)', backgroundColor: hexToRgba(time.cor,'0.55')}}>
            <input type='color' 
                value={time.cor} 
                className='input-cor' 
                onChange={({target}) => mudarCor(target.value,time.id)} />

            <h3 style={{ borderColor: time.cor }}>{time.nome}</h3>
            <div className='colaboradores'>
                {colaboradores.map((colaborador, indice) => {
                   return <Colaborador key={indice} colaborador={colaborador} corDeFundo={time.cor}  aoDeletar={handleDelete} favoritar={favoritarColaborador}/>
                })}
            </div>
        </section>

    )
}

export default Time