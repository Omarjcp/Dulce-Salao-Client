import { useDispatch } from "react-redux";
import { useHistory } from "react-router-dom";

import { getProducts } from "../../../redux/actions";

import { HomeOutlined } from "@ant-design/icons";
import { InfoIcon, PhoneIcon } from "@chakra-ui/icons";
import { Tab, TabList, Tabs } from "@chakra-ui/react";

import "../index.scss";

export const TabsNavigatorMenu = () => {
  const dispatch = useDispatch();
  const history = useHistory();
  return (
    <Tabs
      colorScheme="whiteAlpha"
      align="center"
      size="md"
      variant="soft-rounded"
    >
      <TabList className="containerTabs">
        <Tab
          className="tabMenu"
          onClick={() => (history.push("/"), dispatch(getProducts()))}
        >
          Tienda
        </Tab>
        <Tab
          className="tabMenu tabMid"
          onClick={() => history.push("/nosotros")}
        >
          Quienes somos
        </Tab>
        <Tab className="tabMenu" onClick={() => history.push("/contacto")}>
          Contacto
        </Tab>
      </TabList>
      <TabList className="containerTabsIcons">
        <Tab className="tabMenu" onClick={() => history.push("/")}>
          <HomeOutlined />
        </Tab>
        <Tab
          className="tabMenu tabMid"
          onClick={() => history.push("/nosotros")}
        >
          <InfoIcon />
        </Tab>
        <Tab className="tabMenu" onClick={() => history.push("/contacto")}>
          <PhoneIcon />
        </Tab>
      </TabList>
    </Tabs>
  );
};
