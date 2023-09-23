import { Box, Flex, Text } from "@chakra-ui/react";
import { DatePicker, Segmented, Space } from "antd";
import { SegmentedValue } from "antd/es/segmented";
import StatsCard from "./stats-card/stats-card";

const stats = [
  {
    title: "Доходы",
    price: "270,360,260 УЗС",
    percentage: "12%",
    description: "Больше 24,3МЛН чем прошлый год",
    type: "Income",
  },
  {
    title: "Расходы",
    price: "96,369,365 УЗС",
    percentage: "12%",
    description: "Больше 29,7МЛН чем прошлый год",
    type: "Outcome",
  },
  {
    title: "Потенциальный расход",
    price: "23,363,984 УЗС",
    percentage: "6%",
    description: "Больше 6,3МЛН чем прошлый год",
    type: "Potential consumption",
  },
];

export const Home = () => {
  const handleClick = (value: SegmentedValue) => {
    console.log(value);
  };
  return (
    <Box>
      <Flex
        height="70px"
        padding="4"
        borderRadius="7px"
        border="1px"
        borderColor="#E2E8F0"
        justifyContent="space-between"
        marginBottom="20px"
      >
        <Text fontSize="24px" fontWeight="500">
          Добрый день, Фаррух
        </Text>
        <Flex gap="4">
          <Space direction="vertical">
            <Segmented
              height="100px"
              onChange={handleClick}
              size="large"
              options={["За год", "За месяц", "За неделю", "За день"]}
            />
          </Space>
          <DatePicker
            size="large"
            style={{
              background: "#f8fafc",
              height: "40px",
            }}
          />
        </Flex>
      </Flex>

      <Flex width="full" gap="20px">
        {stats.map((item) => (
          <StatsCard data={item} />
        ))}
      </Flex>
    </Box>
  );
};

export default Home;
