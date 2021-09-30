import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  title = 'AngularTask1';

  cards = [
    {
      title: 'FREE',
      price: '0$',
      point_1: {
        desc: 'Single User',
        bold: false,
      },
      point_2: '5 GB Storage',
      point_3: 'Unlimited Public Projects',
      point_4: 'Community Access',
      point_5: {
        desc: 'Unlimited Private Projects',
        color: true,
      },
      point_6: {
        desc: 'Dedicated Phone Support',
        color: true,
      },
      point_7: {
        desc: 'Free Subdomain',
        color: true,
      },
      point_8: {
        desc: 'Monthly Status Reports',
        color: true,
      },
    },
    {
      title: 'PLUS',
      price: '9$',
      point_1: {
        desc: '5 Users',
        bold: true,
      },
      point_2: '50 GB Storage',
      point_3: 'Unlimited Public Projects',
      point_4: 'Community Access',
      point_5: {
        desc: 'Unlimited Private Projects',
        color: false,
      },
      point_6: {
        desc: 'Dedicated Phone Support',
        color: false,
      },
      point_7: {
        desc: 'Free Subdomain',
        color: false,
      },
      point_8: {
        desc: 'Monthly Status Reports',
        color: true,
      },
    },
    {
      title: 'PRO',
      price: '49$',
      point_1: {
        desc: 'Unlimited Users',
        bold: true,
      },
      point_2: '150GB Storage',
      point_3: 'Unlimited Public Projects',
      point_4: 'Community Access',
      point_5: {
        desc: 'Unlimited Private Projects',
        color: false,
      },
      point_6: {
        desc: 'Dedicated Phone Support',
        color: false,
      },
      point_7: {
        desc: 'Unlimited Free Subdomain',
        color: false,
      },
      point_8: {
        desc: 'Monthly Status Reports',
        color: false,
      },
    },
  ];
}
