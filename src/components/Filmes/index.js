import { useContext, useState } from 'react';
import styles from './Filmes.module.css';
import filmes from 'json/jogos.json'; // Importa o JSON com os dados dos filmes
import { CategoriaContext } from 'contextos/CategoriaContext';
function Filmes() {
    const [hovered, setHovered] = useState(null);
    const { categoriaSelecionada } =useContext(CategoriaContext); // Usa o contexto para acessar a categoria selecionada
    
    // Filtrar os filmes com base na categoria selecionada
    const filmesFiltrados = categoriaSelecionada 
        ? filmes.filter(filme => filme.categoria === categoriaSelecionada) 
        : filmes;


    return (
        <div className={styles.container}>
            {filmesFiltrados.map((filme) => (
                <div 
                key={filme.id} 
                className={styles.filme}
                onMouseEnter={() => setHovered(filme.id)} // Quando o mouse entra, define o ID do filme no estado
                onMouseLeave={() => setHovered(null)} 
                >
                     {hovered === filme.id ? (
                        // Exibe o vídeo se o mouse estiver sobre a imagem
                        <video
                            className={styles.video}
                            src={`/imagens/games/${filme.video}`}
                            autoPlay
                            muted
                            loop
                        />
                    ) : (
                        // Caso contrário, exibe a imagem
                        <img
                            src={`/imagens/games/${filme.imagem}`}
                            alt={filme.titulo}
                            className={styles.imagem}
                        />
                    )}
                    <h2>{filme.titulo}</h2>
                </div>
            ))}
        </div>
    );
}

export default Filmes;