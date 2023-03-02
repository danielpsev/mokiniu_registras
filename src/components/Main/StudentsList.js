import React, { useState } from "react";
import { v4 as uuidv4 } from "uuid";
import Student from "./Student";
import SortStudents from "./SortStudents";
import swal from 'sweetalert';

export default function StudentsList(props) {
  const {students, setStudents} = props;

  const deleteStudent = (id) => {
    let student = students.filter((el) => el.id === id);
    console.log(student);
    swal({
      title: "Veiksmo patvirtinimas",
      text: "Ar tikrai norite ištrinti studentą "+ student[0]['name'] + "?",
      icon: "warning",
      buttons: ["Atšaukti", "Ištrinti"],
      dangerMode: true,
    })
    .then((willDelete) => {
      if (willDelete) {
        swal("Studentas sėkmingai ištrintas", {
          icon: "success",
        });
        setStudents(students.filter((student) => student.id !== id ));
      }
    });
  }

  const saveStudent = (id) => {
    console.log("save student:" + id);
    let item = document.getElementById('student'+id).querySelectorAll('td input');
    for(let i = 0; i < item.length; i++){
      item[i].disabled = true;
    }
    let s_name = document.getElementById("edit_s_name"+id).value;
    let s_surname = document.getElementById("edit_s_surname"+id).value;
      let data_copy = [...students];
      data_copy.forEach((el) => {
        if (el.id == id) {
          el.name = s_name;
          el.surname = s_surname;
          return;
        }
      });
      setStudents(data_copy);
  }

  let students_list = students.map((el) => {
    return <Student key={uuidv4()} obj={el} deleteStudent={deleteStudent} saveStudent={saveStudent}/>;
  });

    const [filterData, setFilterData] = useState(false);
    let filtered_students;
    if(filterData){
       filtered_students = filterData.map((el) => {
        return <Student key={uuidv4()} obj={el} deleteStudent={deleteStudent} saveStudent={saveStudent}/>;
      });
    }





  return <div className="mt-5">
      <SortStudents students={students} filterData={filterData} setFilterData={setFilterData}/>
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
        <tbody>{filterData ? filtered_students : students_list}</tbody>
      </table>
    
    </div>;
}
