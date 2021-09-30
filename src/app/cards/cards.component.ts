import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-cards',
  templateUrl: './cards.component.html',
  styleUrls: ['./cards.component.css'],
})
export class CardsComponent implements OnInit {
  @Input() myData = {
    title: '',
    price: '',
    point_1: {
      desc: '',
      bold: true,
    },
    point_2: '',
    point_3: '',
    point_4: '',
    point_5: {
      desc: '',
      color: true,
    },
    point_6: {
      desc: '',
      color: true,
    },
    point_7: {
      desc: '',
      color: true,
    },
    point_8: {
      desc: '',
      color: true,
    },
  };
  // @Input() myData = '';
  constructor() {}

  ngOnInit(): void {}
}
