import { Component } from '@angular/core';
import { FormBuilder } from '@angular/forms';
import { Router } from '@angular/router';
import { DataService } from '../Services/data.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {

  aim="Your Perfect Banking Partner"
  data="enter ac no"
  // acno=''
  // psw=''

userDetails:any={
  1000:{acno:1000,username:"anu",password:123},
  1001:{acno:1001,username:"amal",password:123},
  1002:{acno:1002,username:"arun",password:123},
  1003:{acno:1003,username:"megha",password:123}
}


constructor(private router:Router,private ds:DataService,private fb:FormBuilder){}
loginForm=this.fb.group({acno:[''],psw:['']})
ngOnit():void{

}
login(){

    var acno=this.loginForm.value.acno
    var psw= this.loginForm.value.psw
    
    const result= this.ds.login(acno,psw)
    if(result){
      alert('login success')
      this.router.navigateByUrl('dashboard')
    }
    else{
      alert('incorrect username or password')
    }
    }


  //alert('login clicked')
}

//login(a:any,b:any){
  //this.acno=a.value
  //this.psw=b.value

  //var acno=this.acno
  //var psw= this.psw
  //var userDetails=this.userDetails

  //if(acno in userDetails){
   //if(psw==userDetails[acno]["password"]){
    //alert('login success')
  //}
  //else{
    //alert('incorrect password')
  //}
//}
//else{
  //alert('incorrect username')
//}
//alert('login clicked')
//}

//acnoChange(event:any){
 //this.acno=event.target.value
//}
//pswChange(event:any){
  //this.psw=event.target.value
  //console.log(this.psw);
  
//}


