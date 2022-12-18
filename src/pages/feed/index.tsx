import { Link } from "react-router-dom";
import bannerImage from "../../assets/banner.png";
import { Button } from "../../components/Button";
import { Card } from "../../components/Card";
import { UserInfo } from "../../components/UserInfo";
import { Header } from "../../components/Header";

import { Container, Title, TitleHighlight, Column } from "./style";

const Feed = () => {
  return (
    <>
      <Header autenticado={true} />
      <Container>
        <Column flex={3}>
          <Title>Feed</Title>
          <Card />
          <Card />
          <Card />
          <Card />
          <Card />
          <Card />
          <Card />
        </Column>
        <Column flex={1}>
          <TitleHighlight># RANKING 5 TOP DA SEMANA</TitleHighlight>
          <UserInfo
            percentual={35}
            name="Kervin ES"
            image="https://avatars.githubusercontent.com/u/57775586?s=40&v=4"
          />
          <UserInfo
            percentual={35}
            name="Kervin ES"
            image="https://avatars.githubusercontent.com/u/57775586?s=40&v=4"
          />
          <UserInfo
            percentual={50}
            name="Kervin ES"
            image="https://avatars.githubusercontent.com/u/57775586?s=40&v=4"
          />
          <UserInfo
            percentual={93}
            name="Kervin ES"
            image="https://avatars.githubusercontent.com/u/57775586?s=40&v=4"
          />
          <UserInfo
            percentual={12}
            name="Kervin ES"
            image="https://avatars.githubusercontent.com/u/57775586?s=40&v=4"
          />
          <UserInfo
            percentual={74}
            name="Kervin ES"
            image="https://avatars.githubusercontent.com/u/57775586?s=40&v=4"
          />
        </Column>
      </Container>
    </>
  );
};

export { Feed };
