import React from "react";
import { Container, NameText, Progess, UserPicture } from "./style";
import { IUserInfo } from "./types";

const UserInfo = ({ name, image, percentual }: IUserInfo) => {
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
