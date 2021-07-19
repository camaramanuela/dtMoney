import logoImg from "../../assets/logo.svg";

import { Container, Content } from "./styles";

interface HeaderProps {
  onModalOpenNewTransaction: () => void;
}

export function Header({onModalOpenNewTransaction}: HeaderProps) {
  return (
    <Container>
      <Content>
        <img src={logoImg} alt="dt money" />
        <button type="button" onClick={onModalOpenNewTransaction}>
          Nova transação
        </button>
      </Content>
    </Container>
  )
}