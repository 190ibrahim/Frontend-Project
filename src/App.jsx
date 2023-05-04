
import { Route, Routes } from "react-router-dom"
import EditUser from "./pages/EditUser"
import User from "./pages/User"
import UserLists from "./pages/UserLists"
import NavBar from "./components/navbar"
import 'bootstrap/dist/css/bootstrap.min.css';
import LandingPage from "./pages/LandingPage"



function App() {


  return (
    <>
    <NavBar />

      <Routes>
        <Route path="/" element={<LandingPage />} />
        <Route path="/users" element={<UserLists />} />
        <Route path="/user/:id" element={<User />} />
        <Route path="/user/:id/edit" element={<EditUser />} />
      </Routes>
    </>

  )
}

export default App


/*
import { Route, Routes } from "react-router-dom"
import EditPost from "./pages/EditPost"
import Post from "./pages/Post"
import PostLists from "./pages/PostLists"

function App() {

  return (
    <div>
      <h1>Awesome blog</h1>
      <Routes>
        <Route path="/" element={<PostLists />} />
        <Route path="/post/:id" element={<Post />} />
        <Route path="/post/:id/edit" element={<EditPost />} />
      </Routes>
    </div>
  )
}

export default App

*/