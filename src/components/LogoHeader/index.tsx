import perfilImg from "@/assets/illustrationperfil.png";
import logoImg from "@/assets/logo.png";

import {
  Container,
  Content,
  Logo,
  Perfil,
} from "@/components/LogoHeader/styles";

export function LogoHeader() {
  return (
    <Container>
      <Content>
        <Logo source={logoImg} />
        <Perfil source={perfilImg} />
      </Content>
    </Container>
  );
}
