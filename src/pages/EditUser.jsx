import { useMutation, useQuery, useQueryClient } from "@tanstack/react-query";
import { useNavigate, useParams } from "react-router-dom";
import { fetchUser, updateUser } from "../api/users";
import UserForm from "../components/UserForm"

const EditUser = () => {
  const queryClient = useQueryClient();
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
  const updateUserMutation = useMutation({
    mutationFn: updateUser,
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ['users']});
      navigate("/")
    }
  })

  if (isLoading) return "loading...";
  if (isError) return `Error: ${error.message}`;

  const handleSubmit = (updatedUser) => {
    updateUserMutation.mutate({id, ...updatedUser})
  }


  return (
    <div>
      <UserForm onSubmit={handleSubmit} initialValue={user} />
    </div>
  )
}

export default EditUser
/*
import { useMutation, useQuery, useQueryClient } from "@tanstack/react-query";
import { useNavigate, useParams } from "react-router-dom";
import { fetchUser, updateUser } from "../api/users";
import UserForm from "../components/UserForm"

const EditUser = () => {
  const queryClient = useQueryClient();
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
  const updateUserMutation = useMutation({
    mutationFn: updateUser,
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ['users']});
      navigate("/")
    }
  })

  if (isLoading) return "loading...";
  if (isError) return `Error: ${error.message}`;

  const handleSubmit = (updatedUser) => {
    updateUserMutation.mutate({id, ...updatedUser})
  }


  return (
    <div>
      <UserForm onSubmit={handleSubmit} initialValue={user} />
    </div>
  )
}

export default EditUser

*/ 