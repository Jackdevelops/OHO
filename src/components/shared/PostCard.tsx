import { useUserContext } from "@/context/AuthContext";
import { multiFormatDateString } from "@/lib/utils";
import { Models } from "appwrite";
import { Link, useParams } from "react-router-dom";
import PostStats from "./PostStats";

const dietaryPreferenceImages = {
  Meat: "/assets/icons/meat.png",
  Vegan: "/assets/icons/vegan.png",
  Vegetarian: "/assets/icons/vegetarian.png",
  Pescetarian: "/assets/icons/pescatarian.png",
  None: "/assets/icons/none.png",
};

type PostCardProps = {
  post: Models.Document;
};

// The Post Card is called in several other pages to display the donation post content
/* The PostCard Component allows users to do the following actions on each post:
      - See User profile and name
      - See description & post information
      - Like the donation post
      - Save the donation post
      - Request the donation post
      - Click on the users profile picture to go to their account
      - Click the Post or description to be taken to the PostDetails page for the specific post
      - Edit the donation post (If the post is owned by the current user)
*/

const PostCard = ({ post }: PostCardProps) => {
  const { user } = useUserContext();
  const { id } = useParams();

  if (!post.creator) return null;

  return (
    <div className="post-card">
      <div className="flex-between">
        <div className="flex items-center gap-3">
          <Link to={`/profile/${post.creator.$id}`}>
            <img
              src={
                post.creator?.imageUrl ||
                "/assets/icons/profile-placeholder.svg"
              }
              alt="creator"
              className="w-12 lg:h-12 rounded-full"
            />
          </Link>

          <div className="flex flex-col">
            <p className="base-medium lg:body-bold text-light-1">
              {post.creator.name}
            </p>
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

        <Link
          to={`/update-post/${post.$id}`}
          className={`${user.id !== post.creator.$id && "hidden"}`}
        >
          <img
            src={"/assets/icons/edit.svg"}
            alt="edit"
            width={20}
            height={20}
          />
        </Link>
      </div>

      <Link to={`/posts/${post.$id}`}>
        <div className="small-medium lg:base-medium py-5">
          <p>{post.caption}</p>
          <p className="flex gap-1 mt-2 text-light-3 small-regular">
            Expiry Date: {post.expiry}
          </p>
          <ul className="flex gap-1 mt-2">
            <li className="text-light-3 small-regular">
              <p className="text-light-3 small-regular">Allergens:</p>
            </li>
            {post.tags.map((tag: string, index: number, array: string[]) => (
              <li key={`${tag}${index}`} className="text-light-3 small-regular">
                <p className="text-light-3 small-regular">
                  {tag}
                  {index !== array.length - 1 && ","}
                </p>
              </li>
            ))}
          </ul>
          <div className="flex gap-1 mt-2 text-light-3 small-regular">
            <img
              src={
                dietaryPreferenceImages[
                  post.dietaryPreference as keyof typeof dietaryPreferenceImages
                ] || "/default_image_path.jpg"
              }
              alt={post.dietaryPreference}
              className="dietary-preference-image"
            />
          </div>
        </div>
        <img
          src={post.imageUrl || "/assets/icons/profile-placeholder.svg"}
          alt="post image"
          className="post-card_img"
        />
      </Link>

      <div className={`${post.creator.$id === user.id && "hidden"}`}>
        <PostStats post={post} userId={user.id} />
      </div>
    </div>
  );
};

export default PostCard;
