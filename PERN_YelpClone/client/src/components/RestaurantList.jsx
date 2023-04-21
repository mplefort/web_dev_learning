import React from "react";

const RestaurantList = () => {
  return (
    <div className="list-group">
      <table className="table table-dark table-hover">
        <thead className="bg-primary">
          <tr>
            <th>Restaurant</th>
            <th>Location</th>
            <th>Price Range</th>
            <th>Ratings</th>
            <th>Edit</th>
            <th>Delete</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>mcdonalds</td>
            <td>New York</td>
            <td>$$</td>
            <td>Rating</td>
            <td>
              <button className="btn btn-warning">Edit</button>
            </td>
            <td>
              <button className="btn btn-danger">Delete</button>
            </td>
          </tr>
          <tr>
            <td>mcdonalds</td>
            <td>New York</td>
            <td>$$</td>
            <td>Rating</td>
            <td>
              <button className="btn btn-warning">Edit</button>
            </td>
            <td>
              <button className="btn btn-danger">Delete</button>
            </td>
          </tr>
          <tr>
            <td>mcdonalds</td>
            <td>New York</td>
            <td>$$</td>
            <td>Rating</td>
            <td>
              <button className="btn btn-warning">Edit</button>
            </td>
            <td>
              <button className="btn btn-danger">Delete</button>
            </td>
          </tr>
        </tbody>
      </table>
    </div>
  );
};

export default RestaurantList;
