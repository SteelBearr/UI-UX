import Button from "@/components/common/Button/Button";
import React from "react";
import { VscSymbolColor } from "react-icons/vsc";
import * as Style from "./index.styled";
import Link from "next/link";

type HeaderProps = {
  switchTheme: () => void;
};
const Header: React.FC<HeaderProps> = (props) => {
  return (
    <Style.Header id="header">
        <Style.Content>
            <Link href={`/`}><Style.Logo>Film gallery</Style.Logo></Link>
            <Link href={`/filmsCatalog/`}><Style.Nav>Catalog</Style.Nav></Link>
        </Style.Content>
    </Style.Header>
  );
};
export default Header;
