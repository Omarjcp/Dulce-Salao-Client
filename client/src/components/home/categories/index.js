import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useHistory } from "react-router-dom";

import {
  getCategories,
  getFilling,
  getFlavor,
  getProducts,
  getProductsForCategoryId,
  getProductsForFillingId,
  getProductsForFlavorId,
  deleteCategory,
  deleteFlavor,
  deleteFilling,
} from "../../../redux/actions";

import { Box, Link, Heading, Divider, CloseButton } from "@chakra-ui/react";

import "./index.scss";
import { LinkToCreateProduct } from "../../products/linkToCreateProducts";
import swal from "sweetalert";

export const Categories = () => {
  const dispatch = useDispatch();
  const history = useHistory();

  let { categories, flavors, filling } = useSelector((state) => state);

  const onClick = (e, categ) => {
    if (categ === "categor") {
      dispatch(getProductsForCategoryId(e.target.id));
    }
    if (categ === "flavor") {
      dispatch(getProductsForFlavorId(e.target.id));
    }
    if (categ === "filling") {
      dispatch(getProductsForFillingId(e.target.id));
    }
  };

  const onDeleteCategory = (e, idCategory, idFlavor, idFilling) => {
    e.preventDefault();
    if (idCategory) {
      dispatch(deleteCategory(idCategory));

      setTimeout(() => {
        swal("Categoria eliminada correctamente", {
          buttons: false,
          icon: "success",
        });
      }, 500);

      setTimeout(() => history.go(0), 3000);
    } else if (idFlavor) {
      dispatch(deleteFlavor(idFlavor));

      setTimeout(() => {
        swal("Sabor eliminado correctamente", {
          buttons: false,
          icon: "success",
        });
      }, 500);

      setTimeout(() => history.go(0), 3000);
    } else if (idFilling) {
      dispatch(deleteFilling(idFilling));

      setTimeout(() => {
        swal("Relleno eliminado correctamente", {
          buttons: false,
          icon: "success",
        });
      }, 500);

      setTimeout(() => history.go(0), 3000);
    }
  };

  useEffect(() => {
    dispatch(getCategories());
    dispatch(getFlavor());
    dispatch(getFilling());
  }, []);

  return (
    <>
      <Box className="containerCategories">
        <Box marginBottom="1rem" display="flex" flexDirection="column">
          <Heading as="h2" size="md" marginBottom="0.5" textColor="pink.200">
            Categorias
          </Heading>
          {categories.map((category, i) => {
            return (
              <Box key={i}>
                <Link
                  onClick={(e) => onClick(e, "categor")}
                  key={category.id}
                  id={category.id}
                >
                  {category.nombre}
                  {localStorage.getItem("token") ? (
                    <CloseButton
                      display="inline"
                      color="red"
                      fontSize=".5rem"
                      height="1rem"
                      width="1rem"
                      onClick={(e) =>
                        onDeleteCategory(e, category.id, false, false)
                      }
                    />
                  ) : (
                    <></>
                  )}
                </Link>
              </Box>
            );
          })}
        </Box>
        <Box marginBottom="1rem" display="flex" flexDirection="column">
          <Heading as="h2" size="md" marginBottom="0.5" textColor="pink.200">
            Sabores
          </Heading>
          {flavors.map((flavor, i) => {
            return (
              <Link
                onClick={(e) => onClick(e, "flavor")}
                key={i}
                id={flavor.id}
              >
                {flavor.nombre}
                {localStorage.getItem("token") ? (
                  <CloseButton
                    display="inline"
                    color="red"
                    fontSize=".5rem"
                    height="1rem"
                    width="1rem"
                    onClick={(e) =>
                      onDeleteCategory(e, false, flavor.id, false)
                    }
                  />
                ) : (
                  <></>
                )}
              </Link>
            );
          })}
        </Box>
        <Box display="flex" flexDirection="column">
          <Heading as="h2" size="md" marginBottom="0.5" textColor="pink.200">
            Rellenos
          </Heading>
          {filling.map((fill, i) => {
            return (
              <Link onClick={(e) => onClick(e, "filling")} key={i} id={fill.id}>
                {fill.nombre}
                {localStorage.getItem("token") ? (
                  <CloseButton
                    display="inline"
                    color="red"
                    fontSize=".5rem"
                    height="1rem"
                    width="1rem"
                    onClick={(e) => onDeleteCategory(e, false, false, fill.id)}
                  />
                ) : (
                  <></>
                )}
              </Link>
            );
          })}
        </Box>
        <Divider
          margin="1rem 0 1rem 0"
          orientation="horizontal"
          color="gray.400"
        />
        <Link onClick={() => dispatch(getProducts())}>
          Ver todos los productos
        </Link>{" "}
        <br />
        <LinkToCreateProduct />
        <br />
        {localStorage.getItem("token") && (
          <>
            <Link onClick={() => history.push("/nuevascategorias/catg")}>
              Crear categorias
            </Link>
            <br />
            <Link onClick={() => history.push("/nuevascategorias/sbrs")}>
              Crear sabores
            </Link>
            <br />
            <Link onClick={() => history.push("/nuevascategorias/rllns")}>
              Crear rellenos
            </Link>
          </>
        )}
      </Box>
    </>
  );
};
