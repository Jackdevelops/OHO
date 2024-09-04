import Loader from "@/components/shared/Loader";
import { useGetCurrentUser } from "@/lib/react-query/queriesAndMutations";
import { Models } from "appwrite";
import RequestedGridPostList from "@/components/shared/RequestedGridPostList";

// This page is part of the users profile and there is a tab that allows the user to see their requested posts and this page will appear.
// It displays any posts that the user has requested in the GridPostList format
const ProfileRequests = () => {
  const { data: currentUser } = useGetCurrentUser();

  const requestPosts = currentUser?.request
    .map((requestPost: Models.Document) => ({
      ...requestPost.post,
      creator: {
        imageUrl: currentUser?.imageUrl,
      },
    }))
    .reverse();

  return (
    <div className="flex gap-2 w-full max-w-5xl">
      {!currentUser ? (
        <Loader />
      ) : (
        <ul className="w-full flex justify-center max-w-5xl gap-9">
          {requestPosts.length === 0 ? (
            <p className="text-light-4">
              None of Your Donations Have Been Requested
            </p>
          ) : (
            <RequestedGridPostList posts={requestPosts} showStats={false} />
          )}
        </ul>
      )}
    </div>
  );
};

export default ProfileRequests;
