import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder } from '@angular/forms';
import { BrandService } from 'src/app/service/brand.service';

@Component({
  selector: 'app-brand',
  templateUrl: './brand.component.html',
  styleUrls: ['./brand.component.css']

})
export class BrandComponent implements OnInit{
    form! : FormGroup;
    brands! :any[];

 constructor(private fb : FormBuilder,public brandService : BrandService ){}

  ngOnInit(): void {
      this.form = this.fb.group({
        name: ['']
  });    
   this.getAllBrands();
  }
  createBrand(){
  console.log(this.form.value);
    this.brandService.saveBrand(this.form.value).subscribe((t)=>{
      console.log(t);
    });
    
  }
  getAllBrands(){
    this.brandService.getBrands().subscribe(t=>{
      console.log(t);
      this.brands = t.list;
    });   
  }
}
