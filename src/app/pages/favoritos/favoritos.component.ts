import { Component, OnInit } from '@angular/core';
import { of } from 'rxjs';
import { map } from 'rxjs/operators';

@Component({
  selector: 'app-favoritos',
  templateUrl: './favoritos.component.html',
  styleUrls: ['./favoritos.component.scss']
})
export class FavoritosComponent implements OnInit {

  public isCollapsed = true;
  public nums = of(1, 2, 3, 4, 5);
  constructor() { }

  ngOnInit(): void {
    this.nums.pipe(
      map(num => `hola ${num}`)
    ).subscribe(nun => console.log(nun));
  }

}
