import { HttpBackend, HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Product } from 'src/app/models/product.model';

@Injectable({
  providedIn: 'root'
})

export class ProductService{

  constructor(private http: HttpClient){}

  api: string = "http://localhost:8090/products"

  getAll(): Observable<any>{
    return this.http.get(this.api)
  }

  getById(id: string): Observable<any>{
    return this.http.get(this.api+"/"+id)
  }

  getByName(name: string): Observable<any>{
    return this.http.get(this.api+"/packagename/"+name)
  }

  getFeatured(): Observable<any>{
    return this.http.get(this.api+"/featured")
  }

  getByCategory(category: string): Observable<any>{
    return this.http.get(this.api+"/category/"+category)
  }

  postProduct(product: Product){
    return this.http.post(this.api,product)
  }

  updateProduct(product: Product){
    return this.http.put(this.api,product)
  }

  deleteProduct(id: string){
    return this.http.delete(this.api+"/"+id)
  }

}
