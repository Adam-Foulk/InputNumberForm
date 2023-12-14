import { FC, useState } from "react";
import { Button, Group, Input, Modal, Stack } from "@mantine/core";

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
    <Modal opened={modalOpened} size="auto" onClose={close} withCloseButton={false} centered>
        <Input
          size="lg"
          variant="default"
          value={value}
          type="text"
          mb={10}
        />
        <Group gap={10}>
        <Stack
          justify="flex-start"
          gap="5px"
        >
          <Group gap="5px">
            <Button fz="24pt" w="80px" h="80px" variant="light" onClick={addText}>
              7
            </Button>
            <Button fz="24pt" w="80px" h="80px" variant="light" onClick={addText}>
              8
            </Button>
            <Button fz="24pt" w="80px" h="80px" variant="light" onClick={addText}>
              9
            </Button>
          </Group>
          <Group gap="5px">
            <Button fz="24pt" w="80px" h="80px" variant="light" onClick={addText}>
              4
            </Button>
            <Button fz="24pt" w="80px" h="80px" variant="light" onClick={addText}>
              5
            </Button>
            <Button fz="24pt" w="80px" h="80px" variant="light" onClick={addText}>
              6
            </Button>
          </Group>
          <Group gap="5px">
            <Button fz="24pt" w="80px" h="80px" variant="light" onClick={addText}>
              1
            </Button>
            <Button fz="24pt" w="80px" h="80px" variant="light" onClick={addText}>
              2
            </Button>
            <Button fz="24pt" w="80px" h="80px" variant="light" onClick={addText}>
              3
            </Button>
          </Group>
          <Group gap="5px">
            <Button fz="24pt" w="80px" h="80px" variant="light" onClick={addText}>
              0
            </Button>
            <Button fz="24pt" w="80px" h="80px" variant="light" onClick={addText}>
              00
            </Button>
            <Button fz="24pt" w="80px" h="80px" variant="light" onClick={addText}>
              .
            </Button> 
          </Group>
        </Stack>
        <Stack w={150} gap={10}>
          <Button fz="24pt" h="80px" variant="light" color="rgba(255, 54, 54, 1)" onClick={close} >
            Cancel
          </Button>
          <Button fz="24pt" h="80px" variant="light" color="rgba(255, 153, 0, 1)" onClick={clear} >
            Clear
          </Button>
          <Button fz="24pt"
            h="80px" variant="light"
            color="rgba(19, 168, 101, 1)"
            onClick={enterHandler}
          >
            Enter
          </Button>
        </Stack>
        </Group>

    </Modal>
    );
};

export default InputNumberForm;