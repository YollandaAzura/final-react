import React from 'react';
import { Link } from 'react-router-dom';
import { Box } from '@chakra-ui/react';
import { Button } from '@chakra-ui/react';

const Navbar = () => {
  return (
    <Box spacing={4} direction='row' align='center'>
      <Link to="/" data-testid="home-page" className="test-link">
       <Button>Home</Button> 
      </Link>
      <Link to="/student" data-testid="student-page" className="test-link">
       <Button>Students</Button> 
      </Link>
      <Link to="/add" data-testid="add-page" className="test-link">
       <Button>Add Student</Button> 
       
      </Link>
    </Box>
  );
};

export default Navbar;