import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-dynamic',
  templateUrl: './dynamic.component.html',
  styleUrls: ['./dynamic.component.scss'],
})
export class DynamicComponent {
  dynamicList = [
    {
      userImage: '../../assets/user-1.png',
      user: 'Qu Lili',
      group: 'The two girls group',
      action: 'created',
      project: 'Iteration June',
      date: '3 days ago',
    },
    {
      userImage: '../../assets/user-2.png',
      user: 'Pay little',
      group: 'High force grid-day mission',
      action: 'designed in',
      project: 'Iteration June',
      date: '2 days ago',
    },
    {
      userImage: '../../assets/user-3.png',
      user: 'Lin Dongdong',
      group: 'High force grid-day mission',
      action: 'updated',
      project: 'Iteration June',
      date: '2 days ago',
    },
    {
      userImage: '../../assets/user-4.png',
      user: 'Stars of the week',
      group: 'Project performance',
      action: 'updated',
      project: 'Bran Iteration',
      date: '1 days ago',
    },
    {
      userImage: '../../assets/user-5.png',
      user: 'Zhu-right',
      group: 'Programmer daily',
      action: 'created',
      project: 'New project',
      date: '2 days ago',
    },
    {
      userImage: '../../assets/user-6.png',
      user: 'Lok',
      group: 'Programmer daily',
      action: 'updated',
      project: 'New project',
      date: '2 days ago',
    },
  ];
}
