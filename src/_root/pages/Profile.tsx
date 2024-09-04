import React from "react";
import {
  Route,
  Routes,
  Link,
  Outlet,
  useParams,
  useLocation,
  useNavigate,
} from "react-router-dom";
import { Button } from "@/components/ui/button";
import { LikedPosts } from "@/_root/pages";
import ProfileSavedPosts from "@/_root/pages/ProfileSavedPosts";
import { INITIAL_USER, useUserContext } from "@/context/AuthContext";
import {
  useGetUserById,
  useSignOutAccount,
} from "@/lib/react-query/queriesAndMutations";
import GridPostList from "@/components/shared/GridPostList";
import Loader from "@/components/shared/Loader";
import ProfileRequests from "./ProfileRequests";

interface StabBlockProps {
  value: string | number;
  label: string;
}

const StatBlock = ({ value, label }: StabBlockProps) => (
  <div className="flex-center gap-2">
    <p className="small-semibold lg:body-bold text-primary-500">{value}</p>
    <p className="small-medium lg:base-medium text-light-2">{label}</p>
  </div>
);

// This page displays the users profile and different options are available depending on whether the user owns the account or not.
/* If they OWN the Account the following is visible to them:
      - User Profile Picture
      - Username
      - Name
      - Amount of donations
      - Bio
      - Edit Profile Button
      - Logout Button
      - Donations Section
      - Liked Section
      - Saved Section
      - Requests Section

   If they do NOT own the account the following is visible to them:
      - User Profile Picture
      - Username
      - Name
      - Amount of donations
      - Bio
      - Message Button - Users Facebook Messenger Link
      - Donations Section
*/
const Profile = () => {
  const { id } = useParams();
  const { pathname } = useLocation();
  const { data: currentUser } = useGetUserById(id || "");
  const navigate = useNavigate();
  const { user, setUser, setIsAuthenticated } = useUserContext();

  const { mutate: signOut } = useSignOutAccount();

  const handleSignOut = async (
    e: React.MouseEvent<HTMLButtonElement, MouseEvent>
  ) => {
    e.preventDefault();
    signOut();
    setIsAuthenticated(false);
    setUser(INITIAL_USER);
    navigate("/sign-in");
  };

  if (!currentUser)
    return (
      <div className="flex-center w-full h-full">
        <Loader />
      </div>
    );

  return (
    <div className="profile-container">
      <div className={`${user.id !== currentUser.$id && "hidden"}`}>
        <Button
          variant="ghost"
          className="shad-button_ghost h-12 bg-dark-4 px-5 text-light-1 flex-center gap-2 rounded-lg"
          onClick={(e) => handleSignOut(e)}
        >
          <img src="/assets/icons/logout.svg" alt="logout" />
          <p className="small-medium lg:base-medium">Logout</p>
        </Button>
      </div>
      <div className="profile-inner_container">
        <div className="flex xl:flex-row flex-col max-xl:items-center flex-1 gap-7">
          <img
            src={
              currentUser.imageUrl || "/assets/icons/profile-placeholder.svg"
            }
            alt="profile"
            className="w-28 h-28 lg:h-36 lg:w-36 rounded-full"
          />
          <div className="flex flex-col flex-1 justify-between md:mt-2">
            <div className="flex flex-col w-full">
              <h1 className="text-center xl:text-left h3-bold md:h1-semibold w-full">
                {currentUser.name}
              </h1>
              <p className="small-regular md:body-medium text-light-3 text-center xl:text-left">
                @{currentUser.username}
              </p>
            </div>

            <div className="flex gap-8 mt-10 items-center justify-center xl:justify-start flex-wrap z-20">
              <StatBlock value={currentUser.posts.length} label="Donations" />
            </div>

            <p className="small-medium md:base-medium text-center xl:text-left mt-7 max-w-screen-sm">
              {currentUser.bio}
            </p>
          </div>

          <div className="flex justify-center gap-4">
            <div className={`${user.id !== currentUser.$id && "hidden"}`}>
              <Link
                to={`/update-profile/${currentUser.$id}`}
                className={`h-12 bg-dark-4 px-5 text-light-1 flex-center gap-2 rounded-lg ${
                  user.id !== currentUser.$id && "hidden"
                }`}
              >
                <img
                  src="/assets/icons/edit.svg"
                  alt="edit"
                  width={20}
                  height={20}
                />
                <p className="flex whitespace-nowrap small-medium">
                  Edit Profile
                </p>
              </Link>
            </div>
            <div className={`${user.id === id && "hidden"}`}>
              <a
                href={currentUser.facebookMessenger}
                target="_blank"
                rel="noopener noreferrer"
                className="no-underline"
              >
                <Button type="button" className="shad-button_primary px-8">
                  Message
                </Button>
              </a>
            </div>
          </div>
        </div>
      </div>

      {currentUser.$id === user.id && (
        <div className="flex max-w-5xl w-full">
          <Link
            to={`/profile/${id}`}
            className={`profile-tab rounded-l-lg ${
              pathname === `/profile/${id}` && "!bg-dark-3"
            }`}
          >
            <img
              src="/assets/icons/posts.svg"
              alt="posts"
              width={20}
              height={20}
            />
            Donations
          </Link>
          <Link
            to={`/profile/${id}/liked-posts`}
            className={`profile-tab rounded-r-lg ${
              pathname === `/profile/${id}/liked-posts` && "!bg-dark-3"
            }`}
          >
            <img
              src="/assets/icons/like.svg"
              alt="like"
              width={20}
              height={20}
            />
            Liked
          </Link>
          <Link
            to={`/profile/${id}/profile-saved-posts`}
            className={`profile-tab rounded-r-lg ${
              pathname === `/profile/${id}/profile-saved-posts` && "!bg-dark-3"
            }`}
          >
            <img
              src="/assets/icons/save.svg"
              alt="Saved"
              width={20}
              height={20}
            />
            Saved
          </Link>
          <Link
            to={`/profile/${id}/profile-requests`}
            className={`profile-tab rounded-r-lg ${
              pathname === `/profile/${id}/profile-requests` && "!bg-dark-3"
            }`}
          >
            <img
              src="/assets/icons/save.svg"
              alt="Saved"
              width={20}
              height={20}
            />
            Requests
          </Link>
        </div>
      )}

      <Routes>
        <Route
          index
          element={<GridPostList posts={currentUser.posts} showUser={false} />}
        />
        {currentUser.$id === user.id && (
          <Route path="/liked-posts" element={<LikedPosts />} />
        )}
        {currentUser.$id === user.id && (
          <Route path="/profile-saved-posts" element={<ProfileSavedPosts />} />
        )}
        {currentUser.$id === user.id && (
          <Route path="/profile-requests" element={<ProfileRequests />} />
        )}
      </Routes>
      <Outlet />
    </div>
  );
};

export default Profile;
