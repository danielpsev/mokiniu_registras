import React, { useState } from "react";
export default function Student(props) {
  const { obj } = props;
  return <div>Student {obj.name}</div>;
}
