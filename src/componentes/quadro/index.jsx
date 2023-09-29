import { dadosHome } from "../../data/dadosEmpresa";
import '../quadro/style.css';

function Quadro({ tituloSecao, arrayDados }) {
    return (
        <div>
            <h2>{tituloSecao}</h2>
            <div className="card-container">
                {arrayDados.map((elemento) =>
                (<div className="card">
                    <img src={elemento.image}/>
                    <h4>{elemento.nomeEmpresa}</h4>

                </div>)

                )}
            </div>
            
        </div>
    )
}

export default Quadro
