import React from "react";
import { EmptyContainer } from "./emptyWallet.styles";
import Text from "../../../components/text/text.component";
import Spacer from "../../../components/spacer/spacer.component";
import { Ionicons } from "@expo/vector-icons";
import { colors } from "../../../infrastructure/theme/colors";
import { ContainedButton } from "./emptyWallet.styles";
const EmptyWallet = () => {
  return (
    <EmptyContainer>
      <Text
        variant="salutationcaption"
        style={{ color: colors.brand.secondary, fontWeight: 500 }}
      >
        Deposit Funds to your Wallet
      </Text>
      <Spacer size="large" />
      <Ionicons name="cash-outline" size={64} color={colors.brand.secondary} />
      <Spacer size="large" />
      <ContainedButton>
        <Text variant="button">Deposit Funds</Text>
      </ContainedButton>
    </EmptyContainer>
  );
};

export default EmptyWallet;
