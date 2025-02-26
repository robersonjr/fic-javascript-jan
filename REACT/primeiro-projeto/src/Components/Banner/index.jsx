export default function (props) {

    /*
     O children permite que você passe e renderize 
     conteudo dinamico dentro de um componente
    */
    
    return  (
        <div className="bannerStyle">
          {props.children}
        </div>
    )
}