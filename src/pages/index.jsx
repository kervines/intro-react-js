//Aula de Hooks

import { useState, useCallback, useMemo } from "react";
// useMemo = referencia em variaveis (const, var, let)
//useCallBack = referencia de função

const Teste = () => {
  const [age, setAge] = useState(27);
  const [name, setName] = useState("Kervin");

  const handleChangeAge = useCallback(() => {
    const newAge = 10 * age;
    console.log("age atual", age, newAge);
    setAge((prev) => (prev === 18 ? 27 : 18));
  }, []);

  const handleChangeName = useCallback(() => {
    setName((prev) => (prev === "Kervin" ? "Carlos" : "Kervin"));
  }, []);

  return (
    <div>
      <p>Idade: {age}</p>
      <br />
      <p>Nome: {name}</p>
      <br />
      <button onClick={handleChangeAge}>Alterar idade</button>
      <button onClick={handleChangeName}>Alterar nome</button>
    </div>
  );
};

export { Teste };
