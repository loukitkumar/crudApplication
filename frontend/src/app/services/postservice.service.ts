import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { catchError } from "rxjs/operators";
import { Post } from '../model';
import { HttpClient,HttpHeaders } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class PostserviceService {
 
  private url="http://localhost:3000";
  private posturl="http://localhost:3000/post";
  
  constructor(private http:HttpClient) { }
  
  httpOptions: { headers: HttpHeaders } = {
    headers: new HttpHeaders({ "Content-Type": "application/json" }),
  }; 

  fetchAll():Observable<Post[]>{
    return this.http.get<Post[]>(this.url,this.httpOptions);
  }
  
  createPost(formdata:Partial<Post>):Observable<Post>{
       
        return this.http.post<Post>(this.posturl,
          {title:formdata.title,body:formdata.body},
          this.httpOptions);
          
  }
  deletePost(id: any):Observable<any>{
    return this.http.delete(`http://localhost:3000/delete/${id}`);
  }

  updatePost(formdata:Partial<Post>,id:any):Observable<any>{

     return this.http.put<any>(`http://localhost:3000/update/${id}`,
     {title:formdata.title,body:formdata.body},
     this.httpOptions
     );

  }
}
