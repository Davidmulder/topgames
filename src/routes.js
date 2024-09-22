
import Inicio from "./pages/Inicio";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Cabecalho from "components/Cabecalho";
import Rodape from "components/Rodape";
import Container from "components/Container";
import Erro404 from "pages/Erro404";
import { CategoriaProvider } from "contextos/CategoriaContext";

function AppRoutes() {
    return (
        <BrowserRouter>
           <Cabecalho/>
           <Container>
           <CategoriaProvider>
            <Routes>  {/* pagina inicial */}
                <Route path="/" element={<Inicio/>}></Route>                
                <Route path="*" element={<Erro404/>}></Route>
            </Routes>
            </CategoriaProvider>
            </Container>
            <Rodape/>
        </BrowserRouter>
    )
}

export default AppRoutes;