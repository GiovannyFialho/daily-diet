import logo from "@/assets/logo.png";

import { Avatar } from "@/components/avatar";

import { Container, Logo } from "@/components/header/styles";

export function Header() {
  return (
    <Container>
      <Logo source={logo} />

      <Avatar uri="https://github.com/GiovannyFialho.png" />
    </Container>
  );
}
