import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
})
export class LoginPage implements OnInit {

  constructor() { }

  ngOnInit() {
  }



  Iniciar_session(user:string, pass:string){
    if(user === '' || pass  === ''){
      this.presentAlert('Algunos campos vacios', '', 'Debes ingresar todos los campos.');
    }
    //console.log("hola")  
  }

}
