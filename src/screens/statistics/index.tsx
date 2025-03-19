import { ContentStatistics } from "@/components/content-statistics";
import { HeaderStatistics } from "@/components/header-statistics";

import { Container } from "@/screens/statistics/styles";

export function Statistics() {
  const quantityPercent = 90.86;

  return (
    <Container quantity={quantityPercent}>
      <HeaderStatistics quantity={quantityPercent} />

      <ContentStatistics />
    </Container>
  );
}
