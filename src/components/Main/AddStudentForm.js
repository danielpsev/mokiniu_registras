import React, { useState } from "react";

export default function AddStudenForm() {
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
  };
  return (
    <div>
      Forma
      <form>
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
        />
      </form>
    </div>
  );
}
