import React, { useState, useEffect } from "react";
import { useParams, useNavigate } from "react-router-dom";
import { Button, Input, Box } from "@chakra-ui/react";
import Footer from "../components/Footer";

const EditStudent = () => {
  const history = useNavigate();
  const { id } = useParams();
  const [student, setStudent] = useState(null);

  useEffect(() => {
    fetch(`http://localhost:3001/student/${id}`)
      .then((response) => response.json())
      .then((data) => setStudent(data))
      .catch((error) => console.log(error));
  }, [id]);

  const handleSubmit = (event) => {
    event.preventDefault();

    let faculty = "";
    switch (student.programStudy) {
      case "Ekonomi":
      case "Manajemen":
      case "Akuntansi":
        student.faculty = "Fakultas Ekonomi";
        break;
      case "Administrasi Publik":
      case "Administrasi Bisnis":
      case "Hubungan Internasional":
        student.faculty = "Fakultas Ilmu Sosial dan Politik";
        break;
      case "Teknik Sipil":
      case "Arsitektur":
        student.faculty = "Fakultas Teknik";
        break;
      case "Matematika":
      case "Fisika":
      case "Informatika":
        student.faculty = "Fakultas Teknologi Informasi dan Sains";
        break;
      default:
        break;
    }

    fetch(`http://localhost:3001/student/${id}`, {
      method: "PUT",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(student),
    })
      .then(() => {
        history("/student");
      })
      .catch((error) => console.log(error));
  };

  const handleChange = (event) => {
    const { name, value } = event.target;
    setStudent((prevStudent) => ({
      ...prevStudent,
      [name]: value,
    }));
  };

  if (!student) {
    return <p>Loading ...</p>;
  }

  return (
    <div>
      <h1>Edit Student</h1>
      <img src={student.profilePicture} alt="Profile" />
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
        <Button type="submit" data-testid="edit-btn">
          Update Student
        </Button>
      </form>
      <Box className="footer">
        {/* <Footer /> */}
      </Box>
    </div>
  );
};

export default EditStudent;
