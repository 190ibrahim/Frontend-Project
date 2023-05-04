import { useQuery } from "@tanstack/react-query";
import { useNavigate, useParams } from "react-router-dom";
import { fetchUser } from "../api/users";

const User = () => {
  const navigate = useNavigate();
  const { id } = useParams();
  const {
    isLoading,
    isError,
    data: user,
    error,
  } = useQuery({
    queryKey: ["users", id],
    queryFn: () => fetchUser(id),
  });

  if (isLoading) return "loading...";
  if (isError) return `Error: ${error.message}`;


  return (
    <div>
      <button onClick={() => navigate("/")}>back to list users</button>
      <h1>{user.name}</h1>
      <p>{user.email}</p>
      <p>{user.birthdate}</p>
      <p>{user.account}</p>
      <p>{user.companyname}</p>
      <p>{user.creditcardnum}</p>
    </div>
  )
}

export default User;


/*
import { useQuery } from "@tanstack/react-query";
import { useNavigate, useParams } from "react-router-dom";
import { fetchPost } from "../api/posts";

const Post = () => {
  const navigate = useNavigate();
  const { id } = useParams();
  const {
    isLoading,
    isError,
    data: post,
    error,
  } = useQuery({
    queryKey: ["posts", id],
    queryFn: () => fetchPost(id),
  });

  if (isLoading) return "loading...";
  if (isError) return `Error: ${error.message}`;


  return (
    <div>
      <button onClick={() => navigate("/")}>back to list posts</button>
      <h1>{post.title}</h1>
      <p>{post.body}</p>
    </div>
  )
}

export default Post
*/