
import { useMutation, useQuery, useQueryClient } from "@tanstack/react-query";
import { useNavigate } from "react-router-dom";
import { deleteUser, fetchUsers } from "../api/users";
import AddUser from "../components/AddUser";

const UserList = () => {
  const navigate = useNavigate();
  const queryClient = useQueryClient();

  const {
    isLoading,
    isError,
    data: users,
    error,
  } = useQuery({
    queryKey: ["users"],
    queryFn: fetchUsers,
  });

  const deleteUserMutation = useMutation({
    mutationFn: deleteUser,
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ['users'] });
    }
  });

  const handleDelete = (id) => {
    deleteUserMutation.mutate(id)
  }

  if (isLoading) return "loading...";
  if (isError) return `Error: ${error.message}`;

  return (
    <div>
      <AddUser />
      {users.map((user) => (
        <div key={user.id} style={{ background: "#777" }}>
          <h4
            style={{ cursor: "pointer" }}
            onClick={() => navigate(`/user/${user.id}`)}
          >
            {user.name}
          </h4>
          <button onClick={() => navigate(`/user/${user.id}/edit`)}>Edit</button>
          <button onClick={() => handleDelete(user.id)}>Delete</button>
        </div>
      ))}
    </div>
  );
};

export default UserList;

/*
import { useMutation, useQuery, useQueryClient } from "@tanstack/react-query";
import { useNavigate } from "react-router-dom";
import { deletePost, fetchPosts } from "../api/posts";
import AddPost from "../components/AddPost";

const PostLists = () => {
  const navigate = useNavigate();
  const queryClient = useQueryClient();

  const {
    isLoading,
    isError,
    data: posts,
    error,
  } = useQuery({
    queryKey: ["posts"],
    queryFn: fetchPosts,
  });

  const deletePostMutation = useMutation({
    mutationFn: deletePost,
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ['posts']});
    }
  });

  const handleDelete = (id) => {
    deletePostMutation.mutate(id)
  }

  if (isLoading) return "loading...";
  if (isError) return `Error: ${error.message}`;

  return (
    <div>
      <AddPost />
      {posts.map((post) => (
        <div key={post.id} style={{ background: "#777" }}>
          <h4
            style={{ cursor: "pointer" }}
            onClick={() => navigate(`/post/${post.id}`)}
          >
            {post.title}
          </h4>
          <button onClick={() => navigate(`/post/${post.id}/edit`)}>Edit</button>
          <button onClick={() => handleDelete(post.id)}>Delete</button>
        </div>
      ))}
    </div>
  );
};

export default PostLists;
*/