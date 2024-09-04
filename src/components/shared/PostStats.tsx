import { Models } from "appwrite";
import { useState, useEffect } from "react";
import { useLocation } from "react-router-dom";

import { checkIsLiked } from "@/lib/utils";
import {
  useLikePost,
  useSavePost,
  useDeleteSavedPost,
  useRequestPost,
  useDeleteRequestedPost,
  useGetCurrentUser,
} from "@/lib/react-query/queriesAndMutations";
import { Button } from "../ui/button";
import { useUserContext } from "@/context/AuthContext";

type PostStatsProps = {
  post: Models.Document;
  userId: string;
};

// The Post Stats component is used and called in the bottom part of post card if it is on another users post, it is not displayed on users own posts
/* It includes the following features:
    Like button 
    Request button
    Save button
*/
const PostStats = ({ post, userId }: PostStatsProps) => {
  const location = useLocation();
  const likesList = post.likes.map((user: Models.Document) => user.$id);

  const [likes, setLikes] = useState<string[]>(likesList);
  const [isSaved, setIsSaved] = useState(false);
  const [isRequested, setIsRequested] = useState(false);

  const { user } = useUserContext();

  const { mutate: likePost } = useLikePost();
  const { mutate: savePost } = useSavePost();
  const { mutate: deleteSavePost } = useDeleteSavedPost();
  const { mutate: requestPost } = useRequestPost();
  const { mutate: deleteRequestPost } = useDeleteRequestedPost();

  const { data: currentUser } = useGetCurrentUser();

  const savedPostRecord = currentUser?.save.find(
    (record: Models.Document) => record.post.$id === post.$id
  );

  const requestedPostRecord = currentUser?.request.find(
    (record: Models.Document) => record.post.$id === post.$id
  );

  useEffect(() => {
    setIsRequested(!!requestedPostRecord);
    setIsSaved(!!savedPostRecord);
  }, [currentUser]);

  const handleLikePost = () => {
    let likesArray = [...likes];

    if (likesArray.includes(userId)) {
      likesArray = likesArray.filter((Id) => Id !== userId);
    } else {
      likesArray.push(userId);
    }

    setLikes(likesArray);
    likePost({ postId: post.$id, likesArray });
  };

  const handleSavePost = (
    e: React.MouseEvent<HTMLImageElement, MouseEvent>
  ) => {
    e.stopPropagation();

    if (savedPostRecord) {
      setIsSaved(false);
      return deleteSavePost(savedPostRecord.$id);
    }

    savePost({ userId: userId, postId: post.$id });
    setIsSaved(true);
  };

  const handleRequestPost = () => {
    if (requestedPostRecord) {
      setIsRequested(false);
      deleteRequestPost(requestedPostRecord.$id);
    } else {
      setIsRequested(true);
      requestPost({ userId: userId, postId: post.$id });
    }
  };

  const containerStyles = location.pathname.startsWith("/profile")
    ? "w-full"
    : "";

  return (
    <div
      className={`flex justify-between items-center z-20 ${containerStyles}`}
    >
      <div className="flex gap-2 mr-5">
        <img
          src={`${
            checkIsLiked(likes, userId)
              ? "/assets/icons/liked.svg"
              : "/assets/icons/like.svg"
          }`}
          alt="like"
          width={20}
          height={20}
          onClick={handleLikePost}
          className="cursor-pointer"
        />
        <p className="small-medium lg:base-medium">{likes.length}</p>
      </div>
      <div style={{ display: "flex", justifyContent: "center" }}>
        <div
          className={`${
            post.creator && post.creator.$id === user.id ? "hidden" : ""
          }`}
        >
          <Button
            type="button"
            className="shad-button_primary px-8"
            onClick={handleRequestPost}
          >
            {isRequested ? "Requested" : "Request"}
          </Button>
        </div>
      </div>
      <div className="flex gap-2">
        <img
          src={isSaved ? "/assets/icons/saved.svg" : "/assets/icons/save.svg"}
          alt="share"
          width={20}
          height={20}
          className="cursor-pointer"
          onClick={(e) => handleSavePost(e)}
        />
      </div>
    </div>
  );
};

export default PostStats;
