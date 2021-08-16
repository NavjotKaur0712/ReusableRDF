import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { AbstractControl, FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-custom-input',
  templateUrl: './custom-input.component.html',
  styleUrls: ['./custom-input.component.css']
})
export class CustomInputComponent implements OnInit {
@Input() userForm;
 @Output() newEvent = new EventEmitter();
//  @Input() label: string | null = null;
//  @Input() fieldId: string | null = null;
//  @Input() type: 'text' | 'email' | 'password' = 'text';

//  @Input() control;
// @Input() values:string[];
// @Input() control;
// @Input() fieldId:string;
// @Input() Selected:string;
// @Input() label:string;


  ngOnInit(){
   
     }
    
     onSubmit(event){
      return this.newEvent.emit();
    }
}
  
 