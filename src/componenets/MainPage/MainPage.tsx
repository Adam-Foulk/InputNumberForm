import { Button } from "@mantine/core";
import InputNubmerForm from "../InputNumberForm/InputNubmerForm.tsx";
import { useInputNumberStore } from "../InputNumberForm/InputNumberStore.ts";
import { useState } from "react";

const MainPage = () => {
  const openInputNumberForm = useInputNumberStore((state) => state.open);
  const [number, setNumber] = useState(0);
  return (
    <div>
      <div style={{ fontSize: "16pt" }}>{number}</div>
      <Button onClick={openInputNumberForm}>Input Number</Button>
      <InputNubmerForm setNumber={setNumber} />
    </div>
  );
};

export default MainPage;
