import { Button } from "@mantine/core";
import InputNubmerForm from "../InputNumberForm/InputNubmerForm.tsx";
import { useState } from "react";

const MainPage = () => {
  const openInputNumberForm = () => {setDisplayInputNumber(true)}
  const [number, setNumber] = useState(0);

  const [displayInputNumber, setDisplayInputNumber] = useState(false)
  return (
    <div>
      <div style={{ fontSize: "16pt" }}>{number}</div>
      <Button onClick={openInputNumberForm}>Input Number</Button>
     <InputNubmerForm setNumber={setNumber} display={displayInputNumber} setDisplay={setDisplayInputNumber}/>
    </div>
  );
};

export default MainPage;
