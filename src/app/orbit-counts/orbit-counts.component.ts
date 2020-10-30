import { Component, Input, OnInit } from '@angular/core';
import { Satellite } from '../satellite';

@Component({
  selector: 'app-orbit-counts',
  templateUrl: './orbit-counts.component.html',
  styleUrls: ['./orbit-counts.component.css']
})
export class OrbitCountsComponent implements OnInit {
  @Input() satellites: Satellite[];

  types: string[] = ['Space Debris', 'Communication', 'Probe', 'Positioning', 'Space Station', 'Telescope'];

  constructor() { }

  ngOnInit() {
  }

  typeCounter(currentType: string): number {
    return this.satellites.filter(satellite => satellite.type === currentType).length;
  }

}
