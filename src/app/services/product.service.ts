import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, Subject } from 'rxjs'; // Add this import for Subject

@Injectable({
  providedIn: 'root'
})
export class ProductService {

  public cartAddedSubject = new Subject<boolean>();

  constructor(private http: HttpClient) { }

  getAllProducts(): Observable<any[]> {
    debugger;
    return this.http.get<any[]>('http://onlinetestapi.gerasim.in/api/Ecomm/GetAllProducts');
  }

  addToCart(obj: any):  Observable<any> {
    debugger;
    return this.http.post<any>('http://onlinetestapi.gerasim.in/api/Ecomm/AddToCart', obj);
  }

  getCartItemsByCustId(CustId: number) {
    return this.http.get<any[]>('http://onlinetestapi.gerasim.in/api/Ecomm/GetCartProductsByCustomerId?id=' +CustId);
  }
}










