import React, { useEffect, useState } from "react";
/* INSTRUCTION: import the getCats function from the utils/api.js file */
import { getCats } from "../../utils/api";

function Cats() {
  /* INSTRUCTION: create a state variable called cats and set it to an empty array */
  const [cats, setCats] = useState([]);

  /* INSTRUCTION: create a state variable called sort and set it to an empty string */
  const [sort, setSort] = useState("");
  /* INSTRUCTION: create a state variable called page and set it to 1 */
  const [page, setPage] = useState(1);
  /* INSTRUCTION: create a state variable called limit and set it to 5 */
  const [limit, setLimit] = useState(5);
  /* INSTRUCTION: create a useEffect hook that fetches the cats from the back-end server using the getCats function */

  //get cattos w/ sum params
  useEffect(() => {
    getCats(sort, page, limit).then((data) => {
      setCats(data);
    });
  }, [sort, page, limit]);

  //handle sorting
  const handleSortChange = (e) => {
    setSort(e.target.value);
  };

  //handle how many cats shown
  const handlePageChange = (e) => {
    setLimit(e.target.value);
  };

  return (
    <div>
      <h2>Cats</h2>
      <div className="filters">
        <label htmlFor="sort">Sort by:</label>
        {/* INSTRUCTION: create a dropdown menu that allows the user to sort the cats by breed or rating */}
        <select onChange={handleSortChange}>
          <option value="">All</option>
          <option value="breed">Breed</option>
          <option value="rating">Rating</option>
        </select>

        <label htmlFor="limit">Per Page:</label>
        {/* INSTRUCTION: create a dropdown menu that allows the user to limit the number of cats per page */}
        <select onChange={handlePageChange}>
          <option value={3}>3</option>
          <option value={5}>5</option>
          <option value={8}>8</option>
        </select>
      </div>
      {/* INSTRUCTION: create a table that displays the cats. The table should have the following columns: Breed, Coat Length, and Rating. If there are no cats, display a message saying "No cats found." */}
      <table>
        <thead>
          <tr>
            <td>
              <strong>Breed</strong>
            </td>
            <td>
              <strong>Coat Length</strong>
            </td>
            <td>
              <strong>Rating</strong>
            </td>
          </tr>
        </thead>
        <tbody>
          {cats.length > 0 ? (
            cats.map((cats) => (
              <tr>
                <td>{cats.breed}</td>
                <td>{cats.coatLength}</td>
                <td>{cats.rating}</td>
              </tr>
            ))
          ) : (
            <tr>
              <td>No Small Animals Found.</td>
            </tr>
          )}
        </tbody>
      </table>

      {/* INSTRUCTION: create a pagination controls that allows the user to navigate through the cats */}
      <div className="pagination">
        <button
          disabled={page === 1 ? true : false}
          onClick={() => setPage(page - 1)}
        >
          Back
        </button>
        <span>Page {page}</span>

        <button onClick={() => setPage(page + 1)}>Next</button>
      </div>
    </div>
  );
}

export default Cats;
