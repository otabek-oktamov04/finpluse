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
  Flex,
  Select,
} from "@chakra-ui/react";

interface IProps {
  isOpen: boolean;
  onClose: () => void;
}

export const ProjectForm = ({ isOpen, onClose }: IProps) => {
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
          Добавить проект
          <ModalCloseButton marginTop="10px" fontSize="16px" />
        </ModalHeader>

        <ModalBody display="flex" flexDirection="column" gap="4">
          <FormControl>
            <FormLabel>Название проекта</FormLabel>
            <Input height="44px" placeholder="Название проекта" />
          </FormControl>
          <FormControl>
            <FormLabel>Номер контракта</FormLabel>
            <Input height="44px" placeholder="Номер контракта" />
          </FormControl>
          <Flex alignItems="center" gap="4">
            <FormControl>
              <FormLabel>Дата контракта</FormLabel>
              <Input height="44px" type="date" />
            </FormControl>
            <FormControl>
              <FormLabel>Дата сделки</FormLabel>
              <Input height="44px" type="date" />
            </FormControl>
          </Flex>
          <FormControl>
            <FormLabel>Родительский проект</FormLabel>
            <Select height="44px" placeholder="Родительский проект" />
          </FormControl>
          <FormControl>
            <FormLabel>Прикреплённый сотрудник</FormLabel>
            <Select height="44px" placeholder="Прикреплённый сотрудник" />
          </FormControl>
          <FormControl>
            <FormLabel>Статус проекта</FormLabel>
            <Select height="44px" placeholder="Статус проекта" />
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

export default ProjectForm;
