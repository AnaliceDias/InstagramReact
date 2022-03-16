import Header from "./Header";
import LadoDireito from "./LadoDireito";
import LadoEsquerdo from "./LadoEsquerdo"
import Footer from "./Footer";

export default function App(){
    return(
        <>
            <Header />

            <main>
                <LadoEsquerdo />
                <LadoDireito />
            </main>

            <Footer />
            

    </> 
);
}
