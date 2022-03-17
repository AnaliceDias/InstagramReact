import Sugestoes from "./Sugestoes";
import Topo from "./Topo";

export default function LadoDireito(){
    return(
        <div className="ladoDireito">
            <Topo />
            <Sugestoes />
           
            <div className="direitosAutorais">
                <p>Sobre • Ajuda • Imprensa • API • Carreiras • Privacidade • Termos • Localizações • Contas mais relevantes • Hashtags • Idioma</p>
                <p>© 2021 INSTAGRAM DO FACEBOOK</p>
            </div>
        </div>
    );
}