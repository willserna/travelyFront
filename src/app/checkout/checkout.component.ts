import { Component, OnInit, ViewChild } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ProductService } from 'src/services/product.service';
import { PopupComponent } from '../popup/popup.component';


@Component({
  selector: 'app-checkout',
  templateUrl: './checkout.component.html',
  styleUrls: ['./checkout.component.scss']
})
export class CheckoutComponent implements OnInit{

  constructor(private router: ActivatedRoute, private service: ProductService){}

  formData = {
  userName: '',
  userLastName: '',
  idNumber: '',
  email: ''
  }


  product_purchase: any = {};
  productId: string = '';

  ngOnInit(): void {
    this.router.queryParams.subscribe(params => {
      this.productId = params['id'];
      console.log(this.productId)
    })

    this.service.getById(this.productId).subscribe({
      next:
      (product) => {
        this.product_purchase = product
      }
    })


  }

  onConfirmation(): void {
  // User confirmed, proceed with action
  const jsonData = JSON.stringify(this.formData)
  const modelDiv = document.getElementById('dialog');
    if(modelDiv != null){
      modelDiv.style.display = 'none';
    }
  }

  onCancellation(): void {
  // User cancelled, do nothing or handle accordingly
  const modelDiv = document.getElementById('dialog');
    if(modelDiv != null){
      modelDiv.style.display = 'none';
    }
  }

  openConfirmationDialog() {
  // Show Bootstrap modal here
    const modelDiv = document.getElementById('dialog');
    if(modelDiv != null){
      modelDiv.style.display = 'block';
    }


  }








}
