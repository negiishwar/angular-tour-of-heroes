import { Component, OnInit } from '@angular/core'; 
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
	registerForm:FormGroup;
	submitted = false;

  constructor(private formBuilder:FormBuilder) { }

  ngOnInit() {
    

  	this.registerForm= this.formBuilder.group({
  		firstName:['',Validators.required],
  		lastName :['',Validators.required],
  		email    :['',Validators.required],
  		password :['',[Validators.required,Validators.email]],
  		phone    :['',[Validators.required, Validators.minLength(8)]]
  	});

  }
  get f(){return this.registerForm.controls;}

  onSubmit(){
      	this.submitted = true; 

  	if(this.registerForm.invalid){
  		return;
  	}
  	alert('SUCCESS!! :-)')

  }
}
