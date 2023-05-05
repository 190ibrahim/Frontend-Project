import { useState } from "react";
import { useMutation, useQuery, useQueryClient } from "@tanstack/react-query";
import { useNavigate } from "react-router-dom"; // <-- import Link
import Table from 'react-bootstrap/Table';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import { deleteUser, deleteAllUsers, fetchUsers } from "../api/users";


const UserList = () => {
  const navigate = useNavigate();
  const queryClient = useQueryClient();
  const [numToShow, setNumToShow] = useState(5);

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
  
  const deleteAllUsersMutation = useMutation({
    mutationFn: deleteAllUsers,
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ['users'] });
    }
  });

  const handleDelete = (id) => {
    deleteUserMutation.mutate(id)
  }

  const handleDeleteAll = () => {
    deleteAllUsersMutation.mutate()
  }
  const handleShowMore = () => {
    setNumToShow(numToShow + 5);
  }

  const handleShowLess = () => {
    setNumToShow(5);
  }

  if (isLoading) return "Loading...";
  if (isError) return `Error: ${error.message}`;

  const shownUsers = users.slice(0, numToShow);

  return (
    <div className="mx-auto my-5">
    <Card> 
      <Card.Header>
        <div className="d-flex justify-content-between align-items-center">
          <span>Users</span>
          <div>
            <Button variant="danger" size="sm" onClick={handleDeleteAll}>Delete All Users</Button>{' '}
            <Button variant="primary" size="sm" onClick={() => navigate(`/adduser`)}>Add New User</Button>{' '}
          </div>
        </div>
      </Card.Header>

      <Card.Body>
      <Table responsive striped hover>
        <thead>
          <tr>
            <th>#</th>
            <th>Name</th>
            <th>Email</th>
            <th>Birthdate</th>
            <th>Account</th>
            <th>Company Name</th>
            <th>Credit Card Number</th>
            <th colSpan="3">Action</th>
          </tr>
        </thead>
        <tbody>
          {shownUsers.map((user) => (
            <tr key={user.id}>
              <td>{user.id}</td>
              <td style={{ cursor: "pointer" }} onClick={() => navigate(`/user/${user.id}`)}>
                {user.name}
              </td>
              <td>{user.email}</td>
              <td>{user.birthdate}</td>
              <td>{user.account}</td>
              <td>{user.companyname}</td>
              <td>{user.creditcardnum}</td>
              <td>
                <Button variant="primary" size="sm" onClick={() => navigate(`/user/${user.id}`)}>View</Button>{' '}
              </td>
                <td>
                <Button variant="warning" size="sm" onClick={() => navigate(`/user/${user.id}/edit`)}>Edit</Button>{' '}
              </td>
                <td>
                <Button variant="danger" size="sm" onClick={() => handleDelete(user.id)}>Delete</Button>
              </td>
            </tr>
          ))}
        </tbody>
      </Table>
            </Card.Body>
    </Card>

    <br />
      {users.length > numToShow && (
        <div className="text-center">
          <Button variant="primary" size="sm" onClick={handleShowMore}>Show More</Button>{' '}
          {numToShow > 5 && <Button variant="secondary" size="sm" onClick={handleShowLess}>Show Less</Button>}
        </div>
      )}
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