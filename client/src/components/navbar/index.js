import { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useHistory } from "react-router-dom";

import {
  getProducts,
  getProductsForCategoriesId,
  getProductsForName,
} from "../../redux/actions";

import {
  useDisclosure,
  Box,
  Image,
  Tabs,
  Tab,
  TabList,
  Stack,
  FormLabel,
  Button,
  Select,
  Drawer,
  DrawerOverlay,
  DrawerContent,
  DrawerHeader,
  DrawerBody,
  DrawerFooter,
  Input,
  Link,
} from "@chakra-ui/react";
import { PhoneIcon, InfoIcon, HamburgerIcon } from "@chakra-ui/icons";
import { HomeOutlined, UserOutlined } from "@ant-design/icons";

import "./index.scss";
import logo from "./Logo.png";
import { LinkToCreateCategories } from "../products/linkToCreateCategories";

export const NavBar = () => {
  const dispatch = useDispatch();
  const history = useHistory();
  let { categories, flavors, filling, token } = useSelector((state) => state);

  const { isOpen, onOpen, onClose } = useDisclosure();
  const [input, setInput] = useState("");
  const [selects, setSelects] = useState({
    category: "category",
    flavor: "flavor",
    filling: "filling",
  });

  const onSubmit = (e) => {
    e.preventDefault();
    if (input) {
      dispatch(getProductsForName(input));
      setInput("");
      onClose();
    } else {
      console.log(selects);
      dispatch(
        getProductsForCategoriesId(
          "categoryId",
          selects.category,
          "rellenoId",
          selects.filling,
          "saborId",
          selects.flavor
        )
      );
      setSelects({
        category: "category",
        flavor: "flavor",
        filling: "filling",
      });
      onClose();
    }
  };

  const onChange = (e) => {
    setInput(e.target.value);
  };

  const onChangeSelects = (event, prop) => {
    setSelects({
      ...selects,
      [prop]: event.target.value,
    });
  };

  useEffect(() => {
    dispatch(getProducts());
  }, [token]);

  return (
    <Box className="containerImage">
      {!localStorage.getItem("token") ? (
        <UserOutlined
          className="iconLogin"
          w={10}
          h={10}
          onClick={() => history.push("/login")}
        />
      ) : (
        <button
          className="iconLogin"
          style={{ color: "white" }}
          onClick={() => {
            localStorage.clear();
            history.push("/");
          }}
        >
          cerrar sesion
        </button>
      )}
      <HamburgerIcon
        className="hamburgerIcon hola"
        w={8}
        h={8}
        color="white"
        onClick={onOpen}
      />
      <Drawer isOpen={isOpen} placement="left" onClose={onClose}>
        <DrawerOverlay />
        <form onSubmit={onSubmit}>
          <DrawerContent>
            <DrawerHeader borderBottomWidth="1px">
              <HamburgerIcon w={8} h={8} color="pink.500" onClick={onClose} />
            </DrawerHeader>
            <DrawerBody>
              <Stack spacing="24px">
                <Box>
                  <FormLabel htmlFor="categoryForNameDrawer">
                    Buscar producto
                  </FormLabel>
                  <Input
                    // ref={firstField}
                    id="categoryForNameDrawer"
                    placeholder="Buscar por nombre de producto"
                    value={input}
                    onChange={onChange}
                  />
                </Box>

                <Box>
                  <FormLabel htmlFor="categories">
                    Selecciona categoria
                  </FormLabel>
                  <Select
                    className="select categories"
                    id="categories"
                    defaultValue="categorias"
                    onChange={(e) => onChangeSelects(e, "category")}
                  >
                    <option value="category">Categorias</option>
                    {categories.map((category) => {
                      return (
                        <option key={category.id} value={category.id}>
                          {category.nombre}
                        </option>
                      );
                    })}
                  </Select>
                </Box>

                <Box>
                  <FormLabel htmlFor="sabores">Selecciona sabor</FormLabel>
                  <Select
                    className="select"
                    id="sabores"
                    defaultValue="sabores"
                    onChange={(e) => onChangeSelects(e, "flavor")}
                  >
                    <option value="sabores">Sabores</option>
                    {flavors.map((flavor) => {
                      return (
                        <option key={flavor.id} value={flavor.id}>
                          {flavor.nombre}
                        </option>
                      );
                    })}
                  </Select>
                </Box>

                <Box>
                  <FormLabel htmlFor="rellenos">Selecciona relleno</FormLabel>
                  <Select
                    className="select"
                    id="rellenos"
                    defaultValue="rellenos"
                    onChange={(e) => onChangeSelects(e, "filling")}
                  >
                    <option value="rellenos">Rellenos</option>
                    {filling.map((fill) => {
                      return (
                        <option key={fill.id} value={fill.id}>
                          {fill.nombre}
                        </option>
                      );
                    })}
                  </Select>
                </Box>
              </Stack>
            </DrawerBody>
            <Link
              className="linkSeeAll"
              onClick={() => {
                dispatch(getProducts());
                history.push("/");
                onClose();
              }}
            >
              Ver todos los productos
            </Link>
            {localStorage.getItem("token") && (
              <>
                <Link
                  className="linkSeeAll"
                  onClick={() => {
                    history.push("/nuevoproducto");
                    onClose();
                  }}
                >
                  Crear producto
                </Link>
                <Link
                  className="linkSeeAll"
                  onClick={() => {
                    history.push("/nuevascategorias/catg");
                    onClose();
                  }}
                >
                  Crear categorias
                </Link>
                <Link
                  className="linkSeeAll"
                  onClick={() => {
                    history.push("/nuevascategorias/sbrs");
                    onClose();
                  }}
                >
                  Crear sabores
                </Link>
                <Link
                  className="linkSeeAll"
                  onClick={() => {
                    history.push("/nuevascategorias/rllns");
                    onClose();
                  }}
                >
                  Crear rellenos
                </Link>
              </>
            )}
            <DrawerFooter borderTopWidth="1px">
              <Button variant="outline" mr={3} onClick={onClose}>
                Cancelar
              </Button>
              <Button colorScheme="pink" type="submit">
                Buscar
              </Button>
            </DrawerFooter>
          </DrawerContent>
        </form>
      </Drawer>
      <Image className="logo" src={logo} alt="logo dulce y salado" />
      <Tabs
        colorScheme="whiteAlpha"
        align="center"
        size="md"
        variant="soft-rounded"
      >
        <TabList className="containerTabs">
          <Tab
            className="tabMenu"
            onClick={() => history.push("/") && dispatch(getProducts())}
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
    </Box>
  );
};
