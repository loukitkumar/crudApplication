import { Component, OnInit,ViewChild } from '@angular/core';
import { FormGroup,FormControl,Validators,NgForm } from '@angular/forms';

import { PostserviceService } from '../services/postservice.service';

import { Observable } from 'rxjs';

import { Post } from '../model';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  @ViewChild("formDirective") formDirective!: NgForm;
 

  postForm!:FormGroup;
  allPost!:Observable<Post[]>;

  constructor(private postservice:PostserviceService) { }

  ngOnInit(): void {
    this.postForm=this.createFormGroup();
    this.allPost=this.fetchAll();
  }
  
   
   createFormGroup():FormGroup{
     return new FormGroup({
       title: new FormControl("",[Validators.required]),
       body: new FormControl("",[Validators.required])
     });
   }

   fetchAll():Observable<Post[]>{
     return this.postservice.fetchAll();
   }

   post(formdata:Pick<Post,"title"|"body">):void{
      this.postservice.createPost(formdata).subscribe(e=>{this.allPost=this.fetchAll();console.log(e);});

       
   }
   deleteitem(id:any):void{
     console.log("deleting"+id);
     this.postservice.deletePost(id)
     .subscribe(
       e=>{ this.allPost=this.fetchAll();
      },
      error=>{
       
        console.log(error); 
      });
     
   }
  
}
