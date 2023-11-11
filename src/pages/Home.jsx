import { useState } from "react";
import HeroBanner from "../components/Home/HeroBanner";
import SearchExercises from "../components/Home/SearchExercises";
import Exercises from "../components/Home/Exercises";
import { Box } from "@mui/material";
const Home = () => {
  const [bodyPart, setBodyPart] = useState("all");
  console.log(bodyPart);
  const [exercises, setExercises] = useState([]);
  return (
    <Box>
      <HeroBanner />
      <SearchExercises
        setExercises={setExercises}
        bodyPart={bodyPart}
        setBodyPart={setBodyPart}
      />
      <Exercises
        setExercises={setExercises}
        bodyPart={bodyPart}
        exercises={exercises}
      />
    </Box>
  );
};

export default Home;
