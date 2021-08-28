import { Component, OnInit } from '@angular/core';
import { PostserviceService } from '../services/postservice.service';
import { FormGroup,FormControl,Validators,NgForm } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';

import { Observable } from 'rxjs';
import { Post } from '../model';


@Component({
  selector: 'app-updateform',
  templateUrl: './updateform.component.html',
  styleUrls: ['./updateform.component.css']
})
export class UpdateformComponent implements OnInit {

  constructor(private postservice:PostserviceService,
    private route: ActivatedRoute) { }
  
  postForm!:FormGroup;            
  allpost!:Post[];
  post!:Post;

  ngOnInit(): void {
    this.postForm=this.createform();
    this.postservice.fetchAll().subscribe
    (e=>{
      this.allpost=e;
      this.post=this.allpost.filter(x=>x.id==this.route.snapshot.params.id)[0]; 
      console.log(this.post);
      this.postForm.patchValue(this.post);
    })
  }
  
  createform():FormGroup{
    return new FormGroup({
      id: new FormControl('',[Validators.required]),
      title: new FormControl('',[Validators.required]),
      body: new FormControl('',[Validators.required])
    });
  }

  updateitem(detail: Pick<Post,"title"|"body">){
      this.postservice.updatePost(detail,this.post.id)
      .subscribe(
        e=>console.log(e),
        err=>console.log(err)
      );
  }
}
