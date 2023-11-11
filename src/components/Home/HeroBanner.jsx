import { Box, Stack, Typography, Button } from "@mui/material";
import HeroBannerImage from "../../assets/images/banner.jpg";
const HeroBanner = () => {
  return (
    <Box
      sx={{
        mt: {
          lg: "212px",
          xs: "70px",
        },
        ml: {
          sm: "50px",
        },
      }}
      position={"relative"}
      p={"20px"}>
      <Typography color={"#4aa9df"} fontWeight={"6oo"} fontSize={"26"}>
        The Best Fitness Club Ever Existed
      </Typography>
      <Typography
        fontWeight={"700"}
        sx={{
          fontSize: {
            lg: "44px",
            xs: "40px",
          },
          mb: "23px",
          mt: "30px",
        }}>
        Sweat, Smile <br /> and Again!
      </Typography>
      <Typography fontSize={"22px"} lineHeight={"35px"} mb={4}>
        Checkout the most effective exercises
      </Typography>
      <Button variant="contained" href="#exercises">
        Explore Exercises
      </Button>
      <Typography
        fontWeight={600}
        color={"#4aa9df"}
        sx={{
          opacity: 0.1,
          display: {
            lg: "block",
            xs: "none",
          },
          fontSize: "200px",
        }}>
        Exercises
      </Typography>
      <img src={HeroBannerImage} alt="banner" className="hero-banner-img" />
    </Box>
  );
};

export default HeroBanner;
