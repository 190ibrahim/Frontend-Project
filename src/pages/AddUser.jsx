import { useMutation, useQueryClient } from "@tanstack/react-query";
import { createUser } from "../api/users";
import { nanoid } from "nanoid";
import UserForm from "../components/UserForm";
import { useNavigate } from "react-router-dom";

const AddUser = () => {
  const queryClient = useQueryClient();
  const navigate = useNavigate();

  const createUserMutation = useMutation({
    mutationFn: createUser,
    onSuccess: (data) => {
      queryClient.invalidateQueries({ queryKey: ["users"] });
      console.log("success bro!");
      navigate(`/user/${data.id}`); // navigate to the newly created user
    },
  });

  const handleAddUser = (user) => {
    createUserMutation.mutate({
      id: nanoid(10),
      ...user,
    });
  };

  return (
    <div>
      <UserForm onSubmit={handleAddUser} initialValue={{}} />
    </div>
  );
};

export default AddUser;

