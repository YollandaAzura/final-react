import React, { useEffect } from 'react';
//import { useNavigate } from 'react-router-dom';
import { Center, Link } from '@chakra-ui/react';
import { Box, Button } from '@chakra-ui/react';

const NotFound = () => {
//   const navigate = useNavigate();

//   const handleClick = () => {
//     navigate('/');
//   };

//   return (
//     <div>
//       <center>
//       <h1>404 Not Found</h1>
//       <br/>
//       <p>The page you are looking for does not exist.</p>
//       <br/>
//       <Button onClick={handleClick}>Go to Home</Button>
//       </center>
//     </div>
//   );

return (
    <>
    <Box textAlign='center'>
        <br/>
        <br/>
        <br/>
        <h1>Page Not Found</h1>
        <p>The requested page could not be found.</p>
        <Link href='/'>
            <br/>
            <br/>
            <br/>
        <Button className="test-button" colorScheme="blue" >
            Go to home
        </Button>
        </Link>
        <br/>
        <br/>
        </Box>
    </>
);
};

export default NotFound;
