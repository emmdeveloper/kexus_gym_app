import { Box, Stack, Typography } from "@mui/material";
const ExerciseVideos = ({ exerciseVideos, name }) => {
  return (
    <Box sx={{ marginTop: { lg: "200px", xs: "20px" } }} p="20px">
      <Typography variant="h4">
        Watch
        <span
          style={{
            color: "#4aa9df",
            textTransform: "capitalize",
            marginRight: "5px",
          }}>
          {name}
        </span>
        Exercise video
      </Typography>
      <Stack
        justifyContent={"flex-start"}
        flexWrap={"wrap"}
        alignItems={"center"}
        mt={"20px"}
        sx={{
          flexDirection: {
            lg: "row",
          },
          gap: {
            lg: "110px",
            xs: "0",
          },
        }}>
        {exerciseVideos?.slice(0, 3).map((item, index) => (
          <a
            key={index}
            className="exercise-video"
            href={`https://youtube.com?v=${item.video.videoId}`}
            target="_blank"
            rel="noreferrer">
            <img src={item.video.thumbnails[0].url} alt={item.video.title} />
            <Box>
              <Typography
                variant="h5"
                sx={{ textDecoration: "none", color: "#000" }}>
                {item.video.title}
              </Typography>
              <Typography
                variant="h6"
                sx={{ textDecoration: "none", color: "#000" }}>
                {item.video.channelName}
              </Typography>
            </Box>
          </a>
        ))}
      </Stack>
    </Box>
  );
};

export default ExerciseVideos;
