export const exerciseOptions = {
  method: "GET",
  params: { limit: "100" },
  headers: {
    "X-RapidAPI-Key": "53ee2394b3msh25779e4e4fcf647p1f913djsnffa34400ec2c",
    "X-RapidAPI-Host": "exercisedb.p.rapidapi.com",
  },
};
export const youtubeOptions = {
  method: "GET",

  headers: {
    "X-RapidAPI-Key": "53ee2394b3msh25779e4e4fcf647p1f913djsnffa34400ec2c",
    "X-RapidAPI-Host": "youtube-search-and-download.p.rapidapi.com",
  },
};

export const fetchData = async (url, options) => {
  const response = await fetch(url, options);
  const data = await response.json();
  return data;
};
