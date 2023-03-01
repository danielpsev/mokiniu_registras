import React, { useState } from "react";
import { v4 as uuidv4 } from "uuid";
import Student from "./Student";
export default function StudentsList() {
  const [students, setStudents] = useState([
    {
      id: 1,
      name: "Tomas",
      surname: "Jonauskas",
      birth: "2003-05-21",
      city: "Kaunas",
      program: "Java",
      group: "J03",
    },
    {
      id: 2,
      name: "Vytautas",
      surname: "Vitkauskas",
      birth: "2000-01-11",
      city: "Klaipeda",
      program: "Testuotojai",
      group: "T01",
    },
  ]);

  let students_list = students.map((el) => {
    return <Student key={uuidv4()} obj={el} />;
  });

  return <div>{students_list}</div>;
}
