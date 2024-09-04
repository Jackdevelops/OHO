import { useToast } from "@/components/ui/use-toast";
import Loader from "@/components/shared/Loader";
import UserCard from "@/components/shared/UserCard";
import { useGetUsers } from "@/lib/react-query/queriesAndMutations";

// This page displays all of thre user accounts
const AllUsers = () => {
  const { toast } = useToast();

  const { data: creators, isLoading, isError: isErrorCreators } = useGetUsers();

  if (isErrorCreators) {
    toast({ title: "Something went wrong." });

    return null;
  }

  return (
    <div className="common-container">
      <div className="user-container">
        <div className="flex gap-2 w-full max-w-5xl">
          <img
            src="/assets/icons/people.svg"
            width={36}
            height={36}
            alt="people"
          />
          <h2 className="h3-bold md:h2-bold text-left w-full">People</h2>
        </div>
        {isLoading && !creators ? (
          <Loader />
        ) : (
          <ul className="user-grid flex-col">
            {" "}
            {creators?.documents.map((creator) => (
              <li key={creator?.$id} className="min-w-[200px] w-full mb-4">
                <UserCard user={creator} />
              </li>
            ))}
          </ul>
        )}
      </div>{" "}
    </div>
  );
};

export default AllUsers;
