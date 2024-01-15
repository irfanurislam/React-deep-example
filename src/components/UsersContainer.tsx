import UserList from "./UserList";
import useUserData from "../hooks/useUserData";

const UsersContainer = () => {
  const { data, isLoading, error } = useUserData();

  const props = {
    data,
    isLoading,
    error,
  };

  return (
    <div>
      <h1>{data.length}</h1>

      <UserList {...props}></UserList>
    </div>
  );
};

export default UsersContainer;
