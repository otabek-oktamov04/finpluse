"use client";

import {
  Box,
  useColorModeValue,
  Drawer,
  DrawerContent,
  useDisclosure,
} from "@chakra-ui/react";
import { MobileNav, SidebarContent } from "./sidebar/sidebar";
import ProfileStats from "../profile-stats/profile-stats";
import PrivateRoutes from "../../routes/private-routes";
import { useNavigate } from "react-router-dom";
import { useEffect } from "react";

const MasterLayout = () => {
  const { isOpen, onOpen, onClose } = useDisclosure();
  const navigate = useNavigate();

  useEffect(() => {
    const isLogin = localStorage.getItem("isLogin");
    if (!isLogin) {
      navigate("/auth");
    }
  }, [navigate]);

  return (
    <Box width="98vw" bg={useColorModeValue("gray.100", "gray.900")}>
      <SidebarContent
        onClose={() => onClose}
        display={{ base: "none", md: "block" }}
      />
      <Drawer
        isOpen={isOpen}
        placement="left"
        onClose={onClose}
        returnFocusOnClose={false}
        onOverlayClick={onClose}
        size="full"
      >
        <DrawerContent>
          <SidebarContent onClose={onClose} />
        </DrawerContent>
      </Drawer>
      {/* mobilenav */}
      <MobileNav onOpen={onOpen} />
      <Box display="flex" ml={{ base: 0, md: 60 }}>
        <Box
          p="4"
          background="white"
          width="100%"
          paddingLeft="80px"
          paddingTop="85px"
        >
          <PrivateRoutes />
        </Box>
        <Box
          padding="20px"
          marginLeft="auto"
          maxW="310px"
          background="white"
          marginTop="50px"
          zIndex={0}
        >
          <ProfileStats />
        </Box>
      </Box>
    </Box>
  );
};

export default MasterLayout;
