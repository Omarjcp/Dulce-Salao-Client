import { UserOutlined } from "@ant-design/icons";
import { useHistory } from "react-router-dom";

import "../index.scss";

export const ButtonLoginOrLogout = () => {
  const history = useHistory();

  return (
    <>
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
    </>
  );
};
