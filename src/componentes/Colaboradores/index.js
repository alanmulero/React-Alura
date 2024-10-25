import './Colaboradores.css'
const Colaboradores = (props) => {

    const cssPrimaria = {borderColor: props.corPrimaria};
    return (
    // Duas formas diferentes de fazer. com dois {{backgroundColor ..etc...}} ou colocando em uma const.

    <section  className={"colaboradores"}   style={{backgroundColor: props.corSecundaria}}>

        <h3 style={cssPrimaria}>{props.nome}</h3>
    </section>


    );
}

export default Colaboradores;