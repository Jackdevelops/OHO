import Loader from "@/components/shared/Loader";
import PostStats from "@/components/shared/PostStats";
import { Button } from "@/components/ui/button";
import { useUserContext } from "@/context/AuthContext";
import {
  useDeletePost,
  useGetPostById,
} from "@/lib/react-query/queriesAndMutations";
import { multiFormatDateString } from "@/lib/utils";
import { Link, useNavigate, useParams } from "react-router-dom";

// This page is an the extension of Requested.tsx. When a user clicks on a donation post in Requested.tsc, they are taken to this page
/* This page has the same layout as PostDetails.tsx, the only difference is the line above the post which reads:
          "This donation has been added to your requests section, please message USER to request the item"
*/
const Request = () => {
  const navigate = useNavigate();
  const { id } = useParams();
  const { data: post, isPending } = useGetPostById(id || "");
  const { user } = useUserContext();
  const dietaryPreferenceImages = {
    Meat: "/assets/icons/meat.png",
    Vegan: "/assets/icons/vegan.png",
    Vegetarian: "/assets/icons/vegetarian.png",
    Pescetarian: "/assets/icons/pescatarian.png",
    None: "/assets/icons/none.png",
  };
  const { mutate: deletePost } = useDeletePost();

  const handleDeletePost = () => {
    deletePost({ postId: id, imageId: post?.imageId });
    navigate(-1);
  };

  return (
    <div className="post_details-container">
      <div className="flex gap-2 w-full max-w-5xl">
        <img src="/assets/icons/chat.svg" width={36} height={36} alt="edit" />
        <h2 className="h3-bold md:h2-bold text-left w-full">Request</h2>
      </div>
      <div className="flex-center gap-2 text-light-3">
        <p className="subtle-semibold lg:small-regular ">
          This donation has been added to your requests section, please message{" "}
          {post?.creator.name} to request the item
        </p>
      </div>

      {isPending ? (
        <Loader />
      ) : (
        <div className="post_details-card">
          <img src={post?.imageUrl} alt="post" className="post_details-img" />
          <div className="post_details-info">
            <div className="flex-between w-full">
              <Link
                to={`/profile/${post?.creator.$id}`}
                className="flex items-center gap-3"
              >
                <img
                  src={
                    post?.creator?.imageUrl ||
                    "/assets/icons/profile-placeholder.svg"
                  }
                  alt="creator"
                  className="rounded-full w-8 h-8 lg:w-12 lg:h-12  "
                />

                <div className="flex flex-col">
                  <p className="base-medium lg:body-bold text-light-1">
                    {post?.creator.name}
                  </p>
                  <div className="flex-center gap-2 text-light-3">
                    <p className="subtle-semibold lg:small-regular ">
                      {multiFormatDateString(post?.$createdAt)}
                    </p>
                    •
                    <p className="subtle-semibold lg:small-regular">
                      {post?.location}
                    </p>
                  </div>
                </div>
              </Link>
              <div className="flex-center ">
                <Link
                  to={`/update-post/${post?.$id}`}
                  className={`${user.id !== post?.creator.$id && "hidden"}`}
                >
                  <img
                    src={"/assets/icons/edit.svg"}
                    alt="edit"
                    width={24}
                    height={24}
                  />
                </Link>

                <Button
                  onClick={handleDeletePost}
                  variant="ghost"
                  className={`ost_details-delete_btn ${
                    user.id !== post?.creator.$id && "hidden"
                  }`}
                >
                  <img
                    src={"/assets/icons/delete.svg"}
                    alt="delete"
                    width={24}
                    height={24}
                  />
                </Button>
              </div>
              <div className={`${post?.creator.$id === user.id && "hidden"}`}>
                <Link
                  to={post?.creator.facebookMessenger}
                  className="no-underline"
                >
                  <Button type="button" className="shad-button_primary px-8">
                    Message
                  </Button>
                </Link>
              </div>
            </div>
            <hr className="border w-full border-dark-4/80" />

            <div className="flex flex-col flex-1 w-full small-medium lg:base-regular">
              <p>{post?.caption}</p>
              <p className="flex gap-1 mt-2 text-light-3 small-regular">
                Expiry Date: {post?.expiry}
              </p>
              <ul className="flex gap-1 mt-2">
                <li className="text-light-3 small-regular">
                  <p className="text-light-3 small-regular">Allergens:</p>
                </li>
                {post?.tags.map(
                  (tag: string, index: number, array: string[]) => (
                    <li
                      key={`${tag}${index}`}
                      className="text-light-3 small-regular"
                    >
                      <p className="text-light-3 small-regular">
                        {tag}
                        {index !== array.length - 1 && ","}
                      </p>
                    </li>
                  )
                )}
              </ul>
              <div className="flex gap-1 mt-2 text-light-3 small-regular">
                <img
                  src={
                    dietaryPreferenceImages[
                      post?.dietaryPreference as keyof typeof dietaryPreferenceImages
                    ] || "/default_image_path.jpg"
                  }
                  alt={post?.dietaryPreference}
                  className="dietary-preference-image"
                />
              </div>
            </div>

            <div className="w-full">
              <div className={`${post?.creator.$id === user.id && "hidden"}`}>
                <PostStats post={post} userId={user.id} />
              </div>{" "}
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default Request;
