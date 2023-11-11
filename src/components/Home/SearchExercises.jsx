import { useEffect, useState } from "react";
import { fetchData, exerciseOptions } from "../../utils/fetchData";
import { Box, Button, Stack, TextField, Typography } from "@mui/material";
import HorizontalScrollbar from "./HorizontalScrollBar";
const SearchExercises = ({ setExercises, bodyPart, setBodyPart }) => {
  const [search, setSearch] = useState("");
  const [bodyParts, setBodyParts] = useState([]);
  useEffect(() => {
    const fetchExercisesData = async () => {
      const bodyPartsData = await fetchData(
        "https://exercisedb.p.rapidapi.com/exercises/bodyPartList",
        exerciseOptions
      );
      setBodyParts(["all", ...bodyPartsData]);
    };
    fetchExercisesData();
  }, []);

  const handleSearch = async () => {
    if (search) {
      const exercisesData = await fetchData(
        "https://exercisedb.p.rapidapi.com/exercises",
        exerciseOptions
      );
      const SearchExercises = exercisesData.filter(
        (exercise) =>
          exercise.name.toLowerCase().includes(search) ||
          exercise.target.toLowerCase().includes(search) ||
          exercise.equipment.toLowerCase().includes(search) ||
          exercise.bodyPart.toLowerCase().includes(search)
      );
      setSearch("");
      setExercises(SearchExercises);
      /*   console.log(exercisesData); */
    }
  };
  return (
    <Stack
      alignItems={"center"}
      mt={"37px"}
      justifyContent={"center"}
      p={"20px"}>
      <Typography
        fontWeight={700}
        sx={{
          fontSize: {
            lg: "44px",
            sm: "30px",
          },
        }}
        mb={"50px"}
        textAlign={"center"}>
        Awesome Exercises You <br /> Should Try!
      </Typography>
      <Box position={"relative"} mb="72px">
        <TextField
          sx={{
            imput: {
              fontWeight: 700,
              borderRadius: "4px",
              border: "none",
            },
            width: {
              lg: "1000px",
              sx: "350px",
            },
            backgroundColor: "#fff",
            borderRadius: "40px",
          }}
          height={"76px"}
          value={search}
          onChange={(e) => {
            setSearch(e.target.value.toLowerCase());
          }}
          placeholder="Search Exercises"
        />
        <Button
          className="search-btn"
          sx={{
            bgcolor: "#4aa9df",
            color: "#fff",
            textTransform: "none",
            width: { lg: "175px", xs: "100px" },
            fontSize: { lg: "20px", xs: "14px" },
            height: "56px",
            position: "absolute",
            right: 0,
          }}
          onClick={handleSearch}>
          Search
        </Button>
      </Box>
      <Box sx={{ position: "relative", width: "100%", padding: "20px" }}>
        <HorizontalScrollbar
          data={bodyParts}
          bodyPart={bodyPart}
          setBodyPart={setBodyPart}
        />
      </Box>
    </Stack>
  );
};

export default SearchExercises;
