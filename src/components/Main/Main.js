import React, { useState } from "react";
import AddStudenForm from "./AddStudentForm";
import StudentsList from "./StudentsList";
export default function Main() {
  return (
    <main>
      <AddStudenForm />
      <StudentsList />
    </main>
  );
}
