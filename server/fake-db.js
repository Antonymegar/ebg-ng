const Rental = require('./models/rental');
const User = require('./models/user');


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
                  street: "Aberdare Range",
                  category: "house",
                  image: "https://booksync-jerga-prod.s3.amazonaws.com/uploads/rental/image/5/image.jpeg",
                  bedrooms: 5,
                  shared: true,
                  description: "Old Cottage inthe middle of a National park.",
                  dailyRate: 23
                }];
                this.users = [{
                  username: "Test User",
                  email:"test@gmail.com",
                  password: "testtest"
                }];
  }
  async cleandb(){
    await User.deleteMany({});
    await Rental.deleteMany({});
  }
  pushDataToDb(){
    const user = new User(this.users[0]);

    this.rentals.forEach((rental) => {
      const newRental = new Rental(rental);
      newRental.user = user;
      user.rentals.push(newRental);
      newRental.save();
    });
    user.save();
  }
  async seedDb() {
    await this.cleandb();
    this.pushDataToDb();
  }
}

module.exports = FakeDb;
