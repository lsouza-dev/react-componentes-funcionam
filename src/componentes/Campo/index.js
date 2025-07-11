import './campo.css'

const Campo = ({ label,type = 'text', placeholder, valor, aoAlterado, obrigatorio = false }) => {
    return (<div className={`campo campo-${type}`}>
        <label>{label}</label>
        <input 
            value={valor} 
            type={type} 
            onChange={evento => aoAlterado(evento.target.value)} 
            required={obrigatorio} 
            placeholder={placeholder}
        /> 
    </div>)
}

export default Campo