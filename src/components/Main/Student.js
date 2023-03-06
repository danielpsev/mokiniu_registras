import React, { useState, useEffect } from "react";
import { AiFillEdit, AiFillDelete } from "react-icons/ai";
import { GiConfirmed } from "react-icons/gi";
import "./main.css";
export default function Student(props) {
  const {
    obj,
    deleteStudent,
    saveStudent,
    editValues,
    setEditValues,
    activeInputs,
    setActiveInputs,
  } = props;

  const defaultEditValues = {
    name: obj.name,
    surname: obj.surname,
    birth: obj.birth,
    city: obj.city,
    course: obj.course,
    group: obj.group
  }

  const handleChange = (e) => {
    const name = e.target.name;
    const val = e.target.value;
    setEditValues({ ...editValues, [name]: val });
  };

  return (
    <tr className={"p2 mt-3 bg-opacity-10 "} id={"student" + obj.id}>
      <td className="col-md-2">
        <input
          type="text"
          name="name"
          className={activeInputs == obj.id ? 'form-control active' : 'form-control'}
          defaultValue={obj.name}
          id={"edit_s_name" + obj.id}
          disabled={activeInputs == obj.id ? false : true}
          onChange={handleChange}
        />
      </td>
      <td className="col-md-2">
        <input
          type="text"
          name="surname"
          className={activeInputs == obj.id ? 'form-control active' : 'form-control'}
          id={"edit_s_surname" + obj.id}
          disabled={activeInputs == obj.id ? false : true}
          onChange={handleChange}
          value={obj.surname}
        />
      </td>
     <td>   
      <input
          type="date"
          name="birth"
          className={activeInputs == obj.id ? 'form-control active' : 'form-control'}
          disabled={activeInputs == obj.id ? false : true}
          onChange={handleChange}
          value={obj.birth}
        /></td>
      <td> 
      <input
          type="text"
          name="city"
          className={activeInputs == obj.id ? 'form-control active' : 'form-control'}
          disabled={activeInputs == obj.id ? false : true}
          onChange={handleChange}
          value={obj.city}
        />
      </td>
      <td>       
        {/* <input
          type="text"
          name="course"
          className={activeInputs == obj.id ? 'form-control active' : 'form-control'}
          disabled={activeInputs == obj.id ? false : true}
          onChange={handleChange}
          value={obj.course}
        /> */}
        
        
        <select
            name="course"
            className={activeInputs == obj.id ? 'form-control active' : 'form-control'}
            disabled={activeInputs == obj.id ? false : true}
            onChange={handleChange}
            value={obj.course}
          >
            <option value="JavaScript">JavaScript</option>
            <option value="Java">Java</option>
            <option value="Testuotojai">Testuotojai</option>
          </select>
        
        
        
        
        
        </td>
      <td>
      <input
          type="text"
          name="group"
          className={activeInputs == obj.id ? 'form-control active' : 'form-control'}
          disabled={activeInputs == obj.id ? false : true}
          onChange={handleChange}
          value={obj.group}
        />       
      </td>
      <td>
        {activeInputs == obj.id ? (
          <GiConfirmed
            className="text-success Student-table-icon"
            onClick={() => {
              saveStudent(obj.id);
              setActiveInputs('');
            }}
          />
        ) : (
          <AiFillEdit
            className="text-primary Student-table-icon"
            onClick={() => {
              setEditValues(defaultEditValues);
              setActiveInputs(obj.id);
            }}
          />
        )}

        <AiFillDelete
          className="text-danger Student-table-icon"
          style={{ marginLeft: 15 }}
          onClick={() => deleteStudent(obj.id)}
        />
      </td>
    </tr>
  );
}
