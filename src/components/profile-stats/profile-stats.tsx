import {
  Box,
  Flex,
  ListItem,
  Tab,
  TabList,
  TabPanel,
  TabPanels,
  Tabs,
  Text,
  UnorderedList,
} from "@chakra-ui/react";
import { FiChevronDown } from "react-icons/fi";

export const ProfileStats = () => {
  return (
    <Box background="white" borderLeftWidth="1px">
      <Tabs width="300px" zIndex="99" paddingTop="20px">
        <TabList
          display="flex"
          alignItems="center"
          background="#F1F5F9"
          borderRadius="8px"
          padding="6px"
          height="44px"
          border="none"
          width="280px"
          marginX="auto"
        >
          <Tab
            _selected={{
              background: "white",
              boxShadow: "0px 0px 5px 1px #6B729440",
              color: "#1E293B",
            }}
            _focus={{
              outline: "none",
            }}
            color="#475569"
            border="none"
            background="transparent"
            height="32px"
            width="50%"
          >
            Баланс
          </Tab>
          <Tab
            color="#475569"
            _selected={{
              background: "white",
              boxShadow: "0px 0px 5px 1px #6B729440",
              color: "#1E293B",
            }}
            _focus={{
              outline: "none",
            }}
            border="none"
            background="transparent"
            height="32px"
            width="50%"
          >
            Остаток
          </Tab>
        </TabList>

        <TabPanels>
          <TabPanel>
            <Text marginBottom="20px" fontWeight="600" fontSize="24px">
              2 626 363 985 УЗС
            </Text>
            <Flex
              paddingBottom="24px"
              justifyContent="space-between"
              fontWeight="600"
              borderBottomWidth="1px"
            >
              <Text fontSize="16px">Мои счета</Text>
              <Text cursor="pointer" color="#2563EB">
                Изменить
              </Text>
            </Flex>
            <UnorderedList
              fontSize="14px"
              listStyleType="none"
              padding="0"
              margin="0"
              paddingBottom="30px"
              borderBottomWidth="1px"
              marginBottom="30px"
            >
              <ListItem
                borderBottomWidth="1px"
                padding="10px 0px"
                display="flex"
                justifyContent="space-between"
                color="#475569"
                fontWeight="500"
              >
                <Text color="black">Узс Ислом</Text>
                693 369 423
              </ListItem>
              <ListItem
                borderBottomWidth="1px"
                padding="10px 0px"
                display="flex"
                justifyContent="space-between"
                color="#475569"
                fontWeight="500"
              >
                <Text color="black">Узс Суппер ма...</Text>
                93 239 439
              </ListItem>
              <ListItem
                borderBottomWidth="1px"
                padding="10px 0px"
                display="flex"
                justifyContent="space-between"
                color="#475569"
                fontWeight="500"
              >
                <Text color="black">Узс Карта</Text>
                369 300
              </ListItem>
              <ListItem
                borderBottomWidth="1px"
                padding="10px 0px"
                display="flex"
                justifyContent="space-between"
                color="#475569"
                fontWeight="500"
              >
                <Text color="black">Усд Карта</Text>6 800 300
              </ListItem>
              <ListItem
                borderBottomWidth="1px"
                padding="10px 0px"
                display="flex"
                justifyContent="space-between"
                color="#475569"
                fontWeight="500"
              >
                <Text color="black">Алфа Банк</Text>
                45 000 000
              </ListItem>
              <ListItem
                borderBottomWidth="1px"
                padding="10px 0px"
                display="flex"
                justifyContent="space-between"
                color="#475569"
                fontWeight="500"
              >
                <Text color="black">Аброр ака</Text>0
              </ListItem>
              <ListItem
                borderBottomWidth="1px"
                padding="10px 0px"
                display="flex"
                justifyContent="space-between"
                color="#475569"
                fontWeight="500"
              >
                <Text color="black">Усд Виза карта</Text>36 980 000
              </ListItem>
            </UnorderedList>

            <Flex
              paddingBottom="20px"
              justifyContent="space-between"
              fontWeight="600"
            >
              <Text fontSize="16px">Будущий баланс</Text>
              <Text
                cursor="pointer"
                fontSize="16px"
                fontWeight="medium"
                color="#334155"
                display="flex"
                alignItems="center"
              >
                Всё время
                <Box marginLeft="auto" display={{ base: "none", md: "flex" }}>
                  <FiChevronDown />
                </Box>
              </Text>
            </Flex>
            <Flex flexDirection="column" fontWeight="medium" width="full">
              <Flex
                marginBottom="11px"
                color="#16A34A"
                width="full"
                justifyContent="space-between"
              >
                Будущий доход <Text>693 369 423</Text>
              </Flex>
              <Flex
                borderBottomWidth="1px"
                paddingBottom="11px"
                color="#1E293B"
                width="full"
                justifyContent="space-between"
                fontSize="14px"
              >
                УЗС Ислом <Text>693 369 423</Text>
              </Flex>

              <Flex
                marginBottom="11px"
                marginTop="10px"
                color="#E11D48  "
                width="full"
                justifyContent="space-between"
              >
                Будущий расход <Text>693 369 423</Text>
              </Flex>
              <Flex
                borderBottomWidth="1px"
                paddingBottom="11px"
                color="#1E293B"
                width="full"
                justifyContent="space-between"
                fontSize="14px"
              >
                УЗС Ислом <Text>693 369 423</Text>
              </Flex>

              <Flex
                marginBottom="11px"
                marginTop="10px"
                color="#2563EB  "
                width="full"
                justifyContent="space-between"
              >
                Всего на счетах <Text>3 160 360 00</Text>
              </Flex>
              <Flex
                color="#475569"
                width="full"
                justifyContent="space-between"
                fontSize="14px"
              >
                С учетом будущих платежей
              </Flex>
            </Flex>
          </TabPanel>
          <TabPanel>
            <p>two!</p>
          </TabPanel>
        </TabPanels>
      </Tabs>
    </Box>
  );
};

export default ProfileStats;
