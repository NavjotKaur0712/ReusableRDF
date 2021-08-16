import { Component } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
userForm;

  ngOnInit(){
    this.userForm= new FormGroup({
      id: new FormControl(),
      name: new FormControl(),
      username: new FormControl(),
      });
     }
    
     onSubmit(){
      console.log(this.userForm);
    }

// id;
// name;
// username;
// values:string[]=["Save Data","Fetch Data","Delete Data"];

// form: FormGroup = new FormGroup({
//   'miles': new FormControl(
//     '6700',
//     [Validators.required]),
//   'dropdown':new FormControl(
//       this.values,
//       Validators.required)
//   });


  // get miles() {
  //   return this.form.get('miles');
  // }  
}
