import React, { useState } from 'react';
import styles from './FormularioSuspensao.module.css';

function FormularioSuspenso() {
    const [visivel, setVisivel] = useState(false); // Controle de visibilidade do formulário

    // Função para alternar a visibilidade
    const toggleFormulario = () => {
        setVisivel(!visivel);
    };

    return (
        <>
            <button className={styles.botao} onClick={toggleFormulario}>
                Cadastra-se no Site
            </button>
            {/* O formulário será exibido se 'visivel' for true */}
            {visivel && (
                <div className={styles.formularioSuspenso}>
                    <h2>Cadastro</h2>
                    <form>
                        <label> Nome:  </label>                    
                        
                        <input type="text" name="nome" />
                        <label>Email:</label>                        
                           
                        
                        <input type="email" name="email" />
                        <label>Senha:</label>                         
                            
                        
                        <input type="password" name="senha" />
                        <button type="submit">Enviar</button>
                    </form>
                    
                </div>
            )}
        </>
    );
}

export default FormularioSuspenso;
