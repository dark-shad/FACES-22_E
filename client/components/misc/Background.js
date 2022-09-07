import { Box } from "@chakra-ui/react";
import { useEffect } from "react";

export default function Background({ pageName }) {
  // Current idea is to include parallax effect in the background and have it move with the scroll
  // Minified version of the events will be displayed later

  return (
    <>
      <Box bg="#fff2f6" h="300vh" w="100vw" position="fixed" zIndex="-5" />
      {pageName == "Home" && (
        <Box
          as="img"
          src={"https://user-images.githubusercontent.com/81225216/188874046-cf92268b-203f-4da5-a62a-62cec388a76a.jpg"}
          alt={"Background test"}
          position="fixed"
          zIndex="-2"
          objectFit="cover"
          backgroundPosition="center"
          backgroundSize="cover"
          h="100vh"
          w="100%"
          id="background-image"
        />
      )}
      {pageName == "Events" && (
        <Box
          as="img"
          src={"https://user-images.githubusercontent.com/81225216/188874046-cf92268b-203f-4da5-a62a-62cec388a76a.jpg"}
          alt={"Background test"}
          position="fixed"
          zIndex="-2"
          objectFit="cover"
          backgroundPosition="center"
          backgroundSize="cover"
          h="100vh"
          w="100%"
          id="background-image"
        />
      )}
      {pageName == "Login" && (
        <Box
          as="img"
          src={"https://user-images.githubusercontent.com/81225216/188874046-cf92268b-203f-4da5-a62a-62cec388a76a.jpg"}
          alt={"Background test"}
          position="fixed"
          zIndex="-2"
          objectFit="cover"
          backgroundPosition="center"
          backgroundSize="cover"
          h="100vh"
          w="100%"
          id="background-image"
        />
      )}
    </>
  );
}
