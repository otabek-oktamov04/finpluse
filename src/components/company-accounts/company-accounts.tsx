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
import CompanyAccountForm from "./form/company-account-form";

const columns = [
  {
    title: "НАЗВАНИЯ СЧЁТА",
    dataIndex: "name",
    key: "name",
  },
  {
    title: "БАЛАНС",
    dataIndex: "age",
    key: "age",
  },
  {
    title: "ДАТА СОЗДАНИЙ",
    dataIndex: "address",
    key: "address",
  },
  {
    title: "ПОСЛЕДНАЯ ОПЕРАЦИЯ",
    dataIndex: "address",
    key: "address",
  },
  {
    title: "ДОХОДЫ",
    dataIndex: "address",
    key: "address",
  },
  {
    title: "РАСХОДЫ",
    dataIndex: "address",
    key: "address",
  },
];

export const CompanyAccounts = () => {
  const { onClose, onOpen, isOpen } = useDisclosure();
  return (
    <Box>
      <Flex
        borderBottomWidth="1px"
        paddingBottom="18px"
        justifyContent="space-between"
      >
        <Text className="head-text">Мои счета</Text>
        <ButtonGroup gap="4">
          <Button
            background="#2563EB"
            height="44px"
            color="white"
            colorScheme="primary"
            onClick={onOpen}
          >
            Добавить счёт
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
          <Input height="44px" type="search" placeholder="Поиск по имени " />
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
      <CompanyAccountForm onClose={onClose} isOpen={isOpen} />
    </Box>
  );
};

export default CompanyAccounts;
