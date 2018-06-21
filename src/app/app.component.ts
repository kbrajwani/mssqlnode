import { Component,OnInit } from '@angular/core';
import { FormsModule } from "@angular/forms";
import { UserserviceService } from './userservice.service';
import { User_Class } from './user';



@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'app';

  email_id:string;
  password:string;
  token:string;
  datetime:string;
  constructor(public data: UserserviceService){}

  updateuser(){

    this.data.updateuser(new User_Class(this.email_id,this.password,this.token,this.datetime)).subscribe(
      (data)=>{alert("success");},   
        function(error){alert(error);},			
        function(){
      }			
      );
  }
  adduser()
  {
    // console.log("function");

    // const fd = new FormData();

    // fd.append('UserId',this.email_id);
    // fd.append("password",this.password);
    // fd.append("token",this.token);
    // fd.append("lastlogindatetime",this.datetime);
    
    
    // console.log(fd);
    
    //this.data.addUser(fd).subscribe(
      this.data.addUser(new User_Class(this.email_id,this.password,this.token,this.datetime)).subscribe(
    (data)=>{alert("success");},   
      function(error){alert(error);},			
      function(){
    }			
    );
    
  }

}
