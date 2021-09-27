import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-team',
  templateUrl: './team.component.html',
  styleUrls: ['./team.component.scss'],
})
export class TeamComponent {
  teams = [
    {
      logo: '../../assets/alipay-icon.png',
      name: 'Scientific mov...',
    },
    {
      logo: '../../assets/angular-icon.png',
      name: 'Wu Yanzu',
    },
    {
      logo: '../../assets/ant-design-icon.png',
      name: 'Secondary 3 G...',
    },
    {
      logo: '../../assets/pro-icon.png',
      name: 'Programmer e...',
    },
    {
      logo: '../../assets/bootstrap-icon.png',
      name: 'High-force des...',
    },
    {
      logo: '../../assets/react-icon.png',
      name: 'Lie to learn co...',
    },
  ];
}
