import PostGrid from "../PostGrid"

export default function LatestPost() {

    return (
        <>
            <h3 className="container text-lg mx-auto text-blue-900 font-bold">Latest Posts</h3>
            <PostGrid/>
            <PostGrid/>
        </>
    )
}