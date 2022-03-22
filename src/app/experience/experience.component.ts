import { Component, OnInit } from '@angular/core';
import { Experience } from '../model/experience.model';

@Component({
  selector: 'app-experience',
  template: `<div class="container-fluid p-0">
    <section
      class="resume-section p-3 p-lg-5 d-flex flex-column"
      id="experience"
    >
      <div class="my-auto">
        <h2 class="mb-5">Experience</h2>

        <div
          *ngFor="let exp of experiencelist"
          class="resume-item d-flex flex-column flex-md-row mb-5"
        >
          <div class="resume-content mr-auto">
            <h3 class="mb-0">{{ exp.mansione }}</h3>
            <div class="subheading mb-3">{{ exp.azienda }}</div>
            <p>{{ exp.descrizione }}</p>
          </div>
          <div class="resume-date text-md-right">
            <span class="text-danger">{{ exp.periodo }}</span>
          </div>
        </div>
      </div>
    </section>
  </div>`,
  // styleUrls: ['./experience.component.css']
})
export class ExperienceComponent implements OnInit {
  experiencelist: Experience[];
  constructor() {
    this.experiencelist = [
      {
        mansione: 'Frontend Developer',
        azienda: 'Edgemony',
        descrizione: `Sviluppo di 'RooMatch', una web app stile social network che consente all'utente di trovare il coinquilino più adatto alle proprie esigenze. Realizzata con metodologia agile con le seguenti tecnologie: React JS, SASS/SCSS, Axios, Redux.`,
        periodo: 'Feb 2022',
        stato: '',
      },
      {
        mansione: 'Collaboratrice',
        azienda: 'FEDITALIAIMPRESE',
        descrizione: ``,
        periodo: 'Mar 2019 - Dic 2020',
        stato: '',
      },
      {
        mansione: 'Coordinatrice di eventi',
        azienda: 'S.G. Management',
        descrizione: ``,
        periodo: 'Set 2017 - Gen 2019',
        stato: '',
      },
      {
        mansione: 'Addetta ai rapporti con gli enti pubblici',
        azienda: 'BigShow Management',
        descrizione: ``,
        periodo: 'Set 2015 - Dic 2016',
        stato: '',
      },
      {
        mansione: 'Addetta alle pubbliche relazioni',
        azienda: 'Multiservices',
        descrizione: ``,
        periodo: 'Ago 2010 - Lug 2015',
        stato: '',
      }     
    ];
  }

  ngOnInit(): void {}
}
