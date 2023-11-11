import React from "react";
import { Typography, Stack, Button } from "@mui/material";
import BodyPartImage from "../../assets/icons/body-part.png";
import TargetImage from "../../assets/icons/target.png";
import equipmentImage from "../../assets/icons/equipment.png";
const Detail = ({ exerciseDetail }) => {
  const { bodyPart, gifUrl, name, target, equipment } = exerciseDetail;
  const extraDetail = [
    {
      icon: BodyPartImage,
      name: bodyPart,
    },
    {
      icon: TargetImage,
      name: target,
    },
    {
      icon: equipmentImage,
      name: equipment,
    },
  ];
  return (
    <Stack
      gap={"60px"}
      sx={{
        flexDirection: {
          lg: "row",
        },
        p: "20px",
        alignItems: "center",
      }}>
      <img src={gifUrl} alt={name} loading="lazy" className="detail-image" />
      <Stack
        sx={{
          gap: {
            lg: "35px",
            xs: "20px",
          },
        }}>
        <Typography textTransform={"capitalize"} variant="h3">
          {name}
        </Typography>
        <Typography variant="h6">
          Exercises keep you strong . {name} is one of the best Exercise for
          your {target}.it will help improve your mood and gain energy
        </Typography>
        {extraDetail.map((item) => (
          <Stack
            key={item}
            direction={"row"}
            gap={"24px"}
            alignItems={"center"}>
            <Button
              sx={{
                background: "#4aa9df",
                borderRadius: "50%",
                height: "100px",
                width: "100px",
              }}>
              <img src={item.icon} alt={item.icon} width={50} height={50} />
            </Button>
            <Typography textTransform={"capitalize"} variant="h6">
              {item.name}
            </Typography>
          </Stack>
        ))}
      </Stack>
    </Stack>
  );
};

export default Detail;
