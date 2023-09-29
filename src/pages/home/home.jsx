import React from "react"
import Menu from "../../componentes/menu"
import Footer from "../../componentes/footer/footer"
import Quadro from "../../componentes/quadro"
import images from "../../images/images"
import { textosGerais, dadosHome } from "../../data/dadosEmpresa"
import '../home/style.css';

function Home() {

    return (
        <>
        <div className="capa">
            <Menu />
            <div className="capa-texto">
                <h1>Verse</h1>
                <p>do bairro para a sua casa</p>
            </div>
        </div>
            <Quadro arrayDados={dadosHome} tituloSecao={'Nossos Produtos'} />

            <Footer />
        </>


    )

}

export default Home