import { FC, useState } from "react";
import styles from "./InputNumberForm.module.less";
import { Button, Input, Modal } from "@mantine/core";

type InputNumberFormProps = {
  modalOpened: boolean;
  closeModal: () => void;
  setNumber: (number: number) => void;
};

const InputNumberForm: FC<InputNumberFormProps> = ({ setNumber, closeModal, modalOpened }) => {
  const [value, setValue] = useState('');
    const addText = (event: React.MouseEvent<HTMLButtonElement>) => {
      console.log(event)
      if(!value.includes(".") || event.target.innerText !== ".")
        setValue(value + event.target.innerText)
    }
    const close = () => {setValue(''); closeModal()}
    const clear = () => {setValue('')}
    const enterHandler = () => {
      if (value[0] === "." && value.length === 1) return;
      setNumber(Number(value));
      close();
    };

  if(!modalOpened) return
  return (
    <Modal opened={modalOpened} size="auto" onClose={close} withCloseButton={false} className={styles.modal} centered>
      <div className={styles.inputNumberForm}>
          <Input
            variant="unstyled"
            className={styles.input}
            value={value}
            type="text"
          />
          <div className={styles.numberPannel}>
            <Button h="auto" variant="light" onClick={addText}>
              7
            </Button>
            <Button h="auto" variant="light" onClick={addText}>
              8
            </Button>
            <Button h="auto" variant="light" onClick={addText}>
              9
            </Button>
            <Button h="auto" variant="light" onClick={addText}>
              4
            </Button>
            <Button h="auto" variant="light" onClick={addText}>
              5
            </Button>
            <Button h="auto" variant="light" onClick={addText}>
              6
            </Button>
            <Button h="auto" variant="light" onClick={addText}>
              1
            </Button>
            <Button h="auto" variant="light" onClick={addText}>
              2
            </Button>
            <Button h="auto" variant="light" onClick={addText}>
              3
            </Button>
            <Button h="auto" variant="light" onClick={addText}>
              0
            </Button>
            <Button h="auto" variant="light" onClick={addText}>
              00
            </Button>
            <Button h="auto" variant="light" onClick={addText}>
              .
            </Button>
          </div>
          <div className={styles.actionPanel}>
            <Button h="80px" variant="light" color="rgba(255, 54, 54, 1)" onClick={close} >
              cancel
            </Button>
            <Button h="80px" variant="light" color="rgba(255, 153, 0, 1)" onClick={clear} >
              clear
            </Button>
            <Button
              h="80px" variant="light"
              color="rgba(19, 168, 101, 1)"
              onClick={enterHandler}
            >
              enter
            </Button>
          </div>
        </div>
    </Modal>
    );
};

export default InputNumberForm;