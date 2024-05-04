import PostCard from "../PostCard";
import postsData from "../../../../public/posts.json";

type ChildProps = {
    postId1: number;
    postId2: number;
    postId3: number;
}
const PostGrid: React.FC<ChildProps> = ( props ) => {
    const {postId1, postId2, postId3} = props;
    const posts = postsData.posts;

    const filteredPosts = posts.filter(post => post.id === postId1 || post.id === postId2 || post.id === postId3);

    return (
        <>
            <div className="container mx-auto grid sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                {filteredPosts && filteredPosts.length > 0 &&
                    filteredPosts.map(post => (
                        <PostCard key={post.id} post={post} />
                    ))
                }
            </div>
        </>
    )
}

export default PostGrid;