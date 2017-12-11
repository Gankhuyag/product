 
import { Component, OnInit } from '@angular/core';
import { Product }    from './product';

@Component({
  selector: 'app-product-form',
  templateUrl: './product-form.component.html',
  styleUrls: ['./product-form.component.css']
})
export class ProductFormComponent  {

  types = ['Really Smart', 'Super Flexible',
            'Super Hot', 'Weather Changer'];

  model = new Product(18, this.types[0], 'IPhone 8 ',12.00, 'Chuck Overstreet');

  submitted = false;

  onSubmit() { this.submitted = true; }

  // TODO: Remove this when we're done
  get diagnostic() { return JSON.stringify(this.model); }

  newProduct() {
    this.model = new Product(42, this.types[0],'Boot', 15.00,'Leather from Mongolia');
  }

  skyDog(): Product {
    let myProduct =  new Product(42, this.types[0],'Boot',
                           18.00,
                           'Leslie Rollover, Fetch any object at any distance');
    console.log('My product is called ' + myProduct.name); // "My hero is called SkyDog"
    return myProduct;
  }

  //////// NOT SHOWN IN DOCS ////////

  // Reveal in html:
  //   Name via form.controls = {{showFormControls(heroForm)}}
  showFormControls(form: any) {
    return form && form.controls['name'] &&
    form.controls['name'].value; // Dr. IQ
  }

  /////////////////////////////

}
