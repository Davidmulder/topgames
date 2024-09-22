import React, { useEffect, useState } from 'react';
import styles from './Noticias.module.css';
import Titulo from 'components/Titulo';

function Noticias() {

  const [noticias, setNoticias] = useState([]);
  const [loading, setLoading] = useState(true);
  const [paginaAtual, setPaginaAtual] = useState(1); // Estado para a página atual
  const [totalPaginas, setTotalPaginas] = useState(0); // Estado para o total de páginas
  const itensPorPagina = 10; // Número de itens por página

  useEffect(() => {
    
     // Função para buscar notícias da API com base na página atual
     const fetchNoticias = () => {
      setLoading(true);
      const offset = (paginaAtual - 1) * itensPorPagina; // Calcula o offset com base na página atual


    // Chama a API de notícias do mundo dos games (NewsAPI)
    fetch('https://newsapi.org/v2/everything?q=games&language=pt&apiKey=d55a499a045949be8432808634e907a5')
        .then(response => response.json())
        .then(data => {
          setNoticias(data.articles.slice(offset, offset + itensPorPagina)); // Mostra as notícias com base na página atual
          setTotalPaginas(Math.ceil(data.articles.length / itensPorPagina)); // Calcula o total de páginas
          setLoading(false);
        })
        .catch(error => console.error('Erro ao carregar notícias:', error));
    };

    fetchNoticias();
  }, [paginaAtual]); // Chama a API novamente quando a página atual mudar

  // Funções para navegação de página
  const proximaPagina = () => {
    if (paginaAtual < totalPaginas) {
      setPaginaAtual(paginaAtual + 1);
    }
  };

  const paginaAnterior = () => {
    if (paginaAtual > 1) {
      setPaginaAtual(paginaAtual - 1);
    }
  };


    return (
    
        <div className={styles.noticiasContainer}>
            <Titulo>
              <h1>Últimas Notícias do Mundo dos Games Via API</h1>  
            </Titulo>
        
        
        {loading ? (
          <p>Carregando notícias...</p>
        ) : (
          <div className={styles.feed}>
            {noticias.map((noticia, index) => (
              <div key={index} className={styles.noticia}>

              <a href={noticia.url} target="_blank" rel="noopener noreferrer">
                <img
                  src={noticia.urlToImage || '/imagens/default_game_imagem.png'}
                  alt={noticia.title}
                  className={styles.imagem}
                />
                <h2>{noticia.title}</h2>                
                <p><small>{new Date(noticia.publishedAt).toLocaleDateString()}</small></p>               
                 
                </a>
              </div>
            ))}
            
            {/* Controle de paginação */}
            <div className={styles.paginacao}>
                        <button onClick={paginaAnterior} disabled={paginaAtual === 1}>
                          Anterior
                        </button>
                        <span>Página {paginaAtual} de {totalPaginas}</span>
                        <button onClick={proximaPagina} disabled={paginaAtual === totalPaginas}>
                          Próxima
                        </button>
            </div>
        </div>
      )}
    </div>
  );
}
    
    export default Noticias;