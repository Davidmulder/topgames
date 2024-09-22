import Titulo from "components/Titulo";
import styles from './Inicio.module.css';
import Carrossel from "components/Carrossel";
import carrosselItens from 'json/carrossel.json';
import Filmes from "components/Filmes";
import Noticias from "components/Noticias";
import Categorias from "components/Categorias";


function Inicio() {
 
    return (
        <>
       
       
       <Carrossel itens={carrosselItens} />   
       
       <Noticias/>

       <Titulo>
        <h1>Categorias</h1>
       </Titulo>

       <Categorias/>

        <Titulo>
        <h1>Jogos Online</h1>
       </Titulo>
         
        <section className={styles.container}>
            <Filmes/>
        </section>
       

       
       </>
       
      
       
    )
}

export default Inicio;