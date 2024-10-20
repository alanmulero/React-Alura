import './ListaSuspensa.css'
const ListaSuspensa = (props) => {

   return (
    <div className={'ListaSuspensa'}>
        <label className={'lista'}>{props.label}</label>
        <select>
            {props.itens.map(item => <option key={item}>{item}</option>)}
        </select>
    </div>
   )
}

export default ListaSuspensa;