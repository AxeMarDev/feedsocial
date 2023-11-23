import React from "react";


interface TitleProps{
    title:string
}
const Title:React.FC<TitleProps> = ({title}) =>{
    return(
        <div>
            <h1 className={"text-3xl font-bold text-start  text-[#A8A8A8]"}>{title}</h1>
        </div>
    )
}

export default Title
