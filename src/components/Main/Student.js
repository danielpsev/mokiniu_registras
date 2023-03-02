import React, { useState } from "react";
import { AiFillEdit, AiFillDelete } from 'react-icons/ai';
import "./main.css";
export default function Student(props) {
  const { obj } = props;
  return(
  <tr className={"p2 mt-3 bg-opacity-10 "}>
    <td> {obj.name}</td>
    <td> {obj.surname}</td>
    <td> {obj.birth}</td>
    <td> {obj.city}</td>
    <td> {obj.course}</td>
    <td> {obj.group}</td>
    <td> <AiFillEdit class="text-primary Student-table-icon"/> <AiFillDelete className="text-danger Student-table-icon"/></td>
    </tr>
    );
}
