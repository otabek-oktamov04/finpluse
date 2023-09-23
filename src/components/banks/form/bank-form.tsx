import {
  Modal,
  ModalOverlay,
  ModalContent,
  ModalHeader,
  ModalFooter,
  ModalBody,
  ModalCloseButton,
  Button,
  FormControl,
  FormLabel,
  Input,
} from "@chakra-ui/react";

interface IProps {
  isOpen: boolean;
  onClose: () => void;
}

export const BankForm = ({ isOpen, onClose }: IProps) => {
  return (
    <Modal isCentered isOpen={isOpen} onClose={onClose}>
      <ModalOverlay />
      <ModalContent width="459px">
        <ModalHeader
          display="flex"
          alignItems="center"
          justifyContent="space-between"
          fontSize="24px"
          fontWeight="600"
        >
          Добавить банк
          <ModalCloseButton marginTop="10px" fontSize="16px" />
        </ModalHeader>

        <ModalBody display="flex" flexDirection="column" gap="4">
          <FormControl>
            <FormLabel>Названия банка</FormLabel>
            <Input height="44px" placeholder="Названия банка" />
          </FormControl>
          <FormControl>
            <FormLabel>Телефон номер</FormLabel>
            <Input height="44px" placeholder="+998 (_ _) _ _ _ - _ _ - _ _" />
          </FormControl>
          <FormControl>
            <FormLabel>Текущий баланс</FormLabel>
            <Input height="44px" placeholder="Текущий баланс" />
          </FormControl>
        </ModalBody>

        <ModalFooter>
          <Button
            background="#DBEAFE"
            width="50%"
            height="50px"
            color="#2563EB"
            variant="unstyled"
            mr={3}
            onClick={onClose}
          >
            Отменить
          </Button>
          <Button colorScheme="blue" width="50%" height="50px">
            Сохранить
          </Button>
        </ModalFooter>
      </ModalContent>
    </Modal>
  );
};

export default BankForm;
