import { Component } from '@angular/core';
import { ProductService } from 'src/services/product.service';
import { Product } from '../models/product.model';

@Component({
  selector: 'app-destinations',
  templateUrl: './destinations.component.html',
  styleUrls: ['./destinations.component.scss']
})
export class DestinationsComponent {

  constructor(private service: ProductService){}

  destination: string = '';
  category: string = '';
  date: string = '';
  products_found: Product[] = [];
  showDetails: boolean = false;

  searchDestinations() {

    console.log('Destination:', this.destination);
    console.log('Category:', this.category);
    console.log('Date:', this.date);

    if (this.destination == ''){
      console.log("No destination entered")
    }
    else{
      console.log("Destination entered")
      this.service.getByName(this.destination).subscribe({
        next: (product) => {
          this.products_found = product
        }
      })
      this.showDetails = true;
    }

    if (this.category == ''){
      console.log("No category entered")
    }
    else{
      console.log("Category entered")
      this.service.getByCategory(this.category).subscribe({
        next: (product) => {
          this.products_found = product
        }
      })
      this.showDetails = true;
    }
  }

}
