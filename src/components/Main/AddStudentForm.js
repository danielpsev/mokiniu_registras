import React, { useState } from "react";
import { v4 as uuidv4 } from "uuid";
import { toast } from "react-toastify";
export default function AddStudenForm(props) {
  const { students, setStudents } = props;
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
    let errors = [];
    const { s_name, s_surname, s_bdate, s_city, s_course, s_group } =
      formInputs;
    if (s_name && s_surname && s_bdate && s_city && s_course && s_group) {
      let letters = /^[A-Za-z]+$/;
      if (!s_name.match(letters)) {
        errors.push("Blogai įvestas vardas!");
      }
      if (!s_surname.match(letters)) {
        errors.push("Blogai įvesta pavardė!");
      }
      if (!s_city.match(letters)) {
        errors.push("Blogai įvestas miestas!");
      }
      console.log(errors);
      if (!errors.length) {
        console.log("no err");
        const new_student = {
          id: uuidv4(),
          name: s_name,
          surname: s_surname,
          birth: s_bdate,
          city: s_city,
          course: s_course,
          group: s_group,
        };
        setStudents(() => [...students, new_student]);
        toast.success("Studentas pridėtas!");
        setFormInputs({
          s_name: "",
          s_surname: "",
          s_bdate: "",
          s_city: "",
          s_course: "",
          s_group: "",
        });
        // document.getElementById("addStudentForm").reset();
      } else {
        //for (let i = 0; i < 2; i++) {
          toast.error(errors[0]);
       // }
      }
    } else {
      toast.error("Užpildykite visus laukelius!");
    }
  };
  let { s_name, s_surname, s_bdate, s_city, s_course, s_group } = formInputs;
  return (
    <div>
      Forma
      <form
        id="addStudentForm"
        className="d-flex flex-column align-items-start "
      >
        <div className="form-group col-md-6">
          <input
            type="text"
            className="form-control"
            placeholder="Vardas"
            id="s_name"
            name="s_name"
            onChange={handleChange}
            value={s_name}
          />
        </div>
        <div className="form-group col-md-6 mt-2">
          <input
            type="text"
            className="form-control"
            placeholder="Pavardė"
            id="s_surname"
            name="s_surname"
            onChange={handleChange}
            value={s_surname}
          />
        </div>
        <div className="form-group col-md-6 mt-2">
          <input
            type="date"
            className="form-control"
            id="s_bdate"
            name="s_bdate"
            onChange={handleChange}
            value={s_bdate}
          />
        </div>
        <div className="form-group col-md-6 mt-2">
          <input
            type="text"
            className="form-control"
            placeholder="Miestas"
            id="s_city"
            name="s_city"
            onChange={handleChange}
            value={s_city}
          />
        </div>
        <div className="form-group col-md-6 mt-2">
          <select
            id="s_course"
            name="s_course"
            className="form-control "
            onChange={handleChange}
            value={s_course}
          >
            <option value="">Programa</option>
            <option value="JavaScript">JavaScript</option>
            <option value="Java">Java</option>
            <option value="Testuotojai">Testuotojai</option>
          </select>
        </div>
        <div className="form-group col-md-6 mt-2">
          <input
            type="text"
            placeholder="Grupė"
            id="s_group"
            name="s_group"
            className="form-control "
            onChange={handleChange}
            value={s_group}
          />
        </div>
        <div className="form-group col-md-6 mt-2">
          <input
            type="button"
            placeholder="Pridėti"
            value="Pridėti"
            className="btn btn-primary"
            onClick={handleSubmit}
          />
        </div>
      </form>
    </div>
  );
}
