import { Link } from 'react-router-dom';
import styles from './Cabecalho.module.css';
import CabecalhoLink from './CabecalhoLink';
import FormularioSuspenso from '../FormularioSuspenso';

function Cabecalho() {
    return (
        <header className={styles.cabecalho}>
             
            <Link to="./">
                <img  src="/imagens/logo_game.png" alt="Logo do cinetag"></img>
            </Link>
            
            <nav>
            <CabecalhoLink url="./">
                    Home
                </CabecalhoLink>
               
            </nav>  
            <FormularioSuspenso/>
           
        </header>
    )
}

export default Cabecalho;