// Use a reducer to create a new object that shows how many users there are for each location
// Result should be usersByLocation = { seattle: 1 , portland:1, oakland:2}

const users = [
  {
    username: "edie",
    location: "seattle",
  },
  {
    username: "tomah",
    location: "portland",
  },
  {
    username: "jerome",
    location: "oakland",
  },
  {
    username: "solace",
    location: "oakland",
  },
];

const usersByCity = users.reduce(
  (acc, user) => ({
    ...acc,
    [user.location]: (acc[user.location] || 0) + 1,
  }),
  { oakland: 100, byzantium: 1000 }
);

console.log(usersByCity);

const usersByLocation = (arr) => {
  return arr.reduce(
    (acc, user) => ({
      ...acc,
      [user.location]: (acc[user.location] || 0) + 1,
    }),
    {}
  );
};

console.log(usersByLocation(users));

// You have an array of objects representing products in a shopping cart. Each object has two properties: name (string) and price (number). Your task is to use the reduce function to calculate the total price of all the products in the cart.

const cart = [
  { name: "Product 1", price: 20 },
  { name: "Product 2", price: 30 },
  { name: "Product 3", price: 15 },
  { name: "Product 4", price: 25 },
];

const totalPrice = cart.reduce((acc, cart) => acc + [cart.price], 0);

console.log(totalPrice);

// const totalPrice = cart.reduce((accumulator, product) => {
//     return accumulator + product.price;
//   }, 0);
