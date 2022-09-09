import { ChevronRightIcon } from "@chakra-ui/icons";
import { Box, Flex, Heading, Image, Text } from "@chakra-ui/react";
import React from "react";

const DroneEvent = () => {
  const droneEventId = "10171e14-005d-4a9a-a542-447e1ef83d0b";

  return (
    <Box
      w={["100%", "80%", "48%", "40%"]}
      p={3}
      bg="#7A5980"
      position="absolute"
      right="0"
      top="calc(70vh - 100px)"
      as="a"
      href={`/events?id=${droneEventId}`}
      zIndex={1000}
      borderRadius="5px 0 0 5px"
      display="flex"
      // h={["100px", "150px", "200px", "150px"]}
      // h="150px"
      gridGap={3}
      opacity="0.95"
    >
      <Box display="flex" alignItems={"center"} flex="0.3">
        <Image h="120px" src={"https://github.com/dark-shad/etamax_imagaes/blob/main/WhatsApp%20Image%202022-09-09%20at%202.38.33%20PM.jpeg?raw=true"} />
      </Box>
      <Flex flex="0.7" flexDir="column" gridGap={2}>
        <Heading fontSize={{ base: "xl", lg: "3xl" }}>FUN FAIR!!</Heading>
        <Text fontSize={["sm", "md", "lg", "lg"]}>
          A fun fair full of mini games. It's a pay and play event.
          <br></br>
          Entry fee : 20 per game
          <br></br>
          Timing: 12:00PM to 04:00PM 
          <br></br>        
          Winners will be given exciting gifts and prizes.

        </Text>
      </Flex>
      <Flex alignSelf={"center"}>
        <ChevronRightIcon fontSize={"50px"} />
      </Flex>
    </Box>
  );
};

export default DroneEvent;
