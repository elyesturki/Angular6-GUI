import { Injectable } from '@angular/core';
import { HttpClient} from '@angular/common/http'


@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor(private http: HttpClient) {}

  getUserDetails(username, password) {
    // get details from HTTP or API return if is correct
    return this.http.post('api/auth.php', 
            JSON.stringify({username, password})
           )
  }
}
