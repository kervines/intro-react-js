import { Link } from "react-router-dom";

import { Button } from "../../components/Button";
import { Header } from "../../components/Header";
const Home = () => {
  return (
    <>
      <Header />
      <Button title="teste 1" />
      <Button variant="secondary" title="teste 2" />
      <Link to="/login">Fazer login</Link>
    </>
  );
};

export { Home };
