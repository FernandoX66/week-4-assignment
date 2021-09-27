import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-ongoing-projects',
  templateUrl: './ongoing-projects.component.html',
  styleUrls: ['./ongoing-projects.component.scss'],
})
export class OngoingProjectsComponent {
  ongoingProjects = [
    {
      icon: '../../assets/alipay-icon.png',
      technology: 'Alipay',
      description: 'It´s an inner thing that they can´t reach and can´t reach.',
      customer: 'Science moving bricks',
    },
    {
      icon: '../../assets/angular-icon.png',
      technology: 'Angular',
      description:
        'Hoe is a good thing, maybe the best, good things will not die.',
      customer: 'The whole group os Wu Ya',
    },
    {
      icon: '../../assets/ant-design-icon.png',
      technology: 'Ant Design',
      description:
        'There are so many pubs in the town, but she walked into my pub.',
      customer: 'いくつかの会社',
    },
    {
      icon: '../../assets/pro-icon.png',
      technology: 'Ant Design Pro',
      description:
        'At that time, I only thought about what i wanted, and I didn´t want to.',
      customer: 'Programmer everyday',
    },
    {
      icon: '../../assets/bootstrap-icon.png',
      technology: 'Bootstrap',
      description: 'Winter is coming.',
      customer: 'High-force design team',
    },
    {
      icon: '../../assets/react-icon.png',
      technology: 'React',
      description:
        'Life is like a box of chocolates, and the results are often unexpected.',
      customer: 'Lying you to learn computer',
    },
  ];
}
