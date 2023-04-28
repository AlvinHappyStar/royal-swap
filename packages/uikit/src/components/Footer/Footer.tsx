import { vars } from "@pancakeswap/ui/css/vars.css";
import React from "react";
import { Box, Flex } from "../Box";
import { Link } from "../Link";
import { Text } from "../Text";
import {
  StyledFooter,
  StyledIconMobileContainer,
  StyledList,
  StyledListItem,
  StyledSocialLinks,
  StyledText,
  StyledToolsContainer,
} from "./styles";

import { FooterProps } from "./types";

const MenuItem: React.FC<React.PropsWithChildren<FooterProps>> = ({
  items,
  isDark,
  toggleTheme,
  currentLang,
  langs,
  setLang,
  cakePriceUsd,
  buyCakeLabel,
  ...props
}) => {
  return (
    <StyledFooter data-theme="dark" p={["0px 16px", null, "56px 40px 32px 40px"]} {...props} justifyContent="center">
      <Flex flexDirection="column" width={["100%", null, "1200px;"]}>
        <StyledToolsContainer
          data-theme="dark"
          order={[1, null, 3]}
          flexDirection={["column", null, "row"]}
          justifyContent="space-between"
        >
          <Flex order={[2, null, 1]} alignItems="center">
            <Flex mr="20px">
              <Box>
                <Text color="white">@2022 Elysium Royale. All Right reserved.</Text>
              </Box>
              <StyledList>
                <StyledListItem key="policy">
                  <Link
                    data-theme="dark"
                    href="https://github.com/pancakeswap"
                    target="_blank"
                    rel="noreferrer noopener"
                    color="white"
                    bold={false}
                  >
                    Privacy Policy
                  </Link>
                </StyledListItem>
                <StyledListItem key="splitter">
                  <StyledText>|</StyledText>
                </StyledListItem>
                <StyledListItem key="contact-us">
                  <Link
                    data-theme="dark"
                    href="https://github.com/pancakeswap"
                    target="_blank"
                    rel="noreferrer noopener"
                    color="white"
                    bold={false}
                  >
                    Contact Us
                  </Link>
                </StyledListItem>
              </StyledList>
            </Flex>
          </Flex>
          <Flex order={[1, null, 2]} mb={["24px", null, "0"]} justifyContent="space-between" alignItems="center">
            <StyledSocialLinks order={[2]} mb={["24px", null, "0"]} />
          </Flex>
        </StyledToolsContainer>
      </Flex>
    </StyledFooter>
  );
};

export default MenuItem;
