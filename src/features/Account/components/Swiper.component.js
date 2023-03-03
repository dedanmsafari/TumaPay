import { SwiperContainerStyles } from "../screens/account.styles";
import Text from "../../../components/text/text.component";
import { Image } from "react-native";

const SwiperContainer = ({ source, title, caption }) => {
  return (
    <SwiperContainerStyles>
      <Image style={{ width: 330, height: 330 }} source={source} />
      <Spacer size="medium" />
      <Text variant="walkthrough">{title}</Text>
      <Spacer position="bottom" size="large" />
      <Text variant="walkthroughCaption">{caption}</Text>
    </SwiperContainerStyles>
  );
};

export default SwiperContainer;
