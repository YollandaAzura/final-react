import React from "react";
import { Box } from "@chakra-ui/react";
import { studentId, studentName } from "../Task";

const Footer = () => {
  return (
    <div>
        <br/>
    <hr/>
    <Box className="test-box footer">
      <p>{studentName}</p>
      <p>{studentId}</p>
    </Box>
    </div>
  );
};

export default Footer;
