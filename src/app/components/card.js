export default function Card({ img , title , text , classnames }){
    const classnameList = classnames.toString().replace(","," ")
    
    if (img != ""){
        return(
            <div className={ classnameList }>
                <img src={ img } alt={ title } />
                <h4> { title } </h4>
                <p> { text }</p>
            </div>
        )
    }else{
        return(
            <div className={ classnameList }>
                <h4> { title } </h4>
                <p> { text }</p>
            </div>
        )
    }
}