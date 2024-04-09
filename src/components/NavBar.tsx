import { Box, HStack, Image, Text } from "@chakra-ui/react";
import logo from "../assets/number-8-logo-white.svg";

import ColorModeSwitch from "./ColorModeSwitch";

const NavBar = () => {
  return (
    <HStack justifyContent="space-between" padding="25px">
      <Text>Fronted Test Project from Matheus Figueiredo</Text>
      <ColorModeSwitch />
    </HStack>
  );
};

export default NavBar;
