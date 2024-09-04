import Loader from "@/components/shared/Loader";
import PostCard from "@/components/shared/PostCard";
import { useUserContext } from "@/context/AuthContext";
import { useGetRecentPosts } from "@/lib/react-query/queriesAndMutations";
import { Models } from "appwrite";

// This page is the first page a user lands on after signing in.
/* It displays the postCard Component which allows users to do the following actions on each post:
      - See User profile and name
      - See description & post information
      - Like the donation post
      - Save the donation post
      - Request the donation post
      - Click on the users profile picture to go to their account
      - Click the Post or description to be taken to the PostDetails page for the specific post
      - Edit the donation post (If the post is owned by the current user)
*/

const Home = () => {
  const {
    data: posts,
    isPending: isPostLoading,
    isError: isErrorPosts,
  } = useGetRecentPosts();
  const { user } = useUserContext();

  return (
    <div className="flex flex-1">
      <div className="home-container">
        <div className="home-posts">
          <h1 className="text-center xl:text-left h3-bold md:h1-semibold w-full">
            Hey {user.name}
          </h1>

          <div className="flex gap-2 w-full max-w-5xl">
            <img
              src="/assets/icons/home.svg"
              width={36}
              height={36}
              alt="edit"
            />

            <h2 className="h3-bold md:h2-bold text-left w-full">Home Feed</h2>
          </div>
          {isPostLoading && !posts ? (
            <Loader />
          ) : (
            <ul className="flex flex-col flex-1 gap-9 w-full">
              {posts?.documents.map((post: Models.Document) => (
                <PostCard post={post} key={post.caption} />
              ))}
            </ul>
          )}
        </div>
      </div>
    </div>
  );
};
export default Home;
