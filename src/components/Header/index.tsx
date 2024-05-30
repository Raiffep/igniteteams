import { Container, Logo, BackButton, BackIcon } from "./styles";

import LogoImg from "@assets/logo.png";

type THeaderProps = {
  showBackButton?: boolean;
};

export const Header = ({ showBackButton = false }: THeaderProps) => {
  return (
    <Container>
      {showBackButton && (
        <BackButton>
          <BackIcon />
        </BackButton>
      )}
      <Logo source={LogoImg} />
    </Container>
  );
};
