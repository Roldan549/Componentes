import { Titulo } from "./Titulo"

export const TituloAlternativo = ({condicion})=>{
    
    if (condicion) {
        return<>
        <Titulo titulo={"titulo alternativo"}/>
        </>
    }
    return<>
        <Titulo titulo={"titulo alternativo2"}/>
    </>

}