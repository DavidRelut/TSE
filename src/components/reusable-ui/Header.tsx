import styled from "styled-components";
import { theme } from "../../theme/themeSystem";

type HeaderProps = Readonly<{
  children: React.ReactNode;
}>;

export default function Header({ children }: HeaderProps) {
  return <HeaderStyled>{children}</HeaderStyled>;
}

const HeaderStyled = styled.div`
  height: 70px;
  background: ${theme.colors.background_dark};
  padding: 0 16px;
`;