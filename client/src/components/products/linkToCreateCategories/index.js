import { useHistory } from "react-router-dom";

import { Link } from "@chakra-ui/react";

import "../../home/categories/index.scss";

export const LinkToCreateCategories = () => {
  const history = useHistory();

  return (
    <>
      {localStorage.getItem("token") && (
        <Link onClick={() => history.push("/nuevascategorias")}>
          Crear categorias
        </Link>
      )}
    </>
  );
};
