import React, { useEffect, useState } from "react";
/* INSTRUCTION: import the getSmallAnimals function from the utils/api.js file */

import { getSmallAnimals } from "../../utils/api";

function SmallAnimals() {
  /* INSTRUCTION: create a state variable called smallAnimals and set it to an empty array */
  const [smallAnimals, setSmallAnimals] = useState([]);
  /* INSTRUCTION: create a state variable called search and set it to an empty string */
  const [search, setSearch] = useState("");

  /* INSTRUCTION: create a useEffect hook that fetches the small animals from the back-end server using the getSmallAnimals function */

  useEffect(() => {
    getSmallAnimals(search).then((data) => {
      setSmallAnimals(data);
    });
  }, [search]);

  /* INSTRUCTION: create a function called handleSearchChange that updates the search state variable */

  //handle search
  const handleSearchChange = (e) => {
    setSearch(e.target.value);
    console.log(search);
  };

  return (
    <div>
      <h2>Small Animals</h2>

      <div className="search-form">
        <label htmlFor="search">Search (by name or animal type):</label>
        {/* INSTRUCTION: create an input field that allows the user to search for small animals by name or animal type */}
        <input
          className="form-control"
          value={search}
          onChange={handleSearchChange}
          placeholder="type sum here"
        ></input>
      </div>

      {/* INSTRUCTION: create a table that displays the small animals. The table should have the following columns: Name, Animal Type, Age, and Gender. If there are no small animals, display a message saying "No small animals found." */}
      <table>
        <thead>
          <tr>
            <td>
              <strong>Name</strong>
            </td>
            <td>
              <strong>Animal Type</strong>
            </td>
            <td>
              <strong>Age</strong>
            </td>
            <td>
              <strong>Gender</strong>
            </td>
          </tr>
        </thead>
        <tbody>
          {smallAnimals.length > 0 ? (
            smallAnimals.map((smallAnimals) => (
              <tr>
                <td>{smallAnimals.name}</td>
                <td>{smallAnimals.animalType}</td>
                <td>{smallAnimals.age}</td>
                <td>{smallAnimals.gender}</td>
              </tr>
            ))
          ) : (
            <tr>
              <td>No Small Animals Found.</td>
            </tr>
          )}
        </tbody>
      </table>
    </div>
  );
}

export default SmallAnimals;
