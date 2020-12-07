import { Component, OnInit } from '@angular/core';
import { ProductService} from '../../services/product.service';

@Component({
  selector: 'app-content',
  templateUrl: './content.component.html',
  styleUrls: ['./content.component.css']
})
export class ContentComponent implements OnInit {

  aux: any 

  constructor(private productService:ProductService) { }

  ngOnInit(): void {
    this.productService.getProdutos()
      .subscribe(resp => {
        this.aux = resp
        console.log(resp)
      })
  }
}
