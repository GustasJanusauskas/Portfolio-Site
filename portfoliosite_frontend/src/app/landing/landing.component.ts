import { Component, OnInit } from '@angular/core';
import { Project } from '../classes/project';
import { PROJECT_DATA } from '../classes/projectdata';

@Component({
  selector: 'app-landing',
  templateUrl: './landing.component.html',
  styleUrls: ['./landing.component.css']
})
export class LandingComponent implements OnInit {
  projects: Project[] = PROJECT_DATA;

  constructor() { 

  }

  ngOnInit(): void {
    for (let index = 0; index < this.projects.length; index++) {
      this.projects[index].carouselSpeed = 4000 + Math.random() * 4000;
    }
  }

}