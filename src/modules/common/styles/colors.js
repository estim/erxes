import { rgba } from './color';

// Core colors
const colorPrimary = '#673FBD';
const colorPrimaryDark = '#5629B6';
const colorSecondary = '#6569DF';
const colorCoreRed = '#EA475D';
const colorCoreTeal = '#63D2D6';
const colorCoreYellow = '#F7CE53';
const colorCoreGreen = '#3CCC38';
const colorCoreBlue = '#3B85F4';
const colorCoreBlack = '#393C40';
const colorCoreGray = '#888';
const colorCoreLightGray = '#AAAEB3';

const colorLightGray = '#AAA';
const colorLightBlue = '#F8FBFF';
const colorCoreDarkGray = '#373737';
const colorShadowGray = '#DDD';

const colorBlack = '#000';
const colorWhite = '#FFF';

// backgrounds
const bgMain = '#EDF1F5';
const bgDark = rgba('#000', 0.95);
const bgLight = '#FAFAFA';
const bgActive = '#F0F0F0';
const bgUnread = '#F7F8FC';
const bgInternal = '#FFFCCC';

// Link colors
const linkPrimary = '#1785FC';
const linkPrimaryHover = rgba(linkPrimary, 0.7);

// Border colors
const borderPrimary = '#EEE';
const borderDarker = '#DEE4E7';

// Text colors
const textPrimary = '#444';
const textSecondary = rgba(textPrimary, 0.8);
const textOverlay = '#FFF';

// Shadow colors
const shadowPrimary = rgba(colorShadowGray, 0.7);
const darkShadow = rgba(colorBlack, 0.2);

// Social colors
const socialFacebook = '#3A5999';
const socialFacebookMessenger = '#1472FB';
const socialTwitter = '#1DA1F2';

export default {
  colorPrimary,
  colorPrimaryDark,
  colorSecondary,
  colorCoreRed,
  colorCoreTeal,
  colorCoreYellow,
  colorCoreBlue,
  colorCoreGreen,
  colorCoreBlack,
  colorCoreGray,
  colorCoreLightGray,
  colorWhite,
  colorBlack,
  colorShadowGray,
  colorLightGray,
  colorLightBlue,
  colorCoreDarkGray,

  bgMain,
  bgDark,
  bgLight,
  bgActive,
  bgUnread,
  bgInternal,

  linkPrimary,
  linkPrimaryHover,

  borderPrimary,
  borderDarker,

  textPrimary,
  textSecondary,
  textOverlay,

  shadowPrimary,
  darkShadow,

  socialFacebook,
  socialFacebookMessenger,
  socialTwitter
};
