import React, { useState } from "react";
import { v4 as uuidv4 } from "uuid";
import { toast } from 'react-toastify';
export default function AddStudenForm(props) {
  const {students, setStudents} = props;
  const [formInputs, setFormInputs] = useState({
    s_name: "",
    s_surname: "",
    s_bdate: "",
    s_city: "",
    s_course: "",
    s_group: "",
  });
  const handleChange = (e) => {
    const name = e.target.name;
    const val = e.target.value;
    console.log({ ...formInputs, [name]: val });
    setFormInputs({ ...formInputs, [name]: val });
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    const {s_name, s_surname, s_bdate, s_city, s_course, s_group} = formInputs;
    if(s_name && s_surname && s_bdate && s_city && s_course && s_group){
      const new_student = 
      {
        id: uuidv4(),
        name: s_name,
        surname: s_surname, 
        birth: s_bdate, 
        city: s_city,
        course: s_course,
        group: s_group,
      }
      setStudents(() => [...students, new_student]);
      toast.success("Studentas pridėtas!");
      setFormInputs('');
      document.getElementById("addStudentForm").reset();
    }else{
      toast.error("Užpildykite visus laukelius!");
    }


  };
  return (
    <div>
      Forma
      <form id="addStudentForm">
        <input
          type="text"
          placeholder="Vardas"
          id="s_name"
          name="s_name"
          onChange={handleChange}
        />
        <input
          type="text"
          placeholder="Pavardė"
          id="s_surname"
          name="s_surname"
          onChange={handleChange}
        />
        <input
          type="date"
          id="s_bdate"
          name="s_bdate"
          onChange={handleChange}
        />
        <input
          type="text"
          placeholder="Miestas"
          id="s_city"
          name="s_city"
          onChange={handleChange}
        />
        <select id="s_course" name="s_course" onChange={handleChange}>
          <option value="">Programa</option>
          <option value="JavaScript">JavaScript</option>
          <option value="Java">Java</option>
          <option value="Testuotojai">Testuotojai</option>
        </select>
        <input
          type="text"
          placeholder="Grupė"
          id="s_group"
          name="s_group"
          onChange={handleChange}
        />
        <input
          type="button"
          placeholder="Pridėti"
          value="Pridėti"
          className="btn btn-primary"
          onClick={handleSubmit}
        />
      </form>
    </div>
  );
}
