import { Component, OnInit } from '@angular/core';
import {MatDialog, MatDialogRef} from '@angular/material';
import {author} from '../shared/author'
import {AuthorService} from '../services/author.service'
import {AuthService} from '../services/auth.service'
@Component({
  selector: 'app-admin-authors',
  templateUrl: './admin-authors.component.html',
  styleUrls: ['./admin-authors.component.css']
})
export class AdminAuthorsComponent implements OnInit {

  authors:author[]
   err:string
   username:string
  constructor(public dialog: MatDialog,private catService:AuthorService,
    private authService:AuthService) { }
  logout(){
    if(this.authService.isLoggedIn()){
      this.authService.logOut()
    }
    /**
     * 
     *  if(this.authService.isLoggedIn()) {
    this.authService.getUsername().subscribe((name)=>{
      this.username=name;
    })
  }
     */
    
  }
  ngOnInit() {
    if(this.authService.isLoggedIn()) {
      this.authService.getUsername().subscribe((name)=>{
        this.username=name;
      })
    }
    this.catService.getAuthors().subscribe((cats)=>{
      console.log("author",cats)
     this.authors=cats;
    },(err)=>this.err=err)
    }
    //add
  openDialog(): void {
    const dialogRef = this.dialog.open(DialogAddAuthor, {
      width: '250px'
    });

    dialogRef.afterClosed().subscribe(result => {
      console.log("add this author",result)
     if(result){
      this.catService.createAuthor(result).subscribe(cat=>{
        console.log("author",cat)

        this.authors=cat
      },err=> this.err=err);
     } 
      
    });
  }
  updateDialog(id:number): void {
    const dialogRef = this.dialog.open(DialogUpdateAuthor, {
      width: '250px'
    });

    dialogRef.afterClosed().subscribe(result => {
      if(result){
        this.catService.updateAuthor(id,result).subscribe(cat=>{
          console.log("author",cat)

          this.authors=cat
        },err=> this.err=err);
      }
     
      
    });
  }

     delete(id:number){
      this.catService.deleteAuthor(id).subscribe((doc)=>{
        this.authors=doc
      },err=>this.err=err);
    
     }


}
//add 
@Component({
  selector: 'dialog-add-author',
  templateUrl: './dialog-add-author.html',
})
export class DialogAddAuthor {
  author={fname:'',lname:'',birth_date:'',author_photo:''}
  err:string
  constructor(
    public dialogRef: MatDialogRef<DialogAddAuthor> ) {}

  onNoClick(): void {
    this.dialogRef.close();
  }
   
 onSubmit() {
    this.dialogRef.close(this.author);
}
}

//update 
@Component({
  selector: 'dialog-update-author',
  templateUrl: './dialog-update-author.html',
})
export class DialogUpdateAuthor {
  author={fname:'',lname:'',dob:''}
  err:string
  constructor(
    public dialogRef: MatDialogRef<DialogUpdateAuthor> ) {}

  onNoClick(): void {
    this.dialogRef.close();
  }
   
 onUpdate() {
  this.dialogRef.close(this.author);
}
}
