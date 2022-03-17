import Posts from "./Posts";
import Stories from "./Stories";

export default function LadoEsquerdo(){
    return(
        <>
            <div className="ladoEsquerdo">

                <Stories />
                <Posts />
                
            </div>
        </>
    );
}