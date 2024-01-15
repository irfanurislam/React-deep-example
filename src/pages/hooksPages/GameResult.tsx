import UserAVatar from "./UserAVatar";
import withBorder from "../../components/WIthBorder";

const UserWithBorder: any = withBorder(UserAVatar);

const GameResult = () => {
  return (
    <div className="flex">
      <UserWithBorder imageUrl={"https://i.ibb.co/cbS2LYF/author5.jpg"} />
      <UserAVatar imageUrl={"https://i.ibb.co/cbS2LYF/author5.jpg"} />
      <UserAVatar imageUrl={"https://i.ibb.co/cbS2LYF/author5.jpg"} />
      <UserAVatar imageUrl={"https://i.ibb.co/cbS2LYF/author5.jpg"} />
    </div>
  );
};

export default GameResult;
