const cors = require("cors");
const express = require("express");
// const db = require("dotenv").config();

// const uuid = require("uuid/dist/v4");
const { v4: uuidv4 } = require("uuid");

const app = express();

// const db = require("dotenv").config();
// db.connect({
//   secret_key: process.env.SECRET_KEY,
// });
// const db = require("dotenv").config();
require("dotenv").config();
const stripe = require("stripe")(process.env.STRIPE_SECRET_KEY);
//middleware
app.use(express.json());
app.use(cors());

//routes
app.get("/", (req, res) => {
  res.send("Hello World");
});

app.post("/payment", (req, res) => {
  const { product, token } = req.body;
  console.log("Product", product);
  console.log("Price", product.price);
  const IdempotencyKey = uuidv4();

  return stripe.customers
    .create({
      email: token.email,
      source: token.id,
    })
    .then((customer) => {
      stripe.charges.create(
        {
          amount: (product.price * 10) / 72,
          currency: "inr",
          customer: customer.id,
          receipt_email: token.email,
          description: `Purchase ${product.name}`,
          shipping: {
            name: token.card.name,
            address: {
              country: token.card.address_country,
            },
          },
        },
        { IdempotencyKey }
      );
    })
    .then((result) => res.status(200).json(result))
    .catch((err) => console.log(err));
});

//listen
app.listen(8001, console.log("Running at 8001"));
