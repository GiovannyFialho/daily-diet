import { Container, Message } from "@/components/list-empty/styles";

interface ListEmptyProps {
  message: string;
}

export function ListEmpty({ message }: ListEmptyProps) {
  return (
    <Container>
      <Message>{message}</Message>
    </Container>
  );
}
