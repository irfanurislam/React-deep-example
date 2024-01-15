import { useState } from "react";
import "./App.css";
import MainLayout from "./components/layout/MainLayout";
import Button from "./components/ui/Button";
import Container from "./components/ui/Container";
import Modal from "./components/ui/Modal";
import NormalForm from "./components/NormalForm/NormalForm";
// import { MenuItem, MenuList } from "./components/Menu";
// import UsersContainer from "./components/UsersContainer";
// import Select from "./components/select";
// import GameResult from "./pages/hooksPages/GameResult";
// import Profile from "./pages/hooksPages/Profile";

function App() {
  // const [modal, setModal] = useState(false);

  // const handleModalClose = () => {
  //   setModal((prev) => !prev);
  // };

  return (
    <>
      <div className="">
        {/* <Container> */}
        {/* old gula practice 
        <Profile></Profile>
        <GameResult></GameResult>
        <MenuList>
          <MenuItem></MenuItem>
        </MenuList>
        <UsersContainer></UsersContainer>

        <Select>
          <Select.SelectOption value="option1"> option1</Select.SelectOption>
          <Select.SelectOption value="option2"> option2</Select.SelectOption>
          <Select.SelectOption value="option3"> option3</Select.SelectOption>
          <Select.SelectOption value="option4"> option4</Select.SelectOption>
        </Select>
        */}

        {/* <MainLayout></MainLayout> */}

        {/* 
          <h2>new content main</h2>
          <h2>new content main</h2>
          <h2>new content main</h2>
          <h2>new content main</h2>
          <h2>new content main</h2>

          <button className="btn btn-primary"> this btn</button>
          
      */}
        {/* <button
          onClick={() => setModal((prev) => !prev)}
          className="btn btn-danger "
        >
          click me
        </button> 
        <Modal isOpen={modal} onClose={handleModalClose}>
          <Modal.Header>
            <h1 className="text-2xl">this is model title</h1>
            <Modal.CloseButton></Modal.CloseButton>
          </Modal.Header>

          <p>
            <b>this is content</b>
          </p>
        </Modal>

        <Button className="bg-green-400"></Button>*/}
        <NormalForm></NormalForm>
        {/* </Container> */}
      </div>
    </>
  );
}

export default App;
