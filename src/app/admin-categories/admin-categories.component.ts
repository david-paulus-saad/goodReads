import { Component, OnInit ,Inject } from '@angular/core';
import {MatDialog, MatDialogRef, MAT_DIALOG_DATA} from '@angular/material';

@Component({
  selector: 'app-admin-categories',
  templateUrl: './admin-categories.component.html',
  styleUrls: ['./admin-categories.component.css']
})
export class AdminCategoriesComponent implements OnInit {

  constructor(public dialog: MatDialog) { }

  ngOnInit() {
  }
  openDialog(): void {
    const dialogRef = this.dialog.open(DialogAddCategory, {
      width: '250px'
    });

    dialogRef.afterClosed().subscribe(result => {
      console.log('The dialog was closed');
     // this.animal = result;
    });
  }

}

@Component({
  selector: 'dialog-add-category',
  templateUrl: './dialog-add-category.html',
})
export class DialogAddCategory {

  constructor(
    public dialogRef: MatDialogRef<DialogAddCategory>
   ) {}

  onNoClick(): void {
    this.dialogRef.close();
  }

}

