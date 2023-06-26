import React from "react";
import { Link } from "react-router-dom";
import { Button } from "@chakra-ui/react";
// import Footer from "../components/Footer";

const Home = () => {
  return (
    <center>
    <div>
      <h2>Home</h2>
      <br/>
      <br/>
      <Button as={Link} to="/student" data-testid="student-btn">
        All Student
      </Button>
    </div>
    </center>
  );
};

export default Home;