import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-physical-list',
  templateUrl: './physical-list.component.html',
  styleUrls: ['./physical-list.component.scss']
})
export class PhysicalListComponent implements OnInit {

  public list = [
    'Physical 1',
    'Physical 2',
    'Physical 3',
    'Physical 4',
    'Physical 5',
    'Physical 6',
    'Physical 7',
    'Physical 8',
    'Physical 9',
    'Physical 10',
  ];

  constructor() { }

  ngOnInit() {
  }

}
