import { Component, OnInit } from '@angular/core';

interface SideNavToggle {
  screenWidth: number;
  collapsed: boolean;
}

@Component({
  selector: 'app-admi-page',
  templateUrl: './admi-page.component.html',
  styleUrls: ['./admi-page.component.scss']
})
export class AdmiPageComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  isExpanded: boolean = false;
}
