import { jsDocComment } from '@angular/compiler';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { CategoryServiceService } from '../../../services/category-service/category-service.service';

@Component({
  selector: 'app-category-create',
  templateUrl: './category-create.component.html',
  styleUrls: ['./category-create.component.css']
})
export class CategoryCreateComponent implements OnInit {

  categoryForm !: FormGroup;
  session: any;
  user: any = {};


  constructor(
    // private router: Router,
    private fb: FormBuilder,
    private localStore: CategoryServiceService

    ) { }

  ngOnInit(): void {

    this.onSubmit();
    // this.loadData();
    this.saveData();
  }



  createForm(): void {
    this.categoryForm = this.fb.group({
    title: ['', [Validators.required]],
    url: ['', [Validators.required]],
    category: ['', [Validators.required]],
    });
  }

  saveData(){
    let data = {id:1, title: 'google map',url: 'google.com', category: 'javascript'};
    localStorage.setItem('session',JSON.stringify(data));
  }

  loadData(){
    let data: any = localStorage.getItem('session');
    this.session = JSON.parse(data);

  }

  onSubmit(){
    console.log("valueeee",this.categoryForm);
  //  console.log(this.categoryForm);
   this.user = Object.assign(this.user,this.categoryForm.value);
  //  localStorage.setItem('User',this.user)
  this.localStore.addUser(this.user);
  this.saveData();
  
  }

  get f() {
    return this.categoryForm.controls;
  }

  resetForm() {
    this.createForm();
  }

}
