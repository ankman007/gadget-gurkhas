import PostGrid from "../PostGrid"

export default function SimilarPosts() {

    return (
        <>
            <h3 className="container text-lg mx-auto text-blue-900 font-bold mt-8 ">You may also like </h3>
            <PostGrid postId1={13} postId2={14} postId3={1}/>
        </>
    )
}