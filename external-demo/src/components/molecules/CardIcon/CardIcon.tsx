import React from "react";
import { ICON } from "../../../constants/Icon";
import { TEXT } from "../../../constants/Text";
import Icon from "../../atoms/Icon/Icon";
import { Stack } from "@mui/material";
import Text from "../../atoms/Text/Text";

const CardIcon: React.FC = () => {
  return (
    <Stack direction="row" justifyContent="space-between">
      <Stack direction="row" spacing={3} alignItems="center">
        <Icon src={ICON.BIKE} alt="Bike" height="24px" width="24px" />
        <Icon src={ICON.BUS} alt="Bus" height="18px" width="18px" />
        <Icon src={ICON.CAR} alt="Car" height="17px" width="20px" />
        <Icon src={ICON.TRAIN} alt="Train" height="18px" width="15px" />
      </Stack>
      <Text variant="h3">{TEXT.TIME}</Text>
    </Stack>
  );
};

export default CardIcon;
export {};
