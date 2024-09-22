import styles from './Erro404.module.css'
import foto from './404erro.jpg';
function Erro404() {
    return (

        <section className={styles.container}>
        <h2>Erro 404</h2>       
        <img src={foto} alt= "erro de pagina"/>
    </section>
    )
}

export default Erro404;