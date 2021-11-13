import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
@Component({
  selector: 'app-catalog_configuration',
  templateUrl: './catalog_configuration.component.html',
  styleUrls: ['./catalog_configuration.component.css']
})
export class Catalog_configurationComponent implements OnInit {

  constructor(private router: Router) { }

  ngOnInit(): void {
  }
  action(){this.router.navigate(['/classification'])}  
}
