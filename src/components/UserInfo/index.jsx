import React from "react";
import { Container, NameText, Progess, UserPicture } from "./style";
const UserInfo = ({ name, image, percentual }) => {
  return (
    <Container>
      <UserPicture src={image} />
      <div>
        <NameText>{name}</NameText>
        <Progess percentual={percentual} />
      </div>
    </Container>
  );
};

export { UserInfo };
