import { Component, Input, OnInit } from '@angular/core';
import { Satellite } from '../satellite';

@Component({
  selector: 'app-orbit-counts',
  templateUrl: './orbit-counts.component.html',
  styleUrls: ['./orbit-counts.component.css']
})
export class OrbitCountsComponent implements OnInit {
  @Input() satellites: Satellite[];

  types: string[];

  constructor() { }

  ngOnInit() {
  }

  storeTypes(): boolean {
    for (let i = 0; i < this.satellites.length; i++) {
      if (!this.types.includes(this.satellites[i].type)) {
        this.types.push(this.satellites[i].type);
      }
    }
    console.log(this.types);
    return true;
  }

  typeCounter(currentType: string): number {
    let count = 0;

    for (let i = 0; i < this.types.length; i++) {
      if (this.types[i].toLowerCase() === currentType.toLowerCase()) {
        count++;
      }
    }

    return count;
  }

}
