import React, { useState } from "react";
import { v4 as uuidv4 } from "uuid";
import Student from "./Student";
export default function StudentsList(props) {
  const {students} = props;

  let students_list = students.map((el) => {
    return <Student key={uuidv4()} obj={el} />;
  });

  return <div>
    <table className="table table-striped table-dark">
        <thead>
          <tr>
            <th scope="col">Vardas</th>
            <th scope="col">Pavardė</th>
            <th scope="col">Gimimo data</th>
            <th scope="col">Miestas</th>
            <th scope="col">Programa</th>
            <th scope="col">Grupė</th>
            <th scope="col">Redaguoti</th>
          </tr>
        </thead>
        <tbody>{students_list}</tbody>
      </table>
    
    </div>;
}
