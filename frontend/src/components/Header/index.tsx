import logo from '../../assets/img/logo.svg';

import './styles.css';

function Header() {
    return (
        <header>
            <div className="dsmeta-logo-container">
                <img src={logo} alt="DSMeta" />
                <h1>DSMeta</h1>
                <p>Desenvolvido por <a href="https://www.linkedin.com/in/paloma-dos-santos-32535a237">PalomaSantos</a></p>
            </div>
        </header>
    )
}

export default Header;







