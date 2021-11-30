import {
  Box,
  Tab,
  Tabs,
  TabIndicator,
  Container,
  TabPanel,
  TabPanels,
  TabList,
  Center,
  Spacer,
} from "@chakra-ui/react";
import LoginForm from "../components/LoginForm";
import LoginOtherColleges from "../components/LoginOtherColleges";
import Head from "next/head";
const login = () => {
  return (
    <>
      <Head>
        <title>ETAMAX-22 | Login</title>
      </Head>
      <Box alignItems="center" borderRadius="lg">
        <Center>
          <Tabs isFitted variant="enclosed">
            <TabList>
              <Tab fontSize={"xl"}>FCRIT Students</Tab>
              <Tab fontSize={"xl"}>Other Colleges</Tab>
            </TabList>
            <TabPanels>
              <TabPanel>
                <LoginForm />
              </TabPanel>
              <TabPanel>
                <LoginOtherColleges />
              </TabPanel>
            </TabPanels>
          </Tabs>
        </Center>
      </Box>
    </>
  );
};

export default login;
