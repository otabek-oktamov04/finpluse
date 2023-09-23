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
} from "@chakra-ui/react";
import { CiSearch } from "react-icons/ci";
import { FaTableColumns } from "react-icons/fa6";
import { BiFilter } from "react-icons/bi";
import { Table } from "antd";

const columns = [
  {
    title: "ИМЯ КОНТРАГЕНТА",
    dataIndex: "name",
    key: "name",
  },
  {
    title: "ПОСЛЕДНЯЯ АКТИВНОСТЬ",
    dataIndex: "age",
    key: "age",
  },
  {
    title: "ТЕЛЕФОН НОМЕР",
    dataIndex: "address",
    key: "address",
  },
  {
    title: "ДОХОД",
    dataIndex: "address",
    key: "address",
  },
  {
    title: "РАСХОД",
    dataIndex: "address",
    key: "address",
  },
];

export const CounterParts = () => {
  return (
    <Box>
      <Flex
        borderBottomWidth="1px"
        paddingBottom="18px"
        justifyContent="space-between"
      >
        <Text className="head-text">Контрагенты</Text>
        <ButtonGroup gap="4">
          <Button
            background="#2563EB"
            height="44px"
            color="white"
            colorScheme="primary"
          >
            Добавить контрагент
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
    </Box>
  );
};

export default CounterParts;
