const UserList = ({ isLoading, error, data }) => {
  if (isLoading && !error) {
    return <p>loading.......</p>;
  }
 
  return (
    <div>
      {data.map((item, i) => (
        <p key={i}>{item.name}</p>
      ))}
    </div>
  );
};

export default UserList;
