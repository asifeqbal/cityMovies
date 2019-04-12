import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { catchError, map, tap } from 'rxjs/operators';
import { Observable} from 'rxjs';


@Injectable({
  providedIn: 'root'
})
export default class RegisterService {
  private customerUrl = 'http://localhost:3000/api/customers';
  private authUrl = 'http://localhost:3000/api/authenticate';

  constructor(private http: HttpClient) { }

  


  customers = [];

  getRemoteCustomers(): Observable<[]>{
    return this.http.get<[]>(this.customerUrl); 		
  }
  addRemoteCustomer(customer):Observable<any>{
    return this.http.post(this.customerUrl,customer);
  }

  getCustomers(){
    return this.customers;
  }

  authRemoteCustomer(validate): Observable<[]>{
    return this.http.get<[]>(this.authUrl+'/'+validate.email+'/'+validate.password); 		
  }

}
