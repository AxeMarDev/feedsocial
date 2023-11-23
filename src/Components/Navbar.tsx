
import React, {ReactNode} from "react";
import {Link} from "react-router-dom";

interface NavButtonProps{
    icon:any
    alt?:string
    to:string
    id:number
    buttonController:[number, any ]
}
const NavButton:React.FC<NavButtonProps> = ({icon,alt,to,id,buttonController}) =>{
    return(
        <Link to={`/${to}`} onClick={()=>buttonController[1](id)}>
            <div className={`w-16 h-16 p-2 rounded-lg ${ id===buttonController[0] ? "bg-[#141414]": "" }`}>
                <img src={icon} alt={alt}/>
            </div>
        </Link>
    )
}

interface NavbarProps{
    children:ReactNode
}

const Navbar:React.FC<NavbarProps> = ({children }) =>{
    return(
        <div className={"flex flex-row fixed bottom-0  bg-[#292929] w-screen justify-between p-2 "}>
            {children}
        </div>
    )
}

export {NavButton}

export default Navbar

