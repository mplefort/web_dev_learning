// import express and start
require("dotenv").config();
const express = require("express");
const db = require("./db/index");
const cors = require("cors");

const app = express();
const port = process.env.PORT || 3001;

// Middleware: this matches all requests so is called first before moving
// to next route matches.
// app.use( (req, res, next) => {
//     console.log("This is called first");
//     next();
// });

app.use(cors());

// Middleware - adds req.body to the req object for Post
app.use(express.json());

// get all restaurants
app.get("/api/v1/restaurants", async (req, res) => {
  try {
    const results = await db.query("SELECT * FROM restaurants");
    // console.log(rows);

    res.status(200).json({
      status: "success",
      results: results.rows.length,
      data: {
        restaurants: results.rows,
      },
    });
  } catch (err) {
    // normally want to send an error status (500)
    console.log(err);
  }
});

// Get a restaurant
app.get("/api/v1/restaurants/:id", async (req, res) => {
  console.log(req.params);

  try {
    // template string - Vulnerable to SQL injection. Use parameterized query instead
    /*
    const result = await db.query(
      `SELECT * FROM restaurants WHERE id = ${req.params.id}`
    );
    */
    const result = await db.query("SELECT * FROM restaurants WHERE id = $1", [
      req.params.id,
    ]);
    res.status(200).json({
      status: "success",
      data: {
        restaurant: result.rows[0],
      },
    });
  } catch (err) {
    console.log(err);
  }
});

// Create Restaurant
app.post("/api/v1/restaurants", async (req, res) => {
  console.log(req.body);

  try {
    const result = await db.query(
      "INSERT INTO restaurants( name, location, price_range) VALUES ($1, $2, $3) RETURNING *",
      [req.body.name, req.body.location, req.body.price_range]
    );

    res.status(201).json({
      status: "success",
      data: {
        restaurant: result.rows[0],
      },
    });
  } catch (err) {
    console.log(err);
  }
});

// Update Restaurant
app.put("/api/v1/restaurants/:id", async (req, res) => {
  try {
    const result = await db.query(
      "UPDATE restaurants SET name = $1, location = $2, price_range = $3 WHERE id = $4 RETURNING *",
      [req.body.name, req.body.location, req.body.price_range, req.params.id]
    );
    res.status(200).json({
      status: "success",
      data: {
        restaurant: result.rows[0],
      },
    });
  } catch (err) {
    console.log(err);
  }
});

// Delete Restaurant
app.delete("/api/v1/restaurants/:id", async (req, res) => {
  try {
    const result = await db.query("DELETE FROM restaurants WHERE id = $1", [
      req.params.id,
    ]);
    res.status(204).json({
      status: "Success",
    });
  } catch (err) {
    console.log(err);
  }
});

// uses "template string" for variable string
app.listen(port, () => {
  console.log(`server listening on port ${port}`);
});
