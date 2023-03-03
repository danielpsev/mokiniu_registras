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
  const [editMode, setEditMode] = useState(false);

  const editStudent = (id) => {
    console.log("edit student:" + id);
    console.log("editModeBefore:" + editMode);
    setEditMode(!editMode);
    console.log("editModeAfter:" + editMode);

    setTimeout(() => {
      console.log("after timeout:" + editMode);
    }, 5000);
    // let item = document
    //   .getElementById("student" + id)
    //   .querySelectorAll("td input");
    // for (let i = 0; i < item.length; i++) {
    //   item[i].disabled = false;
    // }
    // console.log(item);
  };
  const handleChange = (e) => {
    const name = e.target.name;
    const val = e.target.value;
    console.log("set edit values" + name + val);
    setEditValues({ ...editValues, [name]: val });
  };

  useEffect(() => {
    console.log("effect mode: " + editMode);
  }, [editMode]);

  return (
    <tr className={"p2 mt-3 bg-opacity-10 "} id={"student" + obj.id}>
      <td className="col-md-2">
        <input
          type="text"
          name="name"
          className="form-control"
          defaultValue={obj.name}
          id={"edit_s_name" + obj.id}
          onChange={handleChange}
          disabled={activeInputs == obj.id ? false : true}
        />
      </td>
      <td className="col-md-2">
        <input
          type="text"
          name="surname"
          className="form-control"
          defaultValue={obj.surname}
          id={"edit_s_surname" + obj.id}
          onChange={handleChange}
          disabled={activeInputs == obj.id ? false : true}
        />
      </td>
      <td> {obj.birth}</td>
      <td> {obj.city}</td>
      <td> {obj.course}</td>
      <td> {obj.group}</td>
      <td>
        {editMode ? (
          <GiConfirmed
            className="text-success Student-table-icon"
            onClick={() => {
              saveStudent(obj.id);
              setEditMode(!editMode);
              console.log("save mode" + editMode);
            }}
          />
        ) : (
          <AiFillEdit
            className="text-primary Student-table-icon"
            onClick={() => {
              editStudent(obj.id);
              // setEditMode(!editMode);
              // console.log("edit mode" + editMode);

              //setActiveInputs(obj.id);
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
