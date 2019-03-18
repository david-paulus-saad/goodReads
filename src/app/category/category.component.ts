import { Component, OnInit } from '@angular/core';
import { CategoryService} from '../services/category.service';
import {category} from '../shared/category'
@Component({
  selector: 'app-category',
  templateUrl: './category.component.html',
  styleUrls: ['./category.component.css']
})
export class CategoryComponent implements OnInit {
   cat:category[]
  constructor(private catService:CategoryService) { }

  ngOnInit() {
    this.catService.getCategories().subscribe((cats)=>{
      this.cat=cats;
    })
  }

}
