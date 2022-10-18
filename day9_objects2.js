// Nested Objects 

let customer ={
  name: "Aditya",
  payment: "Credit Card",
  card_no: "1234567812345678",
  address: {
    locality:"Delisle Rd",
    city:"Mumbai",
    pincode: "400011",
    flat_no: "409"
  }
};

console.log(customer.address.locality)

// objects can be nested as many times as they want and is a practical way to use objects 