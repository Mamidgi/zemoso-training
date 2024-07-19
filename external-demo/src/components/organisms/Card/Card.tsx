import React from "react";
import CardText from "../../molecules/CardText/CardText";
import CardIcon from "../../molecules/CardIcon/CardIcon";
import { Stack, ThemeProvider, Paper } from "@mui/material";
import theme from "../../../Help/theme";
import ICON from "../../../constants/Icon";
import Icon from "../../atoms/Icon/Icon";

const Card: React.FC = () => {
  return (
    <ThemeProvider theme={theme}>
      <Paper>
        <Stack direction="row" spacing={3}>
          <Icon src={ICON.LOGO} alt="logo" height="45px" width="45px" />
          <Stack direction="column" spacing={3}>
            <CardText />
            <CardIcon />
          </Stack>
        </Stack>
      </Paper>
    </ThemeProvider>
  );
};

export default Card;
