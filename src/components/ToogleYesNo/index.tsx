import React, { useState } from "react";
import { Text } from "react-native";

import {
  ButtonNo,
  ButtonYes,
  Container,
  StatusFalse,
  StatusTrue,
} from "@/components/ToogleYesNo/styles";

interface ToggleButtonProps {
  inDiet?: boolean;
  onSelectionChange: (selection: "SIM" | "NÃO") => void;
}

export function ToggleYesNoButton({
  inDiet,
  onSelectionChange,
}: ToggleButtonProps) {
  const [selectedOption, setSelectedOption] = useState<"SIM" | "NÃO">(
    inDiet ? "SIM" : "NÃO"
  );

  const handleSelection = (option: "SIM" | "NÃO") => {
    setSelectedOption(option);
    onSelectionChange(option);
  };

  return (
    <Container>
      <ButtonYes
        isSelected={selectedOption === "SIM"}
        onPress={() => handleSelection("SIM")}
      >
        <StatusTrue />
        <Text>Sim</Text>
      </ButtonYes>

      <ButtonNo
        isSelected={selectedOption === "NÃO"}
        onPress={() => handleSelection("NÃO")}
      >
        <StatusFalse />
        <Text>Não</Text>
      </ButtonNo>
    </Container>
  );
}
