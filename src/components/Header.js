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
                    <div className="naoMobile"> <ion-icon  name="compass-outline" ></ion-icon></div>
                    <div className="naoMobile"> <ion-icon  name="heart-outline" ></ion-icon></div>
                    <div className="naoMobile">  <ion-icon  name="person-outline" ></ion-icon></div>
                        
                        
                       
                    
                    
                </div>
            </div>
        
        </header>
        </>
    );
}
