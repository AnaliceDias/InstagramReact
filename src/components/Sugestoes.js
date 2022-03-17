const sugestoesArray = [
    {miniatura: "./imagens/badvibesmemes.png" , ig: "bad.vibes.memes" , status: "Segue você"},
    {miniatura: "./imagens/chibirdart 1.png" , ig: "chibirdart" , status: "Segue você"},
    {miniatura: "./imagens/razoesparaacreditar 1.png" , ig: "razoesparaacreditar" , status: "Novo no Instagram"},
    {miniatura: "./imagens/adorableanimals.png" , ig: "adorableanimals" , status: "Segue você"},
    {miniatura: "./imagens/smallcutecats 1.png" , ig: "smallcutecats" , status: "Segue você"},
]
let sugestoes = sugestoesArray.map(sugestao => {
    return (
        <div className="sugestao">
                    <div>
                        <img src={sugestao.miniatura}/>
                        <div className="usuario">
                            <p>{sugestao.ig}</p>
                            <p className="situacao">{sugestao.status}</p>
                        </div>
                    </div>
                    <p className="seguir">Seguir</p>
                </div>
    );
});

export default function Sugestoes(){
    return(
        <div className="sugestoes">
            <div>
                <p className="paraVoce">Sugestões para você</p>
                <p className="verTurdo">Ver tudo</p>
            </div>

            {sugestoes}
        </div>
    );
}