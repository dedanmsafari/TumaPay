import React from "react";
import { View, StyleSheet, Image } from "react-native";
import {
  HeroContainer,
  TextBlock,
  ImageBlock,
  ContainedButton,
} from "./hero.styles";
import { Ionicons } from "@expo/vector-icons";
import { colors } from "../../../infrastructure/theme/colors";

const HeroBlock = () => {
  return (
    <HeroContainer>
      <TextBlock>
        <Text variant="salutation" style={{ color: colors.text.inverse }}>
          Connecting the World
        </Text>
        <Spacer size="medium" />
        <Text style={{ color: colors.text.inverse }}>
          A better way to move money globally. Cheap, Fast, Secure
        </Text>
        <Spacer size="medium" />
        <ContainedButton activeOpacity={0.7}>
          <Text variant="button" inverted>
            Send Money
          </Text>
          <Ionicons
            name="arrow-forward"
            size={20}
            color={colors.brand.primary}
          />
        </ContainedButton>
      </TextBlock>
      <ImageBlock>
        <Image
          style={{ height: 170, width: 120, marginRight: 20 }}
          source={require("../../../../assets/heroImage.png")}
        />
      </ImageBlock>
    </HeroContainer>
  );
};

const styles = StyleSheet.create({});

export default HeroBlock;