import { Header } from "@/components/header";
import { Meals } from "@/components/meals";
import { Percent } from "@/components/percent";

import { Container } from "@/screens/home/styles";

export function Home() {
  return (
    <Container>
      <Header />

      <Percent quantity={90.86} />

      <Meals />
    </Container>
  );
}
