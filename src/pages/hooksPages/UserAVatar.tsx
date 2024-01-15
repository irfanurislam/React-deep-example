const UserAVatar = ({imageUrl}) => {
  return (
    <div className="w-24 mx-auto 	">
      <img
        className=" flex justify-end items-center rounded-full h-24"
        src={imageUrl}
        alt=""
      />
    </div>
  );
};

export default UserAVatar;
