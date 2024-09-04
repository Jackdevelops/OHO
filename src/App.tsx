import { Routes, Route } from "react-router-dom";
import {
  Home,
  Explore,
  Saved,
  CreatePost,
  Profile,
  EditPost,
  PostDetails,
  UpdateProfile,
  AllUsers,
} from "@/_root/pages";
import AuthLayout from "./_auth/AuthLayout";
import LandingLayout from "./_landing/LandingLayout";
import RootLayout from "./_root/RootLayout";
import Landing from "@/_landing/pages/Landing";
import About from "@/_landing/pages/About";
import ContactUs from "@/_landing/pages/ContactUs";
import SignupForm from "@/_auth/forms/SignupForm";
import SigninForm from "@/_auth/forms/SigninForm";
import { Toaster } from "@/components/ui/toaster";
import "./globals.css";
import Requested from "./_root/pages/Requested";
import Request from "./_root/pages/Request";
import Help from "./_landing/pages/Help";
import Error404 from "./_error/pages/Error404";

/* 
   This file sets up the page routes for the app and it is split into the following 4 sections:
                              - Public Routes (For Landing Pages)
                              - Authentication Routes (For Sign In & Sign Up pages)
                              - Private Routs (For logged in user pages)
                              - Error Routes (For the 404 Error page)

   Each Section has apart from the Error routes has a "Route Element"  which is the layout file for each page

   Each individual route has the following:
                              - Path (what will the path extension beyond the domain be. E.g. "/landing" is the path in "https://www.oho.com/landing") 
                              - Element (what .tsx file will be dispalyed when on this page. E.g. Home.tsx)
*/
const App = () => {
  return (
    <main className="flex h-screen">
      <Routes>
        {/* Public routes */}
        <Route element={<LandingLayout />}>
          <Route path="/landing" element={<Landing />} />
          <Route path="/about" element={<About />} />
          <Route path="/contact" element={<ContactUs />} />
          <Route path="/help" element={<Help />} />
        </Route>

        {/* Authentication routes */}
        <Route element={<AuthLayout />}>
          <Route path="/sign-in" element={<SigninForm />} />
          <Route path="/sign-up" element={<SignupForm />} />
        </Route>

        {/* Private routes */}
        <Route element={<RootLayout />}>
          <Route index element={<Home />} />
          <Route path="/explore" element={<Explore />} />
          <Route path="/saved" element={<Saved />} />
          <Route path="/all-users" element={<AllUsers />} />
          <Route path="/create-post" element={<CreatePost />} />
          <Route path="/update-post/:id" element={<EditPost />} />
          <Route path="/posts/:id" element={<PostDetails />} />
          <Route path="/profile/:id/*" element={<Profile />} />
          <Route path="/update-profile/:id" element={<UpdateProfile />} />
          <Route path="/requested" element={<Requested />} />
          <Route path="/request/:id" element={<Request />} />
        </Route>

        {/* Error routes */}
        <Route>
          <Route path="*" element={<Error404 />} />
        </Route>
      </Routes>

      <Toaster />
    </main>
  );
};

export default App;
