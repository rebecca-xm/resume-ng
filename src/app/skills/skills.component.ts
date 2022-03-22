import { Component, OnInit } from '@angular/core';
import { Skills } from '../model/skills.model';

@Component({
  selector: 'app-skills',
  template: ` <div class="container-fluid p-0">
    <section class="resume-section p-3 p-lg-5 d-flex flex-column" id="skills">
      <div class="my-auto">
        <h2 class="mb-5">Skills</h2>

        <div class="subheading mb-3">Programming Languages &amp; Tools</div>
        <ul class="list-inline list-icons">
          <li *ngFor="let icons of skills" class="list-inline-item">
            <i class="devicons {{ icons.icon }}"></i>
          </li>
        </ul>

        <div class="subheading mb-3">Workflow</div>
        <ul class="fa-ul mb-0">
          <li>
            <i class="fa-li fa fa-check"></i>
            Responsive Design
          </li>
          <li>
            <i class="fa-li fa fa-check"></i>
            Cross Browser Testing &amp; Debugging
          </li>
          <li>
            <i class="fa-li fa fa-check"></i>
            Agile Development
          </li>
        </ul>
      </div>
    </section>
  </div>`,
  // styleUrls: ['./skills.component.css']
})
export class SkillsComponent implements OnInit {
  skills: Skills[];
  constructor() {
    this.skills = [
      {
        icon: 'devicons-html5',
      },
      {
        icon: 'devicons-css3',
      },
      {
        icon: 'devicons-javascript',
      },
      {
        icon: 'devicons-sass',
      },
      {
        icon: 'devicons-bootstrap',
      },
      {
        icon: 'devicons-firebase',
      },
      {
        icon: 'devicons-git',
      },
      {
        icon: 'devicons-github',
      },

      {
        icon: 'devicons-react',
      },
      {
        icon: 'devicons-angular',
      },
    ];
  }

  ngOnInit(): void {}
}
