import { Box } from "@mui/material";
import React, { useEffect, useState } from "react";
import { getNews } from "../service/Api";
import Art from "./Art";

export default function Article() {
  const [news, setNews] = useState([]);
  useEffect(() => {
    dailyNews();
  }, []);
  const dailyNews = async () => {
    let response = await getNews();
    console.log(response.data);
    setNews(response.data);
  };
  return (
    <Box>
      {news.map((data) => (
        <Art data={data} />
      ))}
    </Box>
  );
}
