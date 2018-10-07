import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-grid',
  templateUrl: './grid.component.html',
  styleUrls: ['./grid.component.scss']
})
export class GridComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

  getCardData() {
    return [{
      title: 'Card1',
      body: 'This data belongs to card1',
      cardImg: '../../assets/images/card1.png'
    },
    {
      title: 'Card2',
      body: 'This data belongs to card2',
      cardImg: '../../assets/images/card2.png'
    },
    {
      title: 'Card3',
      body: 'This data belongs to card3',
      cardImg: '../../assets/images/card3.jpg'
    },
    {
      title: 'Card4',
      body: 'This data belongs to card4',
      cardImg: '../../assets/images/card4.jpg'
    }];
  }
}
