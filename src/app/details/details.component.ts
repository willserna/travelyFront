import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { ProductService } from 'src/services/product.service';
import { Product } from '../models/product.model';


@Component({
  selector: 'app-details',
  templateUrl: './details.component.html',
  styleUrls: ['./details.component.scss']
})
export class DetailsComponent implements OnInit {
  constructor(private router: ActivatedRoute, private service: ProductService){}
  product_found: any = {};
  productId!: string;

  ngOnInit(): void {
    this.router.queryParams.subscribe(params => {
      this.productId = params['id'];
      console.log(this.productId)
    })

    this.service.getById(this.productId).subscribe({
      next:
      (product) => {
        this.product_found = product
      }
    })
    // // Get the package ID from the route parameter

      // do not trigger navigation


    // // Fetch package details using the package ID
    // this.packageService.getPackageDetails(this.packageId).subscribe(details => {
    //   this.packageDetails = details;
    // });
  }
}
