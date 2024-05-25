import { Button, Form, Input } from "antd";
import { useRutes } from "../hooks/useRutes";
import axios from "axios";
export default function FormRegister() {
  const { goToLogin } = useRutes();
  const onFinish = async (values) => {
    try {
      const response = await axios.post(
        "http://localhost:3000/api/auth/register",
        values
      );
      if (response) {
        console.log(response.data);
        goToLogin();
      }
    } catch (error) {
      console.log(error);
    }
  };
  const onFinishFailed = (errorInfo) => {
    console.log("Failed:", errorInfo);
  };
  return (
    <Form
      name="basic"
      layout="vertical"
      initialValues={{
        remember: true,
      }}
      onFinish={onFinish}
      onFinishFailed={onFinishFailed}
      autoComplete="off"
      className="w-full flex flex-col items-center justify-center"
    >
      <Form.Item
        label="Nombre de usuario"
        name="username"
        rules={[
          {
            required: true,
            message: "Please input your username!",
          },
        ]}
        className="w-full my-1"
      >
        <Input placeholder="Ingrese su nombre de usuario" />
      </Form.Item>
      <Form.Item
        label="Email"
        name="email"
        rules={[
          {
            required: true,
            message: "Please input your email!",
          },
        ]}
        className="w-full my-1"
      >
        <Input placeholder="Ingrese su mail" />
      </Form.Item>

      <Form.Item
        label="Contraseña"
        name="password"
        rules={[
          {
            required: true,
            message: "Please input your password!",
          },
        ]}
        className="w-full my-1"
      >
        <Input.Password placeholder="Ingrese su contraseña" />
      </Form.Item>
      <Form.Item className="w-full mt-5">
        <Button
          type="primary"
          htmlType="submit"
          className="w-full h-10 py-3 bg-green-400 rounded-[20px] shadow justify-center items-center gap-2.5 inline-flex"
        >
          Crear cuenta
        </Button>
      </Form.Item>
    </Form>
  );
}
