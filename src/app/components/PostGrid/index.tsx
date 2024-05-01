import PostCard from "../PostCard"

export default function LatestPost() {

    return (
        <>
            <div className="container mx-auto grid grid-cols-3 gap-4">
                    <PostCard/>
                    <PostCard/>
                    <PostCard/>
            </div>
        </>
    )
}