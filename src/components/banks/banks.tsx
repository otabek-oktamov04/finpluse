import {
  Box,
  Text,
  Flex,
  ButtonGroup,
  Button,
  InputLeftElement,
  InputGroup,
  Input,
  Icon,
  useDisclosure,
} from "@chakra-ui/react";
import { CiSearch } from "react-icons/ci";
import { FaTableColumns } from "react-icons/fa6";
import { BiFilter } from "react-icons/bi";
import { Table } from "antd";
import BankForm from "./form/bank-form";

const columns = [
  {
    title: "НАЗВАНИЯ БАНКА",
    dataIndex: "name",
    key: "name",
  },
  {
    title: "ТЕЛЕФОН НОМЕР",
    dataIndex: "age",
    key: "age",
  },
  {
    title: "БАЛАНС",
    dataIndex: "address",
    key: "address",
  },
  {
    title: "ДАТА СОЗДАНИЙ",
    dataIndex: "address",
    key: "address",
  },
];

export const Banks = () => {
  const { isOpen, onClose, onOpen } = useDisclosure();
  return (
    <Box>
      <Flex
        borderBottomWidth="1px"
        paddingBottom="18px"
        justifyContent="space-between"
      >
        <Text className="head-text">Банки</Text>
        <ButtonGroup gap="4">
          <Button
            background="#2563EB"
            height="44px"
            color="white"
            colorScheme="primary"
            onClick={onOpen}
          >
            Добавить банк
          </Button>
        </ButtonGroup>
      </Flex>

      <Flex justifyContent="space-between" marginTop="20px" marginBottom="20px">
        <InputGroup
          background="#F8FAFC"
          borderRadius="8px"
          display="flex"
          alignItems="center"
          maxW="375px"
        >
          <InputLeftElement pointerEvents="none">
            <Icon
              fontSize="22"
              _groupHover={{
                color: "#2563EB",
              }}
              as={CiSearch}
            />
          </InputLeftElement>
          <Input
            height="44px"
            type="search"
            placeholder="Поиск по имени и телефона"
          />
        </InputGroup>
        <Flex gap="4">
          <Button
            background="#F8FAFC"
            border="1px"
            display="flex"
            height="44px"
            justifyContent="space-between"
            borderColor="#E2E8F0"
            fontWeight="400 !important"
            minW="150px"
            leftIcon={
              <Icon
                fontSize="22"
                _groupHover={{
                  color: "#2563EB",
                }}
                as={FaTableColumns}
              />
            }
          >
            Столбцы
          </Button>
          <Button
            background="#F8FAFC"
            border="1px"
            display="flex"
            height="44px"
            justifyContent="space-between"
            borderColor="#E2E8F0"
            fontWeight="400 !important"
            minW="120px"
            leftIcon={
              <Icon
                fontSize="22"
                _groupHover={{
                  color: "#2563EB",
                }}
                as={BiFilter}
              />
            }
          >
            Фильтр
          </Button>
        </Flex>
      </Flex>

      <Table columns={columns} />
      <BankForm isOpen={isOpen} onClose={onClose} />
    </Box>
  );
};

export default Banks;
