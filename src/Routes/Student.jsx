import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import {
    Table,
    TableContainer,
    Thead,
    Tbody,
    Tr,
    Th,
    Td,
    Select,
    Box,
  } from '@chakra-ui/react'
import NavBar from "../components/Navbar";
// import Footer from "../components/Footer";

const Student = () => {
  const [students, setStudents] = useState([]);
  const [filteredStudents, setFilteredStudents] = useState([]);
  const [selectedFaculty, setSelectedFaculty] = useState("All");

  useEffect(() => {
    fetchStudents();
  }, []);

  useEffect(() => {
    filterStudents();
  }, [students, selectedFaculty]);

  const fetchStudents = async () => {
    try {
      const response = await fetch("http://localhost:3001/student");
      const data = await response.json();
      setStudents(data);
    } catch (error) {
      console.log(error);
    }
  };

  const deleteStudent = async (id) => {
    try {
      await fetch(`http://localhost:3001/student/${id}`, {
        method: "DELETE",
      });
      setStudents(students.filter((student) => student.id !== id));
    } catch (error) {
      console.log(error);
    }
  };

  const filterStudents = () => {
    if (selectedFaculty === "All") {
      setFilteredStudents(students);
    } else {
      const filtered = students.filter(
        (student) => student.faculty === selectedFaculty
      );
      setFilteredStudents(filtered);
    }
  };

  const handleFacultyChange = (event) => {
    setSelectedFaculty(event.target.value);
  };

  return (
    <div>
      <Box>
      <h2>Student</h2>
      <NavBar />
      <div>
        <label htmlFor="faculty-filter">Filter by Faculty:</label>
        <Select
          id="faculty-filter"
          value={selectedFaculty}
          onChange={handleFacultyChange}
          data-testid="filter"
        >
          <option value="All">All</option>
          <option value="Fakultas Ekonomi">Fakultas Ekonomi</option>
          <option value="Fakultas Ilmu Sosial dan Politik">
            Fakultas Ilmu Sosial dan Politik
          </option>
          <option value="Fakultas Teknik">Fakultas Teknik</option>
          <option value="Fakultas Teknologi Informasi dan Sains">
            Fakultas Teknologi Informasi dan Sains
          </option>
        </Select>
      </div>
      {filteredStudents.length === 0 ? (
        <p>Loading ...</p>
      ) : (
        <TableContainer>
        <Table id="table-student" variant='simple'>
          <Thead>
            <Tr>
              <Th>No</Th>
              <Th>Full Name</Th>
              <Th>Faculty</Th>
              <Th>Program Study</Th>
              <Th>Option</Th>
            </Tr>
          </Thead>
          <Tbody>
            {filteredStudents.map((student, index) => (
              <Tr key={student.id} className="student-data-row">
                <Td>{index + 1}</Td>
                <Td>
                  <Link to={`/student/${student.id}`}>{student.fullname}</Link>
                </Td>
                <Td>{student.faculty}</Td>
                <Td>{student.programStudy}</Td>
                <Td>
                  <button 
                    data-testid={`delete-${student.id}`}
                    onClick={() => deleteStudent(student.id)}
                  >
                    Delete
                  </button>
                </Td>
              </Tr>
            ))}
          </Tbody>
        </Table>
        </TableContainer>
      )}
      </Box>  
    </div>
  );
};

export default Student;
