import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";

import { getProducts } from "../../redux/actions";

import { BurgerMenu } from "./burgerMenu";
import { TabsNavigatorMenu } from "./TabsNav";
import { ButtonLoginOrLogout } from "./buttonLoginLogout";

import { Box, Image } from "@chakra-ui/react";

import "./index.scss";
import logo from "./Logo.png";

export const NavBar = () => {
  const dispatch = useDispatch();
  let { token } = useSelector((state) => state);

  useEffect(() => {
    dispatch(getProducts());
  }, [token]);

  return (
    <Box className="containerImage">
      <ButtonLoginOrLogout />
      <BurgerMenu />
      <Image className="logo" src={logo} alt="logo dulce y salado" />
      <TabsNavigatorMenu />
    </Box>
  );
};
