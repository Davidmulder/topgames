import categorias from 'json/categoria.json';
import styles from './Categoria.module.css';
import { useContext } from 'react';
import { CategoriaContext } from 'contextos/CategoriaContext';

function Categorias() {
   // Usa o contexto para definir a categoria selecionada

  const { setCategoriaSelecionada } =useContext(CategoriaContext);

  return (
    <div className={styles.container}>
      {categorias.map((categoria) => (
        <div key={categoria.id} 
        className={styles.card}
        onClick={() => setCategoriaSelecionada(categoria.titulo)} // Altera a categoria ao clicar
        >
          <img src={categoria.icone} alt={categoria.titulo} className={styles.icone} />
          <h3>{categoria.titulo}</h3>
        </div>
      ))}
    </div>
  );
}

export default Categorias;
