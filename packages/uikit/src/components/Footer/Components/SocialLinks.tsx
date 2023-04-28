import React from "react";
import styled from "styled-components";
import { FlexProps } from "../../Box";
import Flex from "../../Box/Flex";
import Dropdown from "../../Dropdown/Dropdown";
import Link from "../../Link/Link";
import { socials } from "../config";

// export const StyledFooter = styled(Flex)`
//   background: ${darkColors.backgroundAlt};
//   background-image: url('/images/footer_bg.png');
//   background-size: contain;
// `;

const StyledLink = styled(Link)`
  width: 40px;
  height: 40px;
  border-radius: 20px;
  background: linear-gradient(#bd26fb 0%, #4a46f7 100%);
`;

const SocialLinks: React.FC<React.PropsWithChildren<FlexProps>> = ({ ...props }) => (
  <Flex {...props} data-theme="dark">
    {socials.map((social, index) => {
      const iconProps = {
        width: "20px",
        color: "white",
        style: { cursor: "pointer", margin: "auto" },
      };
      const Icon = social.icon;
      const mr = index < socials.length - 1 ? "24px" : 0;
      // if (social.items) {
      //   return (
      //     <Dropdown key={social.label} position="top" target={<Icon {...iconProps} mr={mr} />}>
      //       {social.items.map((item) => (
      //         <Link external key={item.label} href={item.href} aria-label={item.label} color="textSubtle">
      //           {item.label}
      //         </Link>
      //       ))}
      //     </Dropdown>
      //   );
      // }
      return (
        <StyledLink external key={social.label} href={social.href} aria-label={social.label} mr={mr}>
          <Icon {...iconProps} />
        </StyledLink>
      );
    })}
  </Flex>
);

export default React.memo(SocialLinks, () => true);
