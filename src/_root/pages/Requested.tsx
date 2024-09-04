import { Models } from "appwrite";
import Loader from "@/components/shared/Loader";
import { useGetCurrentUser } from "@/lib/react-query/queriesAndMutations";
import RequestedGridPostList from "@/components/shared/RequestedGridPostList";

// This page is a link in the Left Side Bar & allows the user to see their requested posts.
// It displays any posts that the user has requested in the GridPostList format
const Requested = () => {
  const { data: currentUser } = useGetCurrentUser();

  const requestPosts = currentUser?.request
    .map((requestPost: Models.Document) => ({
      ...requestPost.post,
      creator: {
        imageUrl: currentUser.imageUrl,
      },
    }))
    .reverse();

  return (
    <div className="saved-container">
      <div className="flex gap-2 w-full max-w-5xl">
        <img
          src="/assets/icons/request.png"
          width={36}
          height={36}
          alt="edit"
        />
        <h2 className="h3-bold md:h2-bold text-left w-full">
          Requested Donations
        </h2>
      </div>

      {!currentUser ? (
        <div className="flex-center w-full h-full">
          <Loader />
        </div>
      ) : (
        <ul className="w-full flex justify-center max-w-5xl gap-9">
          {requestPosts.length === 0 ? (
            <p className="text-light-4">You Haven't Requested Anything Yet</p>
          ) : (
            <RequestedGridPostList posts={requestPosts} showStats={false} />
          )}
        </ul>
      )}
    </div>
  );
};

export default Requested;
