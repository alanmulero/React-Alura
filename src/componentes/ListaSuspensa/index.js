import './ListaSuspensa.css'
const ListaSuspensa = (props) => {

   return (
    <div className={'ListaSuspensa'}>
        <label className={'lista'}>{props.label}</label>
        <select  onChange={evento => props.quandoDigitado(evento.target.value)} value={props.value}>
            {props.itens.map(item => <option key={item}>{item}</option>)}
        </select>
    </div>
   )
}

export default ListaSuspensa;