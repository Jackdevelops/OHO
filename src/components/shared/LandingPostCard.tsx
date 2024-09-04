import { useUserContext } from "@/context/AuthContext";
import { multiFormatDateString } from "@/lib/utils";
import { Models } from "appwrite";
import { Link } from "react-router-dom";

type PostCardProps = {
  post: Models.Document;
};

// This component is similar to the PostCard.tsx component however with restricted information displayed for GDPR & other reasons
/*
   It does Not include the following:
        - Username
        - Name
        - PostStats.tsx (like, request snd save buttons)
        - Donation Post Description
        - Link to eitehr the users profile or post details
   It only displays the following:
        - Users Profile Picture
        - Date & time of upload
        - Donation image
*/
const LandingPostCard = ({ post }: PostCardProps) => {
  const { user } = useUserContext();

  if (!post.creator) return;

  return (
    <div className="post-card">
      <div className="flex-between">
        <div className="flex items-center gap-3">
          <img
            src={
              post.creator?.imageUrl || "/assets/icons/profile-placeholder.svg"
            }
            alt="creator"
            className="w-12 lg:h-12 rounded-full"
          />

          <div className="flex flex-col">
            <p className="base-medium lg:body-bold text-light-1"></p>
            <div className="flex-center gap-2 text-light-3">
              <p className="subtle-semibold lg:small-regular ">
                {multiFormatDateString(post.$createdAt)}
              </p>
              •
              <p className="subtle-semibold lg:small-regular">
                {post.location}
              </p>
            </div>
          </div>
        </div>
      </div>

      <div className="small-medium lg:base-medium py-5"></div>

      <img
        src={post.imageUrl || "/assets/icons/profile-placeholder.svg"}
        alt="post image"
        className="post-card_img"
      />
    </div>
  );
};

export default LandingPostCard;
