import { Component } from '@angular/core';

@Component({
  selector: 'app-welcome',
  templateUrl: './welcome.page.html',
  styleUrls: ['./welcome.page.scss'],
})
export class WelcomePage {
  courses = [
    { title: 'All Courses', description: 'Explore all available courses.' },
    { title: 'Coding Basics', description: 'Learn the fundamentals of coding.' },
    { title: 'Game Development', description: 'Create your own games.' },
    { title: 'Web Development', description: 'Build amazing websites.' },
  ];

  constructor() {}
}
