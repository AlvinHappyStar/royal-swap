import styled from "styled-components";
import { darkColors } from "../../theme/colors";
import { Box, Flex } from "../Box";
import SocialLinks from "./Components/SocialLinks";

export const StyledFooter = styled(Flex)`
  background: ${darkColors.background};
  background-image: url("/images/footer_bg.png");
  background-size: cover;
`;

export const StyledList = styled.ul`
  list-style: none;
  margin-bottom: 10px;

  ${({ theme }) => theme.mediaQueries.md} {
    margin-bottom: 0px;
  }
`;

export const StyledListItem = styled.li`
  font-size: 16px;
  margin-bottom: 8px;
  text-transform: capitalize;
  display: block;
  position: relative;
  float: left;
  text-align: center;
  margin-right: 2px;
  margin-left: 2px;
  padding-right: 2px;
  &:first-child {
    margin-left: 10px;
  }
`;

export const StyledIconMobileContainer = styled(Box)`
  margin-bottom: 24px;
`;

export const StyledToolsContainer = styled(Flex)`
  border-style: solid;
  padding: 24px 0;
  margin-bottom: 24px;

  ${({ theme }) => theme.mediaQueries.sm} {
    border-top-width: 0;
    border-bottom-width: 0;
    padding: 0 0;
    margin-bottom: 0;
  }
`;

export const StyledSocialLinks = styled(SocialLinks)`
  // border-bottom: 1px solid ${darkColors.cardBorder};
`;

export const StyledText = styled.span`
  display: none;
  ${({ theme }) => theme.mediaQueries.md} {
    color: ${darkColors.text};
    line-height: 1.5;
    display: block;
  }
`;
