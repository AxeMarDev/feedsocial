import {ReactNode} from "react";

interface RootDivProps{
    children:ReactNode
    className?:string
}
const RootDiv:React.FC<RootDivProps> = ({children,className}) =>{
    return(
        <div className={`p-2  flex-col w-full ${className} `}>
            {children}
        </div>
    )

}

export default RootDiv