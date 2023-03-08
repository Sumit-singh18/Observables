import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/internal/Observable';
import { Shops } from './Shop.model';
@Injectable({ providedIn: 'root' })
export class Shopdata {
  students_data: Shops[] = [
    {
      Category: "Ice Cream Shop",
      Shop_name: 'Berries Gelato',
      Speciality: 'Gelato',
      Address: '42 Elm Street, Anytown USA',
      Average_price: 125,
    },
    {
      Category: "Ice Cream Shop",
      Shop_name: 'Blissey Candy Bar',
      Speciality: 'Custard Base',
      Address: '17 Maple Drive, Smallville UK',
      Average_price: 105,
    },
    {
      Category: "Ice Cream Shop",
      Shop_name: 'Cold Brew Coolo',
      Speciality: 'Chochlate Puff',
      Address: '29 Rose Lane, Pleasantville Canada',
      Average_price: 125,
    },
    {
      Category: "Ice Cream Shop",
      Shop_name: 'Deligerous Ice Creams',
      Speciality: 'Sherbet',
      Address: '13 Oak Avenue, Littleton Australia',
      Average_price: 195,
    },
    {
      Category: "Ice Cream Shop",
      Shop_name: 'Delicious Treats',
      Speciality: 'Rolled Ice Cream',
      Address: '6 Cedar Court, Riverside USA',
      Average_price: 225,
    },
    {
      Category: "Ice Cream Shop",
      Shop_name: 'Dew Ice Cream',
      Speciality:'Philadelphia Style',
      Address: '14 Poplar Road, Hillcrest UK',
      Average_price: 405,
    },
    {
      Category: "Ice Cream Shop",
      Shop_name: 'Ice Cream Man',
      Speciality: 'Faloodeh',
      Address: '8 Birch Lane, Forest Hill UK',
      Average_price: 325,
    },
    {
      Category: "Ice Cream Shop",
      Shop_name: 'Ice Cream Sandwicher',
      Speciality: 'Soft Serve',
      Address: '3 Cherry Street, Sunnydale Canada',
      Average_price: 105,
    },
    {
      Category: "Ice Cream Shop",
      Shop_name: 'Home Made Ice Cream',
      Speciality: ' Snow Cream',
      Address: '11 Spruce Close, Woodville USA',
      Average_price: 155,
    },
    {
      Category: "Ice Cream Shop",
      Shop_name: 'The Sweet Spot',
      Speciality: 'Frozen Yogurt',
      Address: '14 Poplar Road, Hillcrest UK',
      Average_price: 90,
    },
    {
      Category: "Ice Cream Shop",
      Shop_name: 'Scoops & Smiles',
      Speciality: 'Frozen Yogurt',
      Address: '89 Pine Road',
      Average_price: 100,
    },
    {
      Category: "Ice Cream Shop",
      Shop_name: 'Frozen Bliss',
      Speciality: 'Frozen Yogurt',
      Address: '76 Birch Lane',
      Average_price: 60,
    },
    {
      Category: "Ice Cream Shop",
      Shop_name: 'Creamy Delights',
      Speciality: 'Frozen Yogurt',
      Address: '42 Maple Street',
      Average_price: 70,
    },
    {
      Category: "Ice Cream Shop",
      Shop_name: 'Dunkin Donuts Ice Cream',
      Speciality: 'Frozen Yogurt',
      Address: '8 Willow Way',
      Average_price: 80,
    },
    {
      Category: "Ice Cream Shop",
      Shop_name: 'Sugar Rush',
      Speciality: 'Frozen Yogurt',
      Address: '11 Spruce Street      ',
      Average_price: 190,
    },
    
  ];
  public getStudents(): any {
    const studentObservable = new Observable((observer) => {
      setTimeout(() => {
        observer.next(this.students_data);
      }, 1000);
    });
    return studentObservable;
  }
}
