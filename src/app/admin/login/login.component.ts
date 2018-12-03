import { Component, OnInit } from '@angular/core';
import { AuthService } from '../../services/auth.service';


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  loginMessage="";
  errorClass:boolean=false;
  showMessage:boolean=false;

  constructor( private Auth: AuthService) { }

  ngOnInit() {
  }

  loginUser(event) {
    this.showMessage=false;
    event.preventDefault()
    const target = event.target;
    const username = target.querySelector('#username').value;
    const password = target.querySelector('#password').value;

    console.log(username, password)

    this.Auth.getUserDetails(username, password).subscribe(data => {
      console.log("data: ",data);
      this.loginMessage=data.message;
      this.showMessage = true;

     if (data.success) {
       this.errorClass = false;
       window.location.href = '/admin';
      } else {
       this.errorClass = true;
      }
    })

    // console.log(event);
  }

}

/*commande PHP*/
// Angular6-GUI/src/app/php$ php -S 0.0.0.0:1234

//ng start : ng serve --proxy-config proxyconfig.json
