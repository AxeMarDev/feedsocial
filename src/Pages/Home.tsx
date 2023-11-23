import Title from "../Components/Title";
import RootDiv from "../Components/RootDiv";
import PostCard from "../Components/PostCard";

const Home = () => {
    return(
      <RootDiv className={"space-y-2"}>
          <Title title={"FEED"}/>
          <PostCard author={"Axell"} time={"40 min ago"} body={"Hey yall i live in texas "}/>
          <PostCard author={"Andrik"} time={"50 min ago"} body={"Im learning to code with python "}/>
          <PostCard author={"Smith"} time={"60 min ago"} body={"Learning to code is fun"}/>
          <PostCard author={"Martinez"} time={"70 min ago"} body={"Mr taco is good"}/>
      </RootDiv>
    )
}
export default Home