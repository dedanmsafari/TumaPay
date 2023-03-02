import React from "react";
import Swiper from "react-native-swiper";
import Spacer from "../../../components/spacer/spacer.component";
import Text from "../../../components/text/text.component";
import { LogInButton, SignUpButton, ButtonsContainer } from "./account.styles";
import { colors } from "../../../infrastructure/theme/colors";
import SwiperContainer from "../components/Swiper.component";

const WalkthroughData = [
  {
    id: 1,
    source: require("../../../../assets/community.png"),
    title: "A better way to move money globally",
    caption:
      "Whether you are paying a friend or a family member, we ensure that the funds are instantly delivered to them.",
  },
  {
    id: 2,
    source: require("../../../../assets/BusinessDeal.png"),
    title: "Secure, Cost Effective and Fast",
    caption:
      "Our top notch security features are similar to bank level security features to ensure safety of your funds.",
  },
  {
    id: 3,
    source: require("../../../../assets/Finance.png"),
    title: "Wide Coverage",
    caption:
      "We are present in 11 countries, with more countries being opened soon.",
  },
];

const AccountScreen = () => {
  return (
    <>
      <Swiper
        loop
        autoplay
        autoplayTimeout={6.5}
        activeDotColor={colors.brand.primary}
        removeClippedSubviews={false}
      >
        {WalkthroughData.map((w) => (
          <React.Fragment key={w.id}>
            <SwiperContainer
              source={w.source}
              title={w.title}
              caption={w.caption}
            />
          </React.Fragment>
        ))}
      </Swiper>
      <Spacer position="top" size="medium" />
      <ButtonsContainer>
        <SignUpButton activeOpacity={0.5}>
          <Text variant="button">Sign Up</Text>
        </SignUpButton>
        <Spacer size="medium" />
        <LogInButton activeOpacity={0.5}>
          <Text variant="button" inverted>
            Log In
          </Text>
        </LogInButton>
      </ButtonsContainer>
    </>
  );
};

export default AccountScreen;
