import { Box, Stack, Typography } from "@mui/material";
import Logo from "../assets/images/Logo.png";
const Footer = () => {
  return (
    <Box mt={"80px"} bgcolor={"#fff"}>
      <Stack
        alignContent={"center"}
        gap={"40px"}
        px={"40px"}
        pt={"24px"}
        justifyContent={"center"}>
        <Typography variant="h5" textAlign={"center"}>
          Made with ♥ by EmmyDeveloper
        </Typography>
      </Stack>
    </Box>
  );
};

export default Footer;
