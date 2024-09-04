import { Models } from "appwrite";
import Loader from "./Loader";
import GridPostList from "./GridPostList";

type SearchResultsProps = {
  isSearchFetching: boolean;
  searchedPosts: Models.Document[];
};

// This component lays out the search results in the store page in the GridPostList format, and it also displays "No Results" if the String entered
// doesnt return any donation posts.
const SearchResults = ({
  isSearchFetching,
  searchedPosts,
}: SearchResultsProps) => {
  if (isSearchFetching) return <Loader />;

  // Displays the donation posts in the GridPostList format
  if (searchedPosts && searchedPosts.documents.length > 0) {
    return <GridPostList posts={searchedPosts.documents} />;
  }

  // If NO donation posts appear
  return <p className="text-light-4 mt-10 text-center w-full">No results</p>;
};

export default SearchResults;
