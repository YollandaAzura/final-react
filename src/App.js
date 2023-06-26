import React from 'react';
//import React, { useState, useEffect } from "react";
import {Route, Routes } from 'react-router-dom';
import Home from './Routes/Home';
import AddStudent from './Routes/AddStudent';
import EditStudent from './Routes/EditStudent';
import NotFound from './Routes/NotFound';
import Student from './Routes/Student';
import Footer from './components/Footer';

const App = () => {
  
  return (
    <div>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/add" element={<AddStudent   />} />
        <Route path="/student" element={<Student  />} />
        <Route path="/student/:id" element={<EditStudent />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
      {/* <br/>
      <hr/> */}
      <Footer />
    </div>
  );
};

export default App;

// import { Route, Routes } from 'react-router-dom';
// import Home from './Routes/Home';
// import AddStudent from './Routes/AddStudent';
// import EditStudent from './Routes/EditStudent';
// import NotFound from './Routes/NotFound';
// import Student from './Routes/Student';
// import Footer from './components/Footer';
// import { Box } from '@chakra-ui/react';

// const App = () => {
//   return (
//     <div>
//       <Box>
//       <Routes>
//         <Route path="/" element={<Home />} />
//         <Route path="/add" element={<AddStudent />} />
//         <Route path="/student" element={<Student />} />
//         <Route path="/student/:id" element={<EditStudent />} />
//         <Route path="*" element={<NotFound />} />
//       </Routes>
//       <Footer/>
//       </Box>
//     </div>
//   );
// };

// export default App;