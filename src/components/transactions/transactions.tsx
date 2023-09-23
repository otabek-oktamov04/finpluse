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
  Select,
  useDisclosure,
} from "@chakra-ui/react";
import { CiSearch } from "react-icons/ci";
import { FaTableColumns } from "react-icons/fa6";
import { BiFilter } from "react-icons/bi";
import { Table } from "antd";
import Filter from "./filter/filter";

const columns = [
  {
    title: "ДАТА",
    dataIndex: "name",
    key: "name",
  },
  {
    title: "СУММА",
    dataIndex: "age",
    key: "age",
  },
  {
    title: "СЧЁТ / ОСТАТОК",
    dataIndex: "address",
    key: "address",
  },
  {
    title: "КАТЕГОРИЯ",
    dataIndex: "address",
    key: "address",
  },
  {
    title: "КОНТРАГЕНТ",
    dataIndex: "address",
    key: "address",
  },
  {
    title: "ПРОЕКТ",
    dataIndex: "address",
    key: "address",
  },
  {
    title: "КОМЕНТАРИЙ",
    dataIndex: "address",
    key: "address",
  },
];

export const Transactions = () => {
  const {
    isOpen: isFilterOpen,
    onClose: onFilterClose,
    onOpen: onFilterOpen,
  } = useDisclosure();
  return (
    <Box>
      <Flex
        borderBottomWidth="1px"
        paddingBottom="18px"
        justifyContent="space-between"
        alignItems="center"
      >
        <Text className="head-text">Транзакции</Text>
        <ButtonGroup gap="4">
          <Button background="#DBEAFE" height="44px" color="#2563EB">
            Новый перевод
          </Button>
          <Button background="#DBEAFE" height="44px" color="#2563EB">
            Новый Расход
          </Button>
          <Button
            background="#2563EB"
            height="44px"
            color="white"
            colorScheme="primary"
          >
            Новый Доход
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
            placeholder="Поиск по вссем параметрам"
          />
        </InputGroup>
        <Flex gap="4">
          <Select height="44px" minW="200px" background="#F8FAFC">
            <option>Все счета</option>
          </Select>
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
            onClick={onFilterOpen}
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
      <Filter isOpen={isFilterOpen} onClose={onFilterClose} />
    </Box>
  );
};

export default Transactions;
