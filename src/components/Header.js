export default function Header(){
    return(
        <>
        <header>
            <div className="conteudoHeader">
                <div className="logo">
                    <ion-icon name="logo-instagram"></ion-icon>
                    <div className="barrinha"></div>
                    <img src="./imagens/logo.png"/>
                </div>
                <input placeholder="Pesquisar"/>
                <img src="./imagens/logo.png" className="simMobile"/>
                <div className="menu">
                    <ion-icon name="paper-plane-outline"></ion-icon>
                    <ion-icon name="compass-outline" className="naoMobile"></ion-icon>
                    <ion-icon name="heart-outline" className="naoMobile"></ion-icon>
                    <ion-icon name="person-outline" className="naoMobile"></ion-icon>
                </div>
            </div>
        
        </header>
        </>
    );
}