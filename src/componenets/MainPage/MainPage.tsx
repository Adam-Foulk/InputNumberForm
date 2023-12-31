import { Button } from "@mantine/core";
import InputNubmerForm from "../InputNumberForm/InputNubmerForm.tsx";
import { useState } from "react";
import { useDisclosure } from "@mantine/hooks";

const MainPage = () => {
  const [number, setNumber] = useState(0);

  const [opened, { close, open }] = useDisclosure(false);

  return (
    <div>
      <div style={{ fontSize: "16pt" }}>{number}</div>
      <Button onClick={open}>Input Number</Button>
     <InputNubmerForm setNumber={setNumber} modalOpened={opened} closeModal={close}/>
    </div>
  );
};

export default MainPage;
