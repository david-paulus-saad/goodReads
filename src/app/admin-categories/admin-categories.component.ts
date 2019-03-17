import { Component, OnInit  } from '@angular/core';
import { CategoryService} from '../services/category.service';
import {category} from '../shared/category'
import {MatDialog, MatDialogRef} from '@angular/material';

@Component({
  selector: 'app-admin-categories',
  templateUrl: './admin-categories.component.html',
  styleUrls: ['./admin-categories.component.css']
})
export class AdminCategoriesComponent implements OnInit {

  cat:category[]
err:string
  constructor(public dialog: MatDialog,private catService:CategoryService) { }

  ngOnInit() {
    this.catService.getCategories().subscribe((cats)=>{
     this.cat=cats;
     console.log(this.cat);
    },(err)=>this.err=err)
    }
    //add
  openDialog(): void {
    const dialogRef = this.dialog.open(DialogAddCategory, {
      width: '250px'
    });

    dialogRef.afterClosed().subscribe(result => {
     if(result){
      this.catService.creatCategory(result).subscribe(cat=>{
        this.cat=cat
      },err=> this.err=err);
     } 
      
    });
  }
  updateDialog(id:number): void {
    const dialogRef = this.dialog.open(DialogUpdateCategory, {
      width: '250px'
    });

    dialogRef.afterClosed().subscribe(result => {
      if(result){
        this.catService.updateCategory(result,id).subscribe(cat=>{
          this.cat=cat
        },err=> this.err=err);
      }
     
      
    });
  }

     delete(id:number){
      this.catService.deleteCategory(id).subscribe((doc)=>{
        this.cat=doc
      },err=>this.err=err);
    
     }

 

}
//add 
@Component({
  selector: 'dialog-add-category',
  templateUrl: './dialog-add-category.html',
})
export class DialogAddCategory {
  name=''
  err:string
  constructor(
    public dialogRef: MatDialogRef<DialogAddCategory> ) {}

  onNoClick(): void {
    this.dialogRef.close();
  }
   
 onSubmit() {
    this.dialogRef.close(this.name);
}
}

//update 
@Component({
  selector: 'dialog-update-category',
  templateUrl: './dialog-update-category.html',
})
export class DialogUpdateCategory {
  name=''
  err:string
  constructor(
    public dialogRef: MatDialogRef<DialogUpdateCategory> ) {}

  onNoClick(): void {
    this.dialogRef.close();
  }
   
 onUpdate() {
  this.dialogRef.close(this.name);
}
}
 