import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Rental } from './rental.model';


@Injectable()
export class RentalService {

  private rentals: Rental[] =[{
    id: "1",
    title: "Blue-springs",
    city: "Nairobi",
    street: "Times Sqaure",
    category: "Hotel Room",
    image: "http://via.placeholder.com/350x250",
    bedrooms: 3,
    description: "Very nice apartment",
    dailyRate: 5000,
    shared: false,
    createdAt: "24/12/2017"
  },
  {
    id: "2",
    title: "Ole-sereni",
    city: "Nairobi",
    street: "Main street",
    category: "condo",
    image: "http://via.placeholder.com/350x250",
    bedrooms: 2,
    description: "Very nice apartment",
    dailyRate: 7000,
    shared: true,
    createdAt: "24/12/2017"
  },
  {
    id: "3",
    title: "Medina Palms",
    city: "Mombasa",
    street: "Nyali",
    category: "Luxurios Rooms",
    image: "http://via.placeholder.com/350x250",
    bedrooms: 2,
    description: "Very nice apartment",
    dailyRate: 10000,
    shared: true,
    createdAt: "24/12/2017"
  },
  {
    id: "4",
    title: "Maasai mara",
    city: "Narok",
    street: "Mara",
    category: "house",
    image: "http://via.placeholder.com/350x250",
    bedrooms: 9,
    description: "Very nice apartment",
    dailyRate: 13000,
    shared: true,
    createdAt: "24/12/2017"
}];

public getRentalById(rentalId: string): Observable<Rental>{
  return new Observable<Rental>((observer) => {
    setTimeout(() => {
      const foundRental = this.rentals.find((rental) => {
        return rental.id == rentalId;
      });

      observer.next(foundRental);
    }, 500);
  });
}

public getRentals(): Observable<Rental[]>{
  return new Observable<Rental[]>((observer) =>{
    setTimeout(() => {
      observer.next(this.rentals);
    }, 500);
  });
}

}
