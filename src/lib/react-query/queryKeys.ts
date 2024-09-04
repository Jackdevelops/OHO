// This file is used almost as a safety net as it will flag up in queries and mutations when a query key has been mispelt.
// It wouldnt do this if I didnt use query keys, therefore making it harder to find potential errors

export enum QUERY_KEYS {
  // Authentication Query Key
  CREATE_USER_ACCOUNT = "createUserAccount",

  // User Query Keys
  GET_CURRENT_USER = "getCurrentUser",
  GET_USERS = "getUsers",
  GET_USER_BY_ID = "getUserById",

  // Post Query Keys
  GET_POSTS = "getPosts",
  GET_INFINITE_POSTS = "getInfinitePosts",
  GET_RECENT_POSTS = "getRecentPosts",
  GET_POST_BY_ID = "getPostById",
  GET_USER_POSTS = "getUserPosts",
  GET_FILE_PREVIEW = "getFilePreview",

  // Search Function Query Keys
  SEARCH_POSTS = "getSearchPosts",
  GET_RECENT_MESSAGES = "GET_RECENT_MESSAGES",
  GET_MESSAGE_BY_ID = "GET_MESSAGE_BY_ID",
}
