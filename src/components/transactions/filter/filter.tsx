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
  Select,
  Flex,
  Input,
} from "@chakra-ui/react";

interface IProps {
  isOpen: boolean;
  onClose: () => void;
}

export const Filter = ({ isOpen, onClose }: IProps) => {
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
          Фильтр
          <ModalCloseButton marginTop="10px" fontSize="16px" />
        </ModalHeader>

        <ModalBody display="flex" flexDirection="column" gap="4">
          <FormControl>
            <FormLabel>Выберите счёт</FormLabel>
            <Select height="44px" placeholder="Выберите счёт" />
          </FormControl>
          <FormControl>
            <FormLabel>Выберите контрагента</FormLabel>
            <Select height="44px" placeholder="Выберите контрагента" />
          </FormControl>
          <FormControl>
            <FormLabel>Выберите категорию</FormLabel>
            <Select height="44px" placeholder="Выберите категорию" />
          </FormControl>
          <FormControl>
            <FormLabel>Выберите проект</FormLabel>
            <Select height="44px" placeholder="Выберите проект" />
          </FormControl>
          <Flex alignItems="center" gap="4">
            <FormControl>
              <FormLabel>От </FormLabel>
              <Input height="44px" type="date" />
            </FormControl>
            <FormControl>
              <FormLabel>До</FormLabel>
              <Input height="44px" type="date" />
            </FormControl>
          </Flex>
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
            Очистить фильтр
          </Button>
          <Button colorScheme="blue" width="50%" height="50px">
            Фильтровать
          </Button>
        </ModalFooter>
      </ModalContent>
    </Modal>
  );
};

export default Filter;
