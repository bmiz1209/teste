import logo from '../../images/logo-cor.svg'
import '../menu/style.css';

function Menu() {
    const quemsomos = false;
    return (
        <div className='menu-container'>
            <ul className='menu'>
                <li><a href=''>Loja Virtual</a></li>
                <li><a href=''>Quem Somos</a></li>
                <li>
                    <a href=''>
                        <img
                            className='logo' src={logo} alt='logo'>
                        </img>
                    </a>
                </li>
                <li><a href=''>Grupo Verse</a></li>
                <li><a href=''>Fale Conosco</a></li>
            </ul>
        </div>

    )
}


export default Menu