import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-spinningobject',
  templateUrl: './spinningobject.component.html',
  styleUrls: ['./spinningobject.component.css']
})
export class SpinningobjectComponent implements OnInit {
  @Input() image:string = 'assets/icon.png';
  @Input() size:number = 4;
  @Input() cornerSize: number = 1;

  overall!: string;
  corner!: string;

  top!: string;
  bot1!: string;
  bot2!: string;
  bot3!: string;
  bot4!: string;

  constructor() {}

  //Calculate styles from passed params
  ngOnInit(): void {
    this.overall = `width: ${this.size}em; height: ${this.size}em;`;
    this.corner = `width: ${this.cornerSize}em; height: ${this.cornerSize}em;`;

    const offset = (this.size / 2) - (this.cornerSize / 2);
    this.top = `transform: translate3d(${offset}em,-${offset}em,0em);`;
    this.bot1 = `transform: translate3d(${offset * 2}em,${offset}em,-${offset}em);`;
    this.bot2 = `transform: translate3d(${offset * 2}em,${offset}em,${offset}em);`;
    this.bot3 = `transform: translate3d(0em,${offset}em,-${offset}em);`;
    this.bot4 = `transform: translate3d(0em,${offset}em,${offset}em);`;
  }
}