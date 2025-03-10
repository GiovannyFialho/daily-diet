import { Header } from "@/components/header";
import { Percent } from "@/components/percent";

import { Container } from "@/screens/Home/styles";

export function Home() {
  return (
    <Container>
      <Header />

      <Percent quantity={90.86} />
    </Container>
  );
}
