import React from "react";
import { Box, Stack, Typography } from "@mui/material";
import Loader from "../../components/Loader";
import HorizontalScrollbar from "../../components/Home/HorizontalScrollBar";
const SimilarExercise = ({ targetMuscleExercises, equipmentExercises }) => {
  return (
    <Box sx={{ mt: { lg: "100px", xs: "o" } }}>
      <Typography variant="h3" mb={5}>
        Exercises that works on the same muscle group
      </Typography>
      <Stack direction={"row"} sx={{ p: "2px", position: "relative" }}>
        {targetMuscleExercises.length ? (
          <HorizontalScrollbar data={targetMuscleExercises} />
        ) : (
          <Loader />
        )}
      </Stack>
      <Typography variant="h3" mb={5}>
        Exercises that uses the same equipment
      </Typography>
      <Stack direction={"row"} sx={{ p: "2px", position: "relative" }}>
        {equipmentExercises.length ? (
          <HorizontalScrollbar data={equipmentExercises} />
        ) : (
          <Loader />
        )}
      </Stack>
    </Box>
  );
};

export default SimilarExercise;
