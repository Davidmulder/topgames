import { useState,useEffect } from 'react';
import styles from './Carrosel.module.css';

function Carrossel({ itens }) {
    const [currentIndex, setCurrentIndex] = useState(0);

    // Avança automaticamente para a próxima imagem a cada 3 segundos (3000 ms)
    useEffect(() => {
        const interval = setInterval(() => {
            setCurrentIndex((prevIndex) =>
                prevIndex === itens.length - 1 ? 0 : prevIndex + 1
            );
        }, 5000); // Tempo de transição: 3 segundos

        return () => {
            clearInterval(interval); // Limpa o intervalo quando o componente desmontar
        };
    }, [itens]);


    return (
        <div className={styles.carrossel}>
        {/* Exibe apenas a imagem atual */}
        <div className={styles.item}>
            <img
                src={itens[currentIndex].imagem}
                alt={itens[currentIndex].titulo}
                style={{ width: '1920px', height: '347px' }} // Tamanho fixo das imagens
            />
            
        </div>
        {/* Barra de navegação opcional */}
        <div className={styles.navegacao}>
            {itens.map((_, index) => (
                <button
                    key={index}
                    className={index === currentIndex ? styles.active : ''}
                    onClick={() => setCurrentIndex(index)}
                />
            ))}
        </div>
    </div>
    );
}

export default Carrossel;
