import { MenuLink } from './../model/menu.model';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-menu',
  template: `<nav
    class="navbar navbar-expand-lg navbar-dark bg-danger fixed-top"
    id="sideNav"
  >
    <a class="navbar-brand js-scroll-trigger" routerLink="#page-top">
      <span class="d-block d-lg-none">Start Bootstrap</span>
      <span class="d-none d-lg-block">
        <img
          class="img-fluid img-profile rounded-circle mx-auto mb-2"
          src="assets/img/profile.jpg"
          alt=""
        />
      </span>
    </a>
    <button
      class="navbar-toggler"
      type="button"
      data-toggle="collapse"
      data-target="#navbarSupportedContent"
      aria-controls="navbarSupportedContent"
      aria-expanded="false"
      aria-label="Toggle navigation"
    >
      <span class="navbar-toggler-icon"></span>
    </button>
    <div class="collapse navbar-collapse" id="navbarSupportedContent">
      <ul class="navbar-nav">
        <li *ngFor="let link of linkmenu" class="nav-item">
          <a class="nav-link js-scroll-trigger" routerLink="{{ link.path }}">{{ link.link }}</a>
        </li>
      </ul>
    </div>
  </nav>`,
  // styleUrls: ['./menu.component.css']
})
export class MenuComponent implements OnInit {
  linkmenu: MenuLink[];
  constructor() {
    this.linkmenu = [
      {
        link: 'Home',
        path: '/',
      },
      {
        link: 'Experience',
        path: 'experience',
      },
      {
        link: 'Education',
        path: 'education',
      },
      {
        link: 'Skills',
        path: 'skills',
      },
      {
        link: 'Interests',
        path: 'interests',
      },
      {
        link: 'Projects',
        path: 'projects',
      },
    ];
  }

  ngOnInit(): void {}
}
