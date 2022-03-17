const postsArray = [
    {miniatura: "./imagens/meowed 1.png" , usuario: "meowed" , conteudo: "./imagens/gato-telefone 1.png" , miniaturaUsuarioCurtiu: "./imagens/respondeai 1.png" , usuarioCurtiu: "respondeai", curtidas: "101.523"},
    {miniatura: "./imagens/barked 1.png" , usuario: "barked" , conteudo: "./imagens/dog 1.png" , miniaturaUsuarioCurtiu: "./imagens/adorableanimals.png" , usuarioCurtiu: "adorable_animals", curtidas: "99.159"}
];

export default function Posts(){

    const posts = postsArray.map( post => {
        return(
            <div className="post">
                <div className="topoPost">
                    <div className="usuario">
                        <img src={post.miniatura}/>
                        <p>{post.usuario}</p>
                    </div>
                    <div className="opcoes">
                        <ion-icon name="ellipsis-horizontal"></ion-icon>
                    </div>
                </div>

                <img src={post.conteudo}/>

                <div className="roda-pePost">
                    <div className="engajamento">
                        <div className="interacoes">
                            <ion-icon name="heart-outline"></ion-icon>
                            <ion-icon name="chatbubble-outline"></ion-icon>
                            <ion-icon name="paper-plane-outline"></ion-icon>
                        </div>
                        <div className="salvar">
                            <ion-icon name="bookmark-outline"></ion-icon>
                        </div>
                    </div>
                    <div className="curtidas">
                        <img src={post.miniaturaUsuarioCurtiu} />
                        <p>Curtido por <strong>{post.usuarioCurtiu}</strong> e <strong>outras {post.curtidas} pessoas</strong></p>
                    </div>
                </div>
            </div>
        );
    }
    );

    return(
        <div className="espacoDosPostes">
            {posts}
        </div>
        );
}