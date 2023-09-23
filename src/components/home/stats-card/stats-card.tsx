import { Badge, Box, Flex, IconButton, Text } from "@chakra-ui/react";
import { FiMoreVertical } from "react-icons/fi";

interface IProps {
  data: {
    title: string;
    price: string;
    percentage: string;
    description: string;
    type: string;
  };
}

export const StatsCard = ({ data }: IProps) => {
  return (
    <Box
      padding="15px"
      paddingTop="10px"
      borderRadius="8px"
      maxW="400px"
      minW="380px"
      background={data.type === "Potential consumption" ? "#FFF1F2" : "#EFF6FF"}
    >
      <Flex
        fontSize="16px"
        fontWeight="500"
        justifyContent="space-between"
        alignItems="center"
        marginBottom="26px"
      >
        {data.title}
        <IconButton
          aria-label="more "
          fontSize="20px"
          background="transparent"
          icon={<FiMoreVertical />}
        />
      </Flex>
      <Flex alignItems="center" gap="2">
        <Text fontSize="30px" fontWeight="600" margin="0" padding="0">
          {data.price}
        </Text>
        <Badge padding="2px" colorScheme="green">
          {data.percentage}
        </Badge>
      </Flex>
      <Text>{data.description}</Text>
    </Box>
  );
};
export default StatsCard;
