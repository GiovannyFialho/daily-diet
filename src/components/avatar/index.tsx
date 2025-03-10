import { User } from "phosphor-react-native";

import { Container, Image } from "@/components/avatar/styles";

interface AvatarProps {
  uri?: string;
}

export function Avatar({ uri }: AvatarProps) {
  return (
    <Container>
      {uri ? <Image source={{ uri }} /> : <User size={35} />}
    </Container>
  );
}
