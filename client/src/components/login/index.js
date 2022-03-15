import { useEffect } from "react";
import { useHistory } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";

import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";

import swal from "sweetalert";

import { signIn } from "../../redux/actions";

import { schema } from "./validation";
import "./login.scss";

export const Login = () => {
  const dispatch = useDispatch();
  let { token, msgLogin } = useSelector((state) => state);
  const history = useHistory();

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(schema),
  });

  const onSubmit = (data) => {
    dispatch(signIn(data));
    reset();
  };

  useEffect(() => {
    if (msgLogin) {
      swal(msgLogin, {
        buttons: false,
        timer: 2000,
      });
      history.push("/");
      history.push(0);
    }
    if (localStorage.getItem("token")) history.replace("/");
  }, [msgLogin, token]);

  return (
    <>
      <div className="contenedor_login">
        <form className="form_login" onSubmit={handleSubmit(onSubmit)}>
          <div style={{ display: "flex", flexDirection: "column" }}>
            <input
              className="input_login"
              name="admin"
              placeholder="Usuario"
              {...register("admin")}
            />
            <span style={{ color: "red", fontSize: "0.7rem" }}>
              {errors.admin && errors.admin.message}
            </span>
          </div>

          <div
            style={{
              display: "flex",
              flexDirection: "column",
              margin: ".5rem 0 .5rem 0",
            }}
          >
            <input
              type="password"
              name="password"
              className="input_login"
              placeholder="Contraseña"
              {...register("password")}
            />
            <span style={{ color: "red", fontSize: "0.7rem" }}>
              {errors.password && errors.password.message}
            </span>
          </div>

          <div>
            <button className="boton_login" type="submit">
              Iniciar sesion
            </button>
          </div>
        </form>
      </div>
    </>
  );
};
