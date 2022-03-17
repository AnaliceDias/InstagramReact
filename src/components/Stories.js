const storiesArray = [
    {imagem: "./imagens/meowed 1.png", perfil: "meowed"},
    {imagem: "./imagens/barked 1.png", perfil: "barked"},
    {imagem: "./imagens/nathanwpylestrangeplanet 1.png", perfil: "nathanwpyle..."},
    {imagem: "./imagens/wawawiwacomicsa 1.png", perfil: "wawawiwac..."},
    {imagem: "./imagens/respondeai 1.png", perfil: "respondeai"},
    {imagem: "./imagens/filomoderna 1.png", perfil: "filomoderna"},
    {imagem: "./imagens/memeriagourmet 1.png", perfil: "memeriago"},
    {imagem: "./imagens/9gag 1.png", perfil: "99gag"},
];

export default function Stories(){
    
    const stories = storiesArray.map(story => {
        return(
            <div className="story">
                <img className="borda" src="./imagens/stories_background.jpg"/>
                <img src= {story.imagem}/>
                <div className="perfilStory"><p className="nomePerfilStory">{story.perfil}</p></div>
            </div>
        ) 
    }
    );

    return(
        <>
            <div className="espacoDosStories">

            <ion-icon name="chevron-forward-circle" className="naoMobile"></ion-icon>

                <div className="stories">
                    {stories}
                </div>
            </div>
        
        </>
    );
}
