import React from "react";
import { View, StyleSheet } from "react-native";
import Text from "../../../components/text/text.component";
import { FontAwesome } from "@expo/vector-icons";
import {
  TransactionContainer,
  EmptyTransactionElement,
} from "./transactions.styles";
import { colors } from "../../../infrastructure/theme/colors";
import Spacer from "../../../components/spacer/spacer.component";

const EmptyTransaction = () => {
  return (
    <TransactionContainer>
      <EmptyTransactionElement>
        <FontAwesome
          name="file-text"
          size={48}
          color={colors.brand.secondary}
        />
      </EmptyTransactionElement>
      <Spacer size="small" />
      <Text variant="hint">No recent transactions</Text>
    </TransactionContainer>
  );
};

const styles = StyleSheet.create({});

export default EmptyTransaction;
