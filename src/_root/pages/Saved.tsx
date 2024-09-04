import { Models } from "appwrite";
import GridPostList from "@/components/shared/GridPostList";
import Loader from "@/components/shared/Loader";
import { useGetCurrentUser } from "@/lib/react-query/queriesAndMutations";

// This page is a link in the Left Side Bar & allows the user to see their saved posts.
// It displays any posts that the user has saved in the GridPostList format
const Saved = () => {
  const { data: currentUser } = useGetCurrentUser();

  const savePosts = currentUser?.save
    .map((savePost: Models.Document) => ({
      ...savePost.post,
      creator: {
        imageUrl: currentUser.imageUrl,
      },
    }))
    .reverse();

  return (
    <div className="saved-container">
      <div className="flex gap-2 w-full max-w-5xl">
        <img src="/assets/icons/save.svg" width={36} height={36} alt="edit" />
        <h2 className="h3-bold md:h2-bold text-left w-full">Saved Donations</h2>
      </div>

      {!currentUser ? (
        <div className="flex-center w-full h-full">
          <Loader />
        </div>
      ) : (
        <ul className="w-full flex justify-center max-w-5xl gap-9">
          {savePosts.length === 0 ? (
            <p className="text-light-4">No Saved Donations</p>
          ) : (
            <GridPostList posts={savePosts} showStats={false} />
          )}
        </ul>
      )}
    </div>
  );
};

export default Saved;
