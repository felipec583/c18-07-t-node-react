import { Button, Form, Input } from "antd";
import useUser from "../hooks/useUser";
export default function FormLogin() {
  const { handleLogin } = useUser();

  return (
    <Form
      name="basic"
      layout="vertical"
      initialValues={{
        remember: true,
      }}
      onFinish={handleLogin}
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
        className="w-full my-3"
      >
        <Input placeholder="Ingrese su usuario" />
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
        className="w-full my-3"
      >
        <Input.Password placeholder="Ingrese su contraseña" />
      </Form.Item>
      <Form.Item className="w-full mt-5">
        <Button
          type="primary"
          htmlType="submit"
          className="w-full h-10 py-3 bg-green-400 rounded-[20px] shadow justify-center items-center gap-2.5 inline-flex"
        >
          Ingresar
        </Button>
      </Form.Item>
    </Form>
  );
}
