import React from "react";
import { FiThumbsUp } from "react-icons/fi";

import {
  CardContainer,
  Content,
  HasInfo,
  ImageBackground,
  PostInfo,
  UserInfo,
  UserPicture,
} from "./style";

const Card = () => {
  return (
    <CardContainer>
      <ImageBackground src="https://thumbs.dreamstime.com/b/c%C3%B3digo-fonte-de-programa%C3%A7%C3%A3o-computador-script-abstrato-background-html-desenvolvimento-uma-web-tela-ou-aplicativo-tecnologia-206610726.jpg" />
      <Content>
        <UserInfo>
          <UserPicture src="https://avatars.githubusercontent.com/u/57775586?s=40&v=4" />
          <div>
            <h4>Kervin Espirito Santo</h4>
            <p>Há 1 minuto</p>
          </div>
        </UserInfo>
        <PostInfo>
          <h4>Projeto para curso de HTML e CSS</h4>
          <p>
            Projeto feito o curso de html e css no bootcamp da dio do Global
            avanade... <strong>Saiba Mais</strong>
          </p>
        </PostInfo>
        <HasInfo>
          <h4>#HTML #CSS #Javascript</h4>
          <p>
            <FiThumbsUp /> 50
          </p>
        </HasInfo>
      </Content>
    </CardContainer>
  );
};

export { Card };
