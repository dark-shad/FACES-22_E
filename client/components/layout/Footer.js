import { Flex, Link, Text } from "@chakra-ui/react";

export default function Footer() {
  return (
    <Flex
      as="footer"
      bg="purple.100"
      w="100%"
      h={{ md: "7vh" }}
      py="20px"
      gridGap="2"
      align="center"
    >
      <Flex
        width="90%"
        mx="auto"
        flexDir={["column-reverse", "row", "row", "row"]}
        align="center"
      >
        <Text
          textAlign={["center", "unset", "unset", "unset"]}
          noOfLines={2}
          flex={2}
          color="purple.400"
          
        >
          <h1 className="footerLine">

         
          With &nbsp;<img src=".\heart.svg" width={'10px'} height={'10px'}></img>&nbsp; by&nbsp;
          <Link target="_blank" href="https://github.com/karishmarajput">
            Karishma
          </Link>
          ,&nbsp;
          <Link target="_blank" href="https://github.com/Pauloper1">
            Crescent
          </Link>
          ,&nbsp;
          <Link target="_blank" href="https://github.com/Aaryan246">
            Aaryan
          </Link>
          ,&nbsp;
          <Link target="_blank" href="https://github.com/dark-shad">
            Pratik
          </Link>
          ,&nbsp;
          <Link
            target="_blank"
            href="https://github.com/VinayakPatkar"
          >
            Vinayak
          </Link>&nbsp;
          &&nbsp;
          <Link target="_blank" href="https://github.com/joel122002">
            Joel
          </Link>
          </h1>
        </Text>
        <Text
          flex={1}
          as="a"
          href={"https://fcrit.ac.in"}
          color="purple.500"
          textAlign={["center", "end", "end", "end"]}
        >
          F.C.R.I.T
        </Text>
      </Flex>
    </Flex>
  );
}
