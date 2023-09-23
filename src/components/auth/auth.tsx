import {
  Box,
  Button,
  FormControl,
  FormLabel,
  Input,
  Text,
  Image,
} from "@chakra-ui/react";
import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

export const Auth = () => {
  const [loginData, setLoginData] = useState({
    userName: "",
    password: "",
  });
  const [error, setError] = useState(false);
  const navigate = useNavigate();

  useEffect(() => {
    const isLogin = localStorage.getItem("isLogin");
    if (isLogin) {
      navigate("/home");
    }
  }, [navigate]);

  const login = () => {
    if (loginData.userName === "111" && loginData.password === "111") {
      localStorage.setItem("isLogin", "true");
      navigate("/home");
      setError(false);
    } else {
      setError(true);
      setLoginData({
        userName: "",
        password: "",
      });
    }
  };

  return (
    <Box width="100vw" height="100vh" padding="20px">
      <Box
        background="#f9f9f9"
        padding="20px"
        borderRadius="10px"
        maxW="600px"
        margin="auto"
        marginTop="200px"
      >
        <Image
          src="/public/logo.svg"
          width="200px"
          margin="auto"
          marginBottom="30px"
        />
        <Text fontSize="30px" fontWeight="bold">
          Добро пожаловать
        </Text>

        {error ? (
          <Text textColor="red" marginBottom="24px">
            Имя пользователя или пароль неверен
          </Text>
        ) : (
          <Text marginBottom="24px">
            Войдите в finiso и будьте всегда на вершине расчетов
          </Text>
        )}
        <form>
          <FormControl marginBottom="20px">
            <FormLabel>Имя пользователя</FormLabel>
            <Input
              height="52px"
              placeholder="Имя пользователя"
              background="white !important"
              onChange={(evt) => {
                setLoginData({
                  userName: evt.currentTarget.value,
                  password: loginData.password,
                });
              }}
            />
          </FormControl>
          <FormControl marginBottom="20px">
            <FormLabel>Пароль</FormLabel>
            <Input
              height="52px"
              type="password"
              onChange={(evt) => {
                setLoginData({
                  userName: loginData.userName,
                  password: evt.currentTarget.value,
                });
              }}
              placeholder="Пароль"
              background="white !important"
            />
          </FormControl>
          <Button
            isDisabled={!loginData.password || !loginData.userName}
            height="52px"
            colorScheme="blue"
            width="100%"
            display="flex"
            onClick={login}
          >
            Авторизоваться
          </Button>
        </form>
      </Box>
    </Box>
  );
};

export default Auth;
