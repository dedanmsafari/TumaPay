import React from "react";
import { TransactionHolder, HorizonBar } from "./transactions.styles";
import Spacer from "../../../components/spacer/spacer.component";
const TransactionElement = () => {
  return (
    <>
      <Spacer />
      <TransactionHolder>
        <HorizonBar>
          <Text>Amount: Ksh 10,000</Text>
          <Text>Recepient:John Doe</Text>
        </HorizonBar>
        <HorizonBar>
          <Text>12/02/23 - 11:25am</Text>
          <Text>ID:5x56d5cf7567fgc</Text>
        </HorizonBar>
      </TransactionHolder>
    </>
  );
};

export default TransactionElement;
