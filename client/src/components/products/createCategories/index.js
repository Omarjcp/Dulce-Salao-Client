import { useEffect } from "react";
import { useHistory, useLocation } from "react-router-dom";
import { useDispatch } from "react-redux";

import { Form, Input, Button, message } from "antd";
import {
  createCategory,
  createFilling,
  createFlavor,
} from "../../../redux/actions";

export const CreateCategories = () => {
  const dispatch = useDispatch();
  const location = useLocation();
  const history = useHistory();

  const [form] = Form.useForm();

  const onFinish = (value) => {
    console.log(value);
    if (location.pathname === "/nuevascategorias/catg") {
      dispatch(createCategory(value));

      message.loading("Creando categoria", 1);

      setTimeout(() => {
        message.success("Categoria creada correctamente", 1);
      }, 1000);

      setTimeout(() => {
        history.go(0);
      }, 2000);
    } else if (location.pathname === "/nuevascategorias/rllns") {
      dispatch(createFilling(value));

      message.loading("Creando relleno", 1);

      setTimeout(() => {
        message.success("Relleno creado correctamente", 1);
      }, 1000);

      setTimeout(() => {
        history.go(0);
      }, 2000);
    } else {
      dispatch(createFlavor(value));

      message.loading("Creando Sabor", 1);
      setTimeout(() => {
        message.success("Sabor creado correctamente", 1);
      }, 1000);

      setTimeout(() => {
        history.go(0);
      }, 2000);
    }
  };

  return (
    <Form
      style={{
        display: "flex",
        alignItems: "center",
        flexDirection: "column",
      }}
      layout="vertical"
      form={form}
      onFinish={onFinish}
      autoComplete="off"
    >
      {location.pathname === "/nuevascategorias/catg" && (
        <Form.Item
          name="nombre"
          label="Nombre de categoria"
          rules={[
            {
              type: "string",
              min: 2,
            },
          ]}
        >
          <Input
            placeholder="Nombre de la categoria"
            style={{ width: "19rem" }}
          />
        </Form.Item>
      )}

      {location.pathname === "/nuevascategorias/sbrs" && (
        <Form.Item
          name="nombre"
          label="Nombre de sabor"
          rules={[
            {
              type: "string",
              min: 2,
            },
          ]}
        >
          <Input placeholder="Nombre de sabor" style={{ width: "19rem" }} />
        </Form.Item>
      )}

      {location.pathname === "/nuevascategorias/rllns" && (
        <Form.Item
          name="nombre"
          label="Nombre relleno"
          rules={[
            {
              type: "string",
              min: 2,
            },
          ]}
        >
          <Input placeholder="Nombre de relleno" style={{ width: "19rem" }} />
        </Form.Item>
      )}

      <Form.Item>
        <Button
          style={{
            width: "19rem",
          }}
          type="primary"
          htmlType="submit"
        >
          Submit
        </Button>
      </Form.Item>
    </Form>
  );
};
