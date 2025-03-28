import { TouchableOpacityProps } from "react-native";

import {
  Container,
  Content,
  ForwardIcon,
  Text,
} from "@/components/DefaultHeader/styles";

type Props = TouchableOpacityProps & {
  title: string;
};

export function DefaultHeader({ title, ...rest }: Props) {
  return (
    <Container {...rest}>
      <Content>
        <ForwardIcon />
        <Text>{title}</Text>
      </Content>
    </Container>
  );
}
