import { Component, OnInit } from '@angular/core';

// import { from } from 'rxjs';
import { FormGroup, FormControl } from '@angular/forms';

@Component({
  selector: 'app-add-bussiness',
  templateUrl: './add-bussiness.component.html',
  styleUrls: ['./add-bussiness.component.css']
})
export class AddBussinessComponent implements OnInit {

  BussinessForm = new FormGroup({
    Name: new FormControl(),
    City: new FormControl(),
    Address: new FormControl(),
    Emial: new FormControl(),
    Password: new FormControl()

  });

// model = new Bussiness(18, 'Dr IQ', 'Chuck Overstreet', 'vb', 'hcv', 'sdgfdb');

// submitted = false;

// onSubmit() { this.submitted = true; }

// // TODO: Remove this when we're done
// get diagnostic() { return JSON.stringify(this.model); }
  constructor( ) {

   }
   onSubmit() {
    // TODO: Use EventEmitter with form value
    console.warn(this.BussinessForm.value);
  }

  ngOnInit() {
  }

}
