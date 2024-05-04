import PostGrid from "../PostGrid"

export default function DeepDivesPosts() {

    return (
        <>
            <h3 className="container text-lg mx-auto text-blue-900 font-bold mt-8">Deep Dives</h3>
            <PostGrid postId1={1} postId2={2} postId3={3}/>
        </>
    )
}