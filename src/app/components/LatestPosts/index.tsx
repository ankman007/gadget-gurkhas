
import PostGrid from "../PostGrid"

export default function LatestPost() {

    return (
        <>
            <h3 className="container text-lg mx-auto text-blue-900 font-bold">Latest Posts</h3>
            <PostGrid postId1={7} postId2={8} postId3={9}/>
            <PostGrid postId1={10} postId2={11} postId3={12}/>
        </>
    )
}