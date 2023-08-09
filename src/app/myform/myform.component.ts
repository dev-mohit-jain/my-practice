import { Component, OnInit } from '@angular/core';
import { FormControl, FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-myform',
  templateUrl: './myform.component.html',
  styleUrls: ['./myform.component.css']
})
export class MyformComponent {
  addDataForm: FormGroup | any;
  Submitted: Boolean = false;
  newData: any;
  oldData: any;
  constructor(private fb: FormBuilder) { }
  ngOnInit() {
     this.addDataForm = this.fb.group({
      fname: new FormControl('', [Validators.required]),
      lname: new FormControl('', [Validators.required, Validators.maxLength(6)]),
      email: new FormControl('', [Validators.required, Validators.pattern('^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\\.[a-zA-Z]{2,4}$')]),
      phone: new FormControl('', [Validators.required])
    });
  }

  get f() {
    return this.addDataForm.controls;
  }

  addDataFormSubmit() {
    this.Submitted = true;
    if (this.addDataForm.invalid) {
      console.log("Failed");
      return;

    }
    else {
      const formData = {
        fname: this.addDataForm.value.fname,
        lname: this.addDataForm.value.lname,
        email: this.addDataForm.value.email,
        phone: this.addDataForm.value.phone
      }

      const existingData = JSON.parse(localStorage.getItem('myData') || '[]')

      existingData.push(formData);
      localStorage.setItem('myData', JSON.stringify(existingData))
      this.addDataForm.reset();
      this.Submitted = false;
      alert("Added")
      this.ngOnInit();
    }
  }
}
