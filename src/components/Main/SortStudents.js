import React, { useState, useEffect } from "react";
export default function SortStudents(props) {
  const { students, filterData, setFilterData } = props;

  const [filters, setFilters] = useState({
    sort_course: "",
    sort_group: "",
  });

  const [searchQuery, setSearchQuery] = useState(""); // initial search query
  //  let course = students.map((el) => {
  //     return(
  //         <option>{el.course}</option>
  //     )
  //  });

  //   let courses_arr = students.filter((el) => el.course);
  //   function removeDuplicates(arr) {
  //     return arr.filter((item,
  //         index) => arr.indexOf(item) === index);
  // }
  //   courses_arr = removeDuplicates();

  // let courses = students.map((el, index) => {
  //   return <option value={students.}></option>
  // })

  let courses = [...new Set(students.map((item) => item.course))];
  let courses_render = courses.map((el) => {
    return (
      <option value={el} key={el}>
        {el}
      </option>
    );
  });

  let groups = [...new Set(students.map((item) => item.group))];
  let groups_render = groups.map((el) => {
    return (
      <option value={el} key={el}>
        {el}
      </option>
    );
  });

  useEffect(() => {
    setFilterData(
      students.filter((el) => {
        if (filters.sort_course && el.course != filters.sort_course) {
          return false;
        }
        if (filters.sort_group && el.group != filters.sort_group) {
          return false;
        }
        if (searchQuery) {
          const searchTerms = searchQuery.toLowerCase().split(" ");
          let isMatch = false;
          for (const term of searchTerms) {
            if (
              Object.values(el).some((value) => {
                if (
                  typeof value === "string" &&
                  value.toLowerCase().includes(term)
                ) {
                  return true;
                }
                return false;
              })
            ) {
              isMatch = true;
              break;
            }
          }
          if (!isMatch) {
            return false;
          }
        }
        return true;
      })
    );
  }, [filters, students, searchQuery]);

  const handleSearchChange = (e) => {
    console.log("searching" + e.target.value);
    setSearchQuery(e.target.value);
  };

  const handleFilterchange = (e) => {
    const { name, value } = e.target;
    setFilters({ ...filters, [name]: value });

    console.log("FILTERS: " + filters.sort_course);
    console.log("FILTERS: " + filters.sort_group);
  };

 
  return (
    <div className="col-md-5 d-flex">
      <select
        id="sort_course"
        name="sort_course"
        className="form-control"
        value={filters.course}
        onChange={handleFilterchange}
      >
        <option value="">Visos programos</option>
        {courses_render}
      </select>
      <select
        id="sort_group"
        name="sort_group"
        className="form-control "
        value={filters.group}
        onChange={handleFilterchange}
      >
        <option value="">Visos grup??s</option>
        {groups_render}
      </select>

      <input
        type="text"
        className="form-control"
        value={searchQuery}
        onChange={handleSearchChange}
        placeholder="Paie??ka"
      />
    </div>
  );
}
