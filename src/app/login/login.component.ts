import { Component } from '@angular/core';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {

  aim="Your Perfect Banking Partner"
  data="enter ac no"
  acno=''
  psw=''

userDetails:any={
  1000:{acno:1000,username:"anu",password:123},
  1001:{acno:1001,username:"amal",password:123},
  1002:{acno:1002,username:"arun",password:123},
  1003:{acno:1003,username:"megha",password:123}
}


constructor(){

}
ngOnit():void{

}
login(){
  alert('login clicked')
}
acnoChange(event:any){
 this.acno=event.target.value
}
pswChange(event:any){
  this.psw=event.target.value
  console.log(this.psw);
  
}

}
