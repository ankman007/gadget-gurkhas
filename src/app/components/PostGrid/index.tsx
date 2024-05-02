import PostCard from "../PostCard"

export default function LatestPost() {

    return (
        <>
            <div className="container mx-auto grid sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                    <PostCard/>
                    <PostCard/>
                    <PostCard/>
            </div>
        </>
    )
}