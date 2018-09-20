import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import { FormGroup, FormControl, Validators, FormBuilder, ReactiveFormsModule } from '@angular/forms';
import { User } from '../../models/user'
import { DataService } from '../../services/data.service';
import { Observable } from 'rxjs';
import { GridDataResult } from '@progress/kendo-angular-grid';

@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.css'],
  encapsulation: ViewEncapsulation.None

})
export class FormComponent implements OnInit {
  public users: User[];
  countries: any[];
  country: string = '';
  public value: Date = new Date();
  registrationForm: FormGroup;
  firstName = new FormControl('');
  lastName = new FormControl('');
  birthDate = new FormControl(this.value);
  sex = new FormControl('');
  email = new FormControl('');
  company = new FormControl('');

  constructor(fb: FormBuilder, private service: DataService) {
    this.registrationForm = fb.group({
      firstName: this.firstName,
      lastName: this.lastName,
      birthDate: this.birthDate,
      country: this.country,
      sex: this.sex,
      email: this.email,
      company: this.company
    });
    
    this.service.getUsers().subscribe(
      (data: any) => this.users = data,
      (error: any) => console.log(error)
    );

    this.service.getCountries().subscribe(
      (data:any) => this.countries = data,
      (error:any) => console.log(error)
    )
   }

  ngOnInit() {
    
  }


  onRegister({value}) {
    this.service.saveUser(value).subscribe(
      (response: any) => {
        console.log(response);
        this.registrationForm.reset();
        this.users.push(value);
      },
      (error: any) => console.log(error)
    );

  }



  


}
