import React from "react";
import { AppBar, Toolbar, styled } from "@mui/material";
import MenuIcon from "@mui/icons-material/Menu";
const Styledheader = styled(AppBar)`
  background: #fff;
  height: 70px;
`;
const Menu = styled(MenuIcon)`
  color: #000;
`;
const Image = styled("img")({
  height: 55,
  margin: "auto",
  paddingRight: 70,
});
export default function Header() {
  const url =
    "https://assets.inshorts.com/website_assets/images/logo_inshorts.png";
  return (
    <Styledheader position="static">
      <Toolbar>
        <Menu />
        <Image src={url} alt="logo" />
      </Toolbar>
    </Styledheader>
  );
}
