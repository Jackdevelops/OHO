// This file is used to set the types which are used in other files for creating user or post details

// Used for Authentication to check users details
export type IContextType = {
  user: IUser;
  isLoading: boolean;
  setUser: React.Dispatch<React.SetStateAction<IUser>>;
  isAuthentic: boolean;
  setIsAuthenticated: React.Dispatch<React.SetStateAction<boolean>>;
  checkAuthUser: () => Promise<boolean>;
};

// Coding layout used for the Left Side Bar & Bottom Bar
export type INavLink = {
  imgURL: string;
  route: string;
  label: string;
};

// Defining the data types for when the user info is being updated
export type IUpdateUser = {
  userId: string;
  name: string;
  bio: string;
  facebookMessenger: string;
  imageId: string;
  imageUrl: URL | string;
  file: File[];
};

// Defining the data types and options for when a new post is being created
export type INewPost = {
  userId: string;
  caption: string;
  file: File[];
  location?: string;
  dietaryPreference?: "Meat" | "Vegan" | "Vegetarian" | "Pescetarian" | "None";
  expiry?: string;
  tags?: string;
};

// Defining the data types for when a posts info is being updated
export type IUpdatePost = {
  postId: string;
  caption: string;
  imageId: string;
  imageUrl: URL;
  file: File[];
  location?: string;
  dietaryPreference?: "Meat" | "Vegan" | "Vegetarian" | "Pescetarian" | "None";
  expiry?: string;
  tags?: string;
};

// Defining the data types for when a users account is being updated
export type IUser = {
  id: string;
  name: string;
  username: string;
  email: string;
  imageUrl: string;
  bio: string;
  facebookMessenger: string;
};

// Defining the data types for when a new user account is being created
export type INewUser = {
  name: string;
  email: string;
  username: string;
  password: string;
};
