import { Box, styled } from "@mui/material";
import "./App.css";
import Header from "./components/Header";
import Infoheader from "./components/Infoheader";
import Article from "./components/Article";

const Container = styled(Box)(({ theme }) => ({
  width: "60%",
  margin: "20px auto 0 auto",
  [theme.breakpoints.down("md")]: {
    width: "75%",
  },
  [theme.breakpoints.down("sm")]: {
    width: "85%",
  },
}));

function App() {
  return (
    <Box>
      <Header />
      <Container>
        <Infoheader />
        <Article />
      </Container>
    </Box>
  );
}

export default App;
