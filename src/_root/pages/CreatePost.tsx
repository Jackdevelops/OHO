import PostForm from "@/components/forms/PostForm";

// This page is for creating a new donation post
// Uses PostForm which has been imported above
// Uses "Create" action (which is in the PostForm) to create and upload the entered information on the form to the database

const CreatePost = () => {
  return (
    <div className="flex flex-1">
      <div className="common-container">
        <div className="max-w-5xl flex-start gap-3 justify-start w-full">
          <img
            src="/assets/icons/add-post.svg"
            width={36}
            height={36}
            alt="add"
          />
          <h2 className="h3-bold md:h2-bold text-left w-full">
            Create Donation
          </h2>
        </div>

        <PostForm action="Create" />
      </div>
    </div>
  );
};

export default CreatePost;
