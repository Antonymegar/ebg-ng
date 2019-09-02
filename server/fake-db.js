const Rental = require('./models/rental');

class FakeDb {
  constructor() {
    this.rentals = [{
                  title: "Blue-springs",
                  city: "Nairobi",
                  street: "Thika Road",
                  category: "HotelRoom",
                  image: "https://booksync-jerga-prod.s3.amazonaws.com/uploads/rental/image/5/image.jpeg",
                  bedrooms: 4,
                  shared: true,
                  description: "Very nice Hotel in the Outskirts of the city.",
                  dailyRate: 43
                  },
                  {
                  title: "Ole-Sereni",
                  city: "Nairobi",
                  street: "Moi Avenue",
                  category: "apartment",
                  image: "https://booksync-jerga-prod.s3.amazonaws.com/uploads/rental/image/5/image.jpeg",
                  bedrooms: 1,
                  shared: false,
                  description: "Very nice apartment in center of the city.",
                  dailyRate: 11
                  },
                  {
                  title: "Aberdare Ranges",
                  city: "Nyeri",
                  street: "Kamakwa",
                  category: "house",
                  image: "https://booksync-jerga-prod.s3.amazonaws.com/uploads/rental/image/5/image.jpeg",
                  bedrooms: 5,
                  shared: true,
                  description: "Old Cottage inthe middle of a National park.",
                  dailyRate: 23
}]
  }
  async cleandb(){
    await Rental.deleteMany({});
  }
  pushRentalsToDb(){
    this.rentals.forEach((rental) => {
      const newRental = new Rental(rental);

      newRental.save();
    })
  }
  seedDb() {
    this.cleandb();
    this.pushRentalsToDb();
  }
}

module.exports = FakeDb;
