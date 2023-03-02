import React, { useEffect, useState } from "react";
import { AiFillEdit, AiFillDelete } from 'react-icons/ai';
import {GiConfirmed} from 'react-icons/gi';
import "./main.css";
export default function Student(props) {
  const { obj, deleteStudent, saveStudent } = props;
  const [editMode, setEditMode] = useState(false);


 // useEffect(() => {
    let editStudent = (id) => {
      console.log("edit student:" + id);
      let item = document.getElementById('student'+id).querySelectorAll('td input');
      for(let i = 0; i < item.length; i++){
        item[i].disabled = false;
      }
      console.log(item);
    }
  //}, []);




  return(
  <tr className={"p2 mt-3 bg-opacity-10 "} id={'student'+obj.id}>
    <td> <input type="text" defaultValue={obj.name} id={'edit_s_name'+obj.id} disabled/></td>
    <td> <input type="text" defaultValue={obj.surname} id={'edit_s_surname'+obj.id} disabled/></td>
    <td> {obj.birth}</td>
    <td> {obj.city}</td>
    <td> {obj.course}</td>
    <td> {obj.group}</td>
    <td> 
      {editMode 
      ? <GiConfirmed className="text-success Student-table-icon" 
       onClick={() => {saveStudent(obj.id); setEditMode(!editMode)}}/> 
      : <AiFillEdit className="text-primary Student-table-icon" 
      onClick={() => {editStudent(obj.id); setEditMode(!editMode)}}/>} 


      <AiFillDelete className="text-danger Student-table-icon" onClick={() => deleteStudent(obj.id)}/>
    </td>
    </tr>
    );
}
