import styled from "styled-components/native";

const defaultStyles = (theme) => `
font-family: ${theme.fonts.body}
font-weight:${theme.fontWeights.regular}
color: ${theme.colors.text.primary}
line-height:22px
flex-wrap:wrap
margin-top:0px;
margin-bottom:0px;
`;

const body = (theme) => `
 font-size: ${theme.fontSizes.body}
 `;

const walkthrough = (theme) => `
font-family: ${theme.fonts.medium}
 font-size: ${theme.fontSizes.h4}
 color: ${theme.colors.brand.primary}
 padding: 0px 10px
 text-align: center
 `;
const walkthroughCaption = (theme) => `
font-family: ${theme.fonts.body}
 font-size: ${theme.fontSizes.body}
 font-weight:${theme.fontWeights.regular}
 color: ${theme.colors.ui.secondary}
 padding: 0px 10px
 text-align: center
 `;

const hint = (theme) => `
 font-size: ${theme.fontSizes.body}
 color: ${theme.colors.ui.secondary}

 `;
const small = (theme) => `
 font-size: ${theme.fontSizes.caption}
 color: ${theme.colors.ui.secondary}

 `;
const steps = (theme) => `
 font-size: ${theme.fontSizes.body}
 color: ${theme.colors.text.secondary}
 
 `;

const salutation = (theme) => `
 font-weight:${theme.fontWeights.bold}
 color: ${theme.colors.brand.primary}
 font-family:${theme.fonts.heading}
 font-size: ${theme.fontSizes.title}
 `;
const salutationcaption = (theme) => `
 font-weight:${theme.fontWeights.bold}
 color: ${theme.colors.text.primary}
 font-family:${theme.fonts.heading}
 font-size: ${theme.fontSizes.title}
 `;

const success = (theme) => `
 font-family:${theme.fonts.medium}
 font-size: ${theme.fontSizes.h4}
 font-weight:${theme.fontWeights.medium}
 color: ${theme.colors.ui.success}
 `;

const title = (theme) => `
font-family:${theme.fonts.heading}
 font-size: ${theme.fontSizes.h5}
   font-weight:${theme.fontWeights.bold}
  color:${theme.colors.ui.primary}
 `;
const header = (theme) => `
 font-size: ${theme.fontSizes.title}
color: ${theme.colors.ui.quaternary}
font-weight:${theme.fontWeights.bold}
`;

const button = (theme, inverted) => `
color: ${inverted ? theme.colors.brand.primary : theme.colors.ui.quaternary}
font-size: ${theme.fontSizes.body}

font-weight:${theme.fontWeights.regular}
`;

// const caption = (theme) => `
// font-family:${theme.fonts.heading}
//  font-size: ${theme.fontSizes.caption}
//    font-weight:${theme.fontWeights.semiBold}
//    color: ${theme.colors.text.secondary}
//  `;

const label = (theme) => `
font-family:${theme.fonts.medium}
 font-size: ${theme.fontSizes.body}
 font-weight:${theme.fontWeights.medium}
 `;

const variants = {
  body,
  hint,
  title,
  steps,
  //  caption,
  button,
  small,
  salutation,
  salutationcaption,
  success,
  label,
  header,
  walkthrough,
  walkthroughCaption,
};

export default Text = styled.Text`
  ${({ theme }) => defaultStyles(theme)}
  ${({ theme, variant, inverted }) => variants[variant](theme, inverted)}
`;

Text.defaultProps = {
  variant: "body",
};
