import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { Button, Input } from "@chakra-ui/react";
import Footer from "../components/Footer";

const AddStudent = () => {
  const navigate = useNavigate();
  const [student, setStudent] = useState({
    fullname: "",
    profilePicture: "",
    address: "",
    phoneNumber: "",
    birthDate: "",
    gender: "",
    programStudy: "",
  });

  const handleSubmit = async (e) => {
    e.preventDefault();

    let faculty = "";
    switch (student.programStudy) {
      case "Ekonomi":
      case "Manajemen":
      case "Akuntansi":
        faculty = "Fakultas Ekonomi";
        break;
      case "Administrasi Publik":
      case "Administrasi Bisnis":
      case "Hubungan Internasional":
        faculty = "Fakultas Ilmu Sosial dan Politik";
        break;
      case "Teknik Sipil":
      case "Arsitektur":
        faculty = "Fakultas Teknik";
        break;
      case "Matematika":
      case "Fisika":
      case "Informatika":
        faculty = "Fakultas Teknologi Informasi dan Sains";
        break;
      default:
        break;
    }

    const newStudent = {
      ...student,
      faculty: faculty,
    };

    try {
        const response = await fetch("http://localhost:3001/student", {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify(newStudent),
        });
        const data = await response.json();
  
        navigate("/student");
      } catch (error) {
        console.log("Error: ", error);
      }


  
  };

  const handleChange = (event) => {
    const { name, value } = event.target;
    setStudent((prevStudent) => ({
      ...prevStudent,
      [name]: value,
    }));
  };

  return (
    <div>
      <h1>Add Student</h1>
      <form onSubmit={handleSubmit}>
        <div>
          <label>Full Name:</label>
          <Input
            type="text"
            name="fullname"
            value={student.fullname}
            onChange={handleChange}
            data-testid="name"
          />
        </div>
        <div>
          <label>Profile Picture:</label>
          <Input
            type="text"
            name="profilePicture"
            value={student.profilePicture}
            onChange={handleChange}
            data-testid="profilePicture"
          />
        </div>
        <div>
          <label>Address:</label>
          <Input
            type="text"
            name="address"
            value={student.address}
            onChange={handleChange}
            data-testid="address"
          />
        </div>
        <div>
          <label>Phone Number:</label>
          <Input
            type="text"
            name="phoneNumber"
            value={student.phoneNumber}
            onChange={handleChange}
            data-testid="phoneNumber"
          />
        </div>
        <div>
          <label>Birth Date:</label>
          <Input
            type="text"
            name="birthDate"
            value={student.birthDate}
            onChange={handleChange}
            data-testid="date"
          />
        </div>
        <div>
          <label>Gender:</label>
          <Input
            type="text"
            name="gender"
            value={student.gender}
            onChange={handleChange}
            data-testid="gender"
          />
        </div>
        <div>
          <label>Program Study:</label>
          <select
            name="programStudy"
            value={student.programStudy}
            onChange={handleChange}
            data-testid="prody"
          >
            <option value="">-- Select Program Study --</option>
            <option value="Ekonomi">Ekonomi</option>
            <option value="Manajemen">Manajemen</option>
            <option value="Akuntansi">Akuntansi</option>
            <option value="Administrasi Publik">Administrasi Publik</option>
            <option value="Administrasi Bisnis">Administrasi Bisnis</option>
            <option value="Hubungan Internasional">
              Hubungan Internasional
            </option>
            <option value="Teknik Sipil">Teknik Sipil</option>
            <option value="Arsitektur">Arsitektur</option>
            <option value="Matematika">Matematika</option>
            <option value="Fisika">Fisika</option>
            <option value="Informatika">Informatika</option>
          </select>
        </div>
        <Button type="submit" data-testid="add-btn">
          Add Student
        </Button>
      </form>
      {/* <Footer /> */}
    </div>
  );
};

export default AddStudent;
