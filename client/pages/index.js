import { Box, Center, Heading, Flex, Text } from "@chakra-ui/react";
import { useEffect, useState } from "react";
// import Flower from "../components/misc/Flower";
import { randNum } from "../components/utils/utils";
import Layout from "../components/layout";
import Head from "next/head";
import Background from "../components/misc/Background";
import "@fontsource/birthstone-bounce";
import Sponsors from "../components/misc/Sponsors";
import FeaturedEvents from "../components/misc/FeaturedEvents";
import { API_BASE_URL } from "../config";
import DroneEvent from "../components/misc/DroneEvent";
import FooterOnTopOfFooter from "../components/misc/FooterOnTopOfFooter";

if (typeof window !== "undefined") {
  import("../components/utils/blossom");
}

export default function Home(props) {
  const [over, setOver] = useState(false);
  // deadline to be on 10th March 2022 IST
  let deadline = new Date("2022-03-10T18:30:00.000Z").getTime();
  let now = new Date().getTime();
  const [daysLeft, setDaysLeft] = useState(
    Math.floor((deadline - now) / (1000 * 60 * 60 * 24))
  );

  function tick() {
    now = new Date().getTime();
    let t = deadline - now;
    setDaysLeft(Math.floor(t / (1000 * 60 * 60 * 24)));
    if (t <= 0) {
      setOver(true);
    }
  }

  useEffect(() => {
    const timerId = setInterval(tick, 1000);
    return () => clearInterval(timerId);
  });

  useEffect(() => {
    // window.addEventListener("mousedown", function(e) {
    //   var amt = randNum(1, 3);
    //   for (var i = 0; i < amt; i++) {
    //     var top = randNum(e.clientY - 30, e.clientY + 30);
    //     var left = randNum(e.clientX - 30, e.clientX + 10);
    //     var flower = new Flower({
    //       top: top,
    //       left: left,
    //     });
    //   }
    // });

    // return () => {
    //   window.removeEventListener("mousedown", () => {
    //     console.log("removed");
    //   });
    // };
  },
   []);

  useEffect(() => {
    window.addEventListener("scroll", () => {
      const dist = window.scrollY;

      let ele = document.getElementById("background-image");
      if (ele) ele.style.transform = `translateY(${dist * 0.1}px)`;
    });
  }, []);

  return (
    <>
      <Head>
        <title>FACES-22</title>
        <link rel="shortcut icon" href="/images/favicon.ico" />
        <meta name="title" content="FACES-22" />
        <meta
          name="description"
          content="Annual sports and cultural festival organised at F.C.R.I.T"
        />
      </Head>
      <Background pageName={"Home"} />
      <Layout scrollYVar={450}>
        <Flex bg="transparent" h="100vh" maxW="100vw" flexDirection="column">
          <Center h="60vh" w="100%" flexDir={"column"}>
            <Box w="80%">
              <Heading color="purple.300" fontSize="6xl">
                FACES-22{" "}
                <Text fontSize="8xl" fontFamily="Birthstone Bounce">
                  Udaan
                </Text>
              </Heading>
            </Box>
            <img id="plane" src="https://raw.githubusercontent.com/dark-shad/etamax_imagaes/9729076a808d78373c64bd20bdc6554b3b3b6db2/2.svg"></img>
            
            

          </Center>
          <Center
            h={{
              base: "calc(30vh - 100px)",
              lg: "calc(30vh - 100px)",
            }}
            w="100%"
            mt={{ base: "240px", md: "0", lg: "0" }}
          >
            <Box w="80%">
              {/* {!over ? (
                <Text
                  color={"purple.400"}
                  fontWeight="bold"
                  fontSize={{ base: "3xl", lg: "4xl" }}
                >
                  Countdown to fun!
                </Text>
              ) : (
                ""
              )} */}
              {/* <Text
                color="purple.300"
                fontWeight={"500"}
                fontSize={{ base: "2xl", lg: "2xl" }}
              >
                {!over ? `${daysLeft} days left` : "On now!"}
              </Text> */}
              {/* <Text
                mt={3}
                color={"purple.400"}
                fontWeight={"800"}
                fontSize={"5xl"}
              >
                Registrations closed!
              </Text> */}
            </Box>
          </Center>
        </Flex>
        {/* <DroneEvent /> */}
        <FeaturedEvents events={props.events} />
        <Sponsors />
        {/* <FooterOnTopOfFooter /> */}
      </Layout>
    </>
  );
}

export async function getStaticProps(context) {
  try {
    const res = await fetch(`${API_BASE_URL}/e/featured/`).then((response) =>
      response.json()
    );
    return {
      props: {
        events: res.events,
      },
      revalidate: 10,
    };
  } catch (error) {
    console.log("Error", error);
    return {
      props: {},
    };
  }
}
