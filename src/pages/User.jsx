import { useMutation, useQuery, useQueryClient } from "@tanstack/react-query";
import { useNavigate, useParams } from "react-router-dom";
import { fetchUser, deleteUser } from "../api/users";
import { Card, ListGroup, ListGroupItem, Badge, Button } from "react-bootstrap";

const User = () => {
  const navigate = useNavigate();
  const { id } = useParams();

  const { isLoading, data: user, error } = useQuery({
    queryKey: ["users", id],
    queryFn: () => fetchUser(id),
    staleTime: 600000, // cache for 10 minutes
  });

  const queryClient = useQueryClient();

  const deleteMutation = useMutation(deleteUser, {
    onSuccess: () => {
      queryClient.invalidateQueries("users");
      queryClient.invalidateQueries(["users", id]);
      navigate("/");
    },
  });

  const handleEdit = () => {
    navigate(`/user/${id}/edit`);
  };

  const handleDelete = () => {
    deleteMutation.mutate(id);
  };

  if (isLoading) return "loading...";
  if (error) return `Error: ${error.message}`;

  return (
    <div className="d-flex justify-content-center">
      <Card className="mx-auto" style={{ width: "30rem" }}>
        <Card.Header>
          <h2>{user.name}</h2>
          <p>
            <Badge variant="secondary">{user.id}</Badge>
          </p>
        </Card.Header>
        <Card.Body>
          <ListGroup>
            <ListGroupItem>Email: {user.email}</ListGroupItem>
            <ListGroupItem>Birth Date: {user.birthdate}</ListGroupItem>
            <ListGroupItem>Account: {user.account}</ListGroupItem>
            <ListGroupItem>Company Name: {user.companyname}</ListGroupItem>
            <ListGroupItem>Credit Card Number: {user.creditcardnum}</ListGroupItem>
          </ListGroup>
        </Card.Body>
        <Card.Footer>
          <Button variant="primary" onClick={handleEdit}>
            Edit
          </Button>{" "}
          <Button variant="danger" onClick={handleDelete} disabled={deleteMutation.isLoading}>
            {deleteMutation.isLoading ? "Deleting..." : "Delete"}
          </Button>{" "}
          <Button variant="secondary" onClick={() => navigate("/users")}>
            Back to List Users
          </Button>
        </Card.Footer>
      </Card>
    </div>
  );
};

export default User;




// import { useQuery } from "@tanstack/react-query";
// import { useNavigate, useParams } from "react-router-dom";
// import { fetchUser } from "../api/users";

// const User = () => {
//   const navigate = useNavigate();
//   const { id } = useParams();
//   const {
//     isLoading,
//     isError,
//     data: user,
//     error,
//   } = useQuery({
//     queryKey: ["users", id],
//     queryFn: () => fetchUser(id),
//   });

//   if (isLoading) return "loading...";
//   if (isError) return `Error: ${error.message}`;


//   return (
//     <div>
//       <button onClick={() => navigate("/")}>back to list users</button>
//       <h1>{user.name}</h1>
//       <p>{user.email}</p>
//       <p>{user.birthdate}</p>
//       <p>{user.account}</p>
//       <p>{user.companyname}</p>
//       <p>{user.creditcardnum}</p>
//     </div>
//   )
// }

// export default User;


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