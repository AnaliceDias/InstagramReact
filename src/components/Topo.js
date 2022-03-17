const perfilTopo = {miniatura: "./imagens/catanacomics 1.png" , ig: "catanacomics" , nome: "Catana"};

export default function Topo(){
    return (
        <div className="topo">
            <img src={perfilTopo.miniatura} />
            <div className="usuario">
                <p>{perfilTopo.ig}</p>
                <p className="fraco">{perfilTopo.nome}</p>
            </div>
        </div>
    );

}