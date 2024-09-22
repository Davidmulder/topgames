import React, { createContext, useState } from 'react';

// Cria o contexto
export const CategoriaContext = createContext();

// Provider do contexto
export const CategoriaProvider = ({ children }) => {
    const [categoriaSelecionada, setCategoriaSelecionada] = useState(null);

    return (
        <CategoriaContext.Provider value={{ categoriaSelecionada, setCategoriaSelecionada }}>
            {children}
        </CategoriaContext.Provider>
    );
};
