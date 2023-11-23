
interface PostCardProps{
    author:string
    time:string
    body:string
}
const PostCard:React.FC<PostCardProps> = ({author, time, body}) =>{
    return(
        <div className={" flex flex-col  text-white p-4 border border-[#2E3238] rounded-lg"}>
            <div className={"flex flex-row space-x-2"}>
                <div className={"w-5 h-5 rounded-lg bg-white "}></div>
                <p className={"text-[#747474] font-bold"} >{author}</p>
                <p className={"text-[#747474] font-extralight"} >{time}</p>
            </div>
            <div className={" text-start  pt-4"}>
                <p>{body}</p>
            </div>
        </div>
    )
}

export default PostCard