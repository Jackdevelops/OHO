import Loader from "@/components/shared/Loader";
import GridPostList from "@/components/shared/GridPostList";
import { useGetCurrentUser } from "@/lib/react-query/queriesAndMutations";
import { Models } from "appwrite";

// This page is what the profile page uses to fetch the Donation Posts
// Displays posts in GridPostList format
const ProfilePosts = () => {
  const { data: currentUser } = useGetCurrentUser();

  const Posts = currentUser?.posts
    .map((Post: Models.Document) => ({
      ...Post.post,
      creator: {
        imageUrl: currentUser.imageUrl,
      },
    }))
    .reverse();

  return (
    <div className="saved-container">
      <div className="flex gap-2 w-full max-w-5xl">
        <img
          src="/assets/icons/post.svg"
          width={36}
          height={36}
          alt="edit"
          className="invert-white"
        />
        <h2 className="h3-bold md:h2-bold text-left w-full">Donations</h2>
      </div>

      {!currentUser ? (
        <Loader />
      ) : (
        <ul className="w-full flex justify-center max-w-5xl gap-9">
          {Posts.length === 0 ? (
            <p className="text-light-4">No available Donations</p>
          ) : (
            <GridPostList posts={Posts} showStats={false} />
          )}
        </ul>
      )}
    </div>
  );
};

export default ProfilePosts;
