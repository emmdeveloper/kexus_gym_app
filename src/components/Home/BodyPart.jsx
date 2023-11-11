import { Stack, Typography } from "@mui/material";
import Icon from "../../assets/icons/gym.png";
const BodyPart = ({ item, setBodyPart, bodyPart }) => {
  return (
    <Stack
      type="button"
      alignItems={"center"}
      justifyContent={"center"}
      className="bodyPart-card"
      onClick={() => {
        setBodyPart(item);
        window.scrollTo({ top: 1000, left: 100, behavior: "smooth" });
      }}
      sx={{
        borderTop: bodyPart === item ? "4px solid #4aa9df" : "",
        background: "#fff",
        borderBottomLeftRadius: "20px",
        width: "270px",
        height: "280px",
        cursor: "pointer",
        gap: "47px",
      }}>
      <img src={Icon} alt="dumbell" style={{ width: "40px", height: "40px" }} />
      <Typography>{item}</Typography>
    </Stack>
  );
};

export default BodyPart;
