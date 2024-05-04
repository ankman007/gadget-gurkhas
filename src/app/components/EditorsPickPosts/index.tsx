import PostGrid from "../PostGrid"

export default function EditorsPickPosts() {

    return (
        <>
            <h3 className="container text-lg mx-auto text-blue-900 font-bold mt-8">Best Of The Best - Editor’s Pick</h3>
            <PostGrid postId1={14} postId2={13} postId3={6}/>
        </>
    )
}