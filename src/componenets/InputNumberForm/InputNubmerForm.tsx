import { FC, useState } from "react";
import styles from "./InputNumberForm.module.less";
import { Button, Input } from "@mantine/core";

type InputNumberFormProps = {
  display: boolean;
  setDisplay: (value: boolean) => void;
  setNumber: (number: number) => void;
};

const InputNumberForm: FC<InputNumberFormProps> = ({ setNumber, setDisplay, display }) => {
  const [value, setValue] = useState('');

  const addText = (event: React.MouseEvent<HTMLButtonElement>) => {
    console.log(event)
    if(!value.includes(".") || event.target.innerText !== ".")
      setValue(value + event.target.innerText)
  }
  const close = () => {setValue(''); setDisplay(false)}
  const clear = () => {setValue('')}
  const enterHandler = () => {
    if (value[0] === "." && value.length === 1) return;
    setNumber(Number(value));
    close();
  };

  if(!display) return
  return (
      <div className={styles.inputNumberForm}>
        <Input
          variant="unstyled"
          className={styles.input}
          value={value}
          type="text"
        />
        <div className={styles.numberPannel}>
          <Button variant="default" onClick={addText}>
            7
          </Button>
          <Button variant="default" onClick={addText}>
            8
          </Button>
          <Button variant="default" onClick={addText}>
            9
          </Button>
          <Button variant="default" onClick={addText}>
            4
          </Button>
          <Button variant="default" onClick={addText}>
            5
          </Button>
          <Button variant="default" onClick={addText}>
            6
          </Button>
          <Button variant="default" onClick={addText}>
            1
          </Button>
          <Button variant="default" onClick={addText}>
            2
          </Button>
          <Button variant="default" onClick={addText}>
            3
          </Button>
          <Button variant="default" onClick={addText}>
            0
          </Button>
          <Button variant="default" onClick={addText}>
            00
          </Button>
          <Button variant="default" onClick={addText}>
            .
          </Button>
        </div>
        <div className={styles.actionPanel}>
          <Button variant="default" onClick={close} className={styles.cancel}>
            cancel
          </Button>
          <Button variant="default" onClick={clear} className={styles.clear}>
            clear
          </Button>
          <Button
            variant="default"
            onClick={enterHandler}
            className={styles.enter}
          >
            enter
          </Button>
        </div>
      </div>
    );
};

export default InputNumberForm;