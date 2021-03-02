import { useAuth } from "../../contexts/auth";

export const Teste = () => {
  const user = useAuth();
  console.log("user", user);
  return <h2>oi</h2>;
};
