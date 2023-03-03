import React, { useState } from "react";
import AddStudenForm from "./AddStudentForm";
import StudentsList from "./StudentsList";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

export default function Main() {
  const [students, setStudents] = useState([
    {
      id: 1,
      name: "Tomas",
      surname: "Jonauskas",
      birth: "2003-05-21",
      city: "Kaunas",
      course: "JavaScript",
      group: "J03",
    },
    {
      id: 2,
      name: "Vytautas",
      surname: "Vitkauskas",
      birth: "2000-01-11",
      city: "Klaipeda",
      course: "Testuotojai",
      group: "T01",
    },
    {
      id: 3,
      name: "Tadas",
      surname: "Melinauskas",
      birth: "2000-01-11",
      city: "Klaipeda",
      course: "Testuotojai",
      group: "J03",
    },
  ]);

  return (
    <main>
      <ToastContainer position="top-center" theme="dark" newestOnTop />
      <AddStudenForm students={students} setStudents={setStudents} />
      <StudentsList students={students} setStudents={setStudents} />
    </main>
  );
}
