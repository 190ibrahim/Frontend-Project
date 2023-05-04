import UserForm from '../components/UserForm'

const AddUser = () => {
  return (
    <div>
        <UserForm/>
    </div>
  )
}

export default AddUser

/*import { useMutation, useQueryClient } from "@tanstack/react-query"
import { createUser } from "../api/users"
import UserForm from "./UserForm"
import { v4 as uuidv4 } from 'uuid';

const AddUser = () => {
  const queryClient = useQueryClient();

  const createUserMutation = useMutation({
    mutationFn: createUser,
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ['users']});
      console.log("success bro!")
    }
  });

  const handleAddUser = (user) => {
    createUserMutation.mutate({
      id: uuidv4(),
      ...user
    })
  }

  return (
    <div>
      <h2>Add new user</h2>
      <UserForm onSubmit={handleAddUser} initialValue={{}} />
    </div>
  )
}

export default AddUser
*/