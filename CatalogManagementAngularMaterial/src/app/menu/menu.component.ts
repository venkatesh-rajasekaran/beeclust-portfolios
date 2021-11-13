import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
 
@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.css']
})
export class MenuComponent implements OnInit {

   constructor( private router: Router ) { }

  ngOnInit(): void {
  }
  
  action(){this.router.navigate([ '/product_item' ])}
  action1(){this.router.navigate([ '/association_item' ])}
  action2(){this.router.navigate([ '/uom_details' ])}
  action3(){this.router.navigate([ '/classification' ])}
  action4(){this.router.navigate([ '/catalog_configuration' ])}
  action5(){this.router.navigate(['/home_page'])}
  
  }
  
