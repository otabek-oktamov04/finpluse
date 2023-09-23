"use client";

import {
  IconButton,
  Avatar,
  Box,
  CloseButton,
  Flex,
  HStack,
  VStack,
  Icon,
  useColorModeValue,
  Text,
  BoxProps,
  FlexProps,
  Menu,
  MenuButton,
  MenuDivider,
  MenuItem,
  MenuList,
  Image,
} from "@chakra-ui/react";
import { FiMenu, FiChevronDown } from "react-icons/fi";

import { PiSquaresFourLight, PiUsersThree } from "react-icons/pi";
import { AiOutlineTransaction } from "react-icons/ai";
import { FaLandmarkFlag } from "react-icons/fa6";
import { CiWallet } from "react-icons/ci";
import { RiBankLine } from "react-icons/ri";
import { BiStats } from "react-icons/bi";
import { IconType } from "react-icons";
import { NavLink, useNavigate } from "react-router-dom";

interface LinkItemProps {
  name: string;
  icon: IconType;
  url: string;
  isActive: boolean;
}

interface NavItemProps extends FlexProps {
  icon: IconType;
  url: string;
  children: React.ReactNode;
}

interface MobileProps extends FlexProps {
  onOpen: () => void;
}

interface SidebarProps extends BoxProps {
  onClose: () => void;
}

const LinkItems: Array<LinkItemProps> = [
  {
    name: "Главная страница",
    icon: PiSquaresFourLight,
    url: "/home",
    isActive: false,
  },
  {
    name: "Транзакции",
    icon: AiOutlineTransaction,
    url: "/transactions",
    isActive: false,
  },
  {
    name: "Контрагенты",
    icon: PiUsersThree,
    url: "/counterparts",
    isActive: false,
  },
  { name: "Проекты", icon: FaLandmarkFlag, url: "/projects", isActive: false },
  {
    name: "Счета компании",
    icon: CiWallet,
    url: "/company-accounts",
    isActive: false,
  },
  { name: "Банки", icon: RiBankLine, url: "/banks", isActive: false },
];

const LinkReportItems: Array<LinkItemProps> = [
  {
    name: "Движения средств",
    icon: PiSquaresFourLight,
    url: "",
    isActive: false,
  },
  { name: "Прибыли и убытки", icon: BiStats, url: "", isActive: false },
];

export const SidebarContent = ({ onClose, ...rest }: SidebarProps) => {
  return (
    <Box
      transition="3s ease"
      bg={useColorModeValue("white", "gray.900")}
      borderRight="1px"
      borderRightColor={useColorModeValue("gray.200", "gray.700")}
      w={{ base: "full", md: 60 }}
      pos="fixed"
      h="full"
      {...rest}
      minW="300px"
    >
      <Flex
        h="70px"
        borderBottom="1px"
        borderBottomColor="#E2E8F0"
        alignItems="center"
        mx="8"
        justifyContent="space-between"
      >
        <Image height="24px" width="107px" src="/public/logo.svg" />
        {/* <IconButton
          aria-label="close"
          icon={<Image src="/public/close.svg" />}
        /> */}
        <CloseButton display={{ base: "flex", md: "none" }} onClick={onClose} />
      </Flex>

      <Flex mx="8" py="5px" borderBottom="1px" borderBottomColor="#E2E8F0">
        <Menu>
          <MenuButton
            width="100%"
            py={2}
            transition="all 0.3s"
            border="none"
            _focus={{ boxShadow: "none", border: "none" }}
            _hover={{
              border: "none",
            }}
          >
            <HStack>
              <Avatar
                background="#F1F5F9"
                width="40px"
                height="40px"
                name="Oshigaki Kisame"
                src="https://bit.ly/broken-link"
              />
              <VStack
                display={{ base: "none", md: "flex" }}
                alignItems="flex-start"
                spacing="1px"
                ml="2"
              >
                <Text fontSize="sm">Otabek O'ktamov</Text>
                <Text fontSize="xs" color="gray.600">
                  +998 93 690 05 77
                </Text>
              </VStack>
              <Box marginLeft="auto" display={{ base: "none", md: "flex" }}>
                <FiChevronDown />
              </Box>
            </HStack>
          </MenuButton>
          {/* <MenuList
            bg={useColorModeValue("white", "gray.900")}
            borderColor={useColorModeValue("gray.200", "gray.700")}
          >
            <MenuItem>Profile</MenuItem>
            <MenuItem>Settings</MenuItem>
            <MenuItem>Billing</MenuItem>
            <MenuDivider />
            <MenuItem>Sign out</MenuItem>
          </MenuList> */}
        </Menu>
      </Flex>

      <Text
        paddingLeft="28px"
        marginTop="30px"
        fontSize="12px"
        fontWeight="medium"
        color="#475569"
        letterSpacing="9%"
        fontFamily="
        Montserrat"
        marginBottom="4px"
      >
        ГЛАВНЫЙ МЕНЮ
      </Text>
      {LinkItems.map((link) => (
        <NavItem
          width="260px"
          height="44px"
          url={link.url}
          marginBottom="5px"
          padding="10px 12px"
          borderRadius="6px"
          key={link.name}
          icon={link.icon}
          color="#334155"
          _hover={{
            background: "#EFF6FF",
            color: "#2563EB",
          }}
          _activeLink={{
            background: "red",
          }}
        >
          {link.name}
        </NavItem>
      ))}

      <Text
        paddingLeft="28px"
        marginTop="30px"
        fontSize="12px"
        fontWeight="medium"
        color="#475569"
        letterSpacing="9%"
        fontFamily="
        Montserrat"
        marginBottom="4px"
      >
        ОТЧЕТЫ
      </Text>
      {LinkReportItems.map((link) => (
        <NavItem
          width="260px"
          height="44px"
          url={link.url}
          marginBottom="5px"
          padding="10px 12px"
          borderRadius="6px"
          key={link.name}
          icon={link.icon}
          color="#334155"
          _hover={{
            background: "#EFF6FF",
            color: "#2563EB",
          }}
        >
          {link.name}
        </NavItem>
      ))}
    </Box>
  );
};

const NavItem = ({ icon, url, children, ...rest }: NavItemProps) => {
  return (
    <NavLink to={url}>
      <Box style={{ textDecoration: "none" }}>
        <Flex
          align="center"
          alignItems="center"
          p="4"
          mx="4"
          borderRadius="lg"
          role="group"
          cursor="pointer"
          _hover={{
            bg: "cyan.400",
            color: "white",
          }}
          {...rest}
        >
          {icon && (
            <Icon
              mr="10px"
              fontSize="22"
              _groupHover={{
                color: "#2563EB",
              }}
              as={icon}
            />
          )}
          {children}
        </Flex>
      </Box>
    </NavLink>
  );
};

export const MobileNav = ({ onOpen, ...rest }: MobileProps) => {
  const navigate = useNavigate();
  return (
    <Flex
      ml={{ base: 0, md: 60 }}
      px={{ base: 4, md: 4 }}
      minH="70px"
      alignItems="center"
      bg={useColorModeValue("white", "gray.900")}
      borderBottomWidth="1px"
      position="fixed"
      width="100vw"
      background="white"
      zIndex={99}
      borderBottomColor={useColorModeValue("gray.200", "gray.700")}
      justifyContent={{ base: "space-between", md: "flex-end" }}
      {...rest}
    >
      <IconButton
        display={{ base: "flex", md: "none" }}
        onClick={onOpen}
        variant="outline"
        aria-label="open menu"
        icon={<FiMenu />}
      />

      <Text
        display={{ base: "flex", md: "none" }}
        fontSize="2xl"
        fontFamily="monospace"
        fontWeight="bold"
      >
        Logo
      </Text>

      <HStack paddingRight="270px">
        <IconButton
          size="lg"
          variant="ghost"
          aria-label="open menu"
          icon={<Image src="/public/notification.png" />}
        />
        <IconButton
          size="lg"
          variant="ghost"
          aria-label="open menu"
          icon={<Image src="/public/notifed.png" />}
        />
        <Flex alignItems={"center"}>
          <Menu>
            <MenuButton
              py={2}
              transition="all 0.3s"
              _focus={{ boxShadow: "none" }}
            >
              <HStack>
                <Avatar size={"sm"} src="/public/avatar.png" />
                <VStack
                  display={{ base: "none", md: "flex" }}
                  alignItems="flex-start"
                  spacing="1px"
                  ml="2"
                >
                  <Text fontSize="sm">Otabek O'ktamov</Text>
                  <Text fontSize="xs" color="gray.600">
                    +998 93 690 05 77
                  </Text>
                </VStack>
                <Box display={{ base: "none", md: "flex" }}>
                  <FiChevronDown />
                </Box>
              </HStack>
            </MenuButton>
            <MenuList
              bg={useColorModeValue("white", "gray.900")}
              borderColor={useColorModeValue("gray.200", "gray.700")}
            >
              <MenuItem>Profile</MenuItem>
              <MenuItem>Settings</MenuItem>
              <MenuItem>Billing</MenuItem>
              <MenuDivider />
              <MenuItem
                onClick={() => {
                  localStorage.removeItem("isLogin");
                  navigate("/auth");
                }}
              >
                Sign out
              </MenuItem>
            </MenuList>
          </Menu>
        </Flex>
      </HStack>
    </Flex>
  );
};
