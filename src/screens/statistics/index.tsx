import { HeaderStatistics } from "@/components/header-statistics";

import { Container, ContentStatistics } from "@/screens/statistics/styles";

export function Statistics() {
  return (
    <Container>
      <HeaderStatistics quantity={90.86} />

      <ContentStatistics></ContentStatistics>
    </Container>
  );
}
