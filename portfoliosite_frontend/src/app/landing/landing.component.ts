import { Component, OnInit } from '@angular/core';
import { Project } from '../classes/project';
import { Experience } from "../classes/experience";
import { PROJECT_DATA } from '../classes/projectdata';
import { EXPERIENCE_DATA } from "../classes/experiencedata";

@Component({
  selector: 'app-landing',
  templateUrl: './landing.component.html',
  styleUrls: ['./landing.component.css']
})
export class LandingComponent implements OnInit {
  projects: Project[] = PROJECT_DATA;
  experiences: Experience[] = EXPERIENCE_DATA;

  constructor() { 

  }

  ngOnInit(): void {
    for (let index = 0; index < this.projects.length; index++) {
      this.projects[index].carouselSpeed = 4000 + Math.random() * 4000;
    }
  }

}