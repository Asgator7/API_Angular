import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ProductService {

  url = "https://apiprod.mais.com.br/api/ProductSale/FindAllProductsByStore/geisa"

  constructor(private http: HttpClient) { }

  getProdutos(): Observable<any> {
    const body = {
      "search_name": "",
      "page": {
        "limit": 12,
        "page": 1
      }
    }

    const headers = {
      "headers":{
        "x-server-origin": "uslands.shop",
        "Content-Type": "application/json"
      }
    }

    
    return this.http.post<any>(this.url, body, headers)
  }
}
