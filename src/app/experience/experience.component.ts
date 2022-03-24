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
        <h2 class="mb-5" [ngStyle]="styleCSS">Experience</h2>
        <div
          *ngFor="let exp of experiencelist"
          (click)="showexpdet(exp)"
          class="resume-item d-flex flex-column flex-md-row mb-5"
        >
          <div class="resume-content mr-auto">
            <h3
              (click)="changeback(exp)"
              [ngStyle]="{
                'background-color':
                  toggle2 && exp.id == changebg ? '#487eb0' : '#fff'
              }"
              class="mb-0"
            >
              {{ exp.mansione }}
            </h3>
            <div
              class="subheading mb-3"
              [style.background-color]="toggle ? '#fff' : '#222f3e'"
            >
              {{ exp.azienda }}
            </div>
            <div [style.display]="exp.id == showdetail ? 'block' : 'none'">
              <p>{{ exp.descrizione }}</p>
            </div>
          </div>
          <div class="resume-date text-md-right">
            <span class="text-danger" (click)="highlightexp(exp)">{{
              exp.periodo
            }}</span>
          </div>
        </div>
      </div>
    </section>
  </div>`,
  // styleUrls: ['./experience.component.css']
})
export class ExperienceComponent implements OnInit {
  experiencelist: Experience[];
  showexp: string;
  showdetail: string;
  changebg: string;
  styleCSS: Object;
  toggle = true;
  toggle2 = false;
  status = 'Enable';
  constructor() {
    this.styleCSS = {
      color: '#487eb0',
      'font-size': '80px',
    };
    this.showdetail = 'none';
    this.showexp = 'none';
    this.changebg = 'none';
    this.experiencelist = [
      {
        id: '1',
        mansione: 'Frontend Developer',
        azienda: 'Edgemony',
        descrizione: `Sviluppo di 'RooMatch', una web app stile social network che consente all'utente di trovare il coinquilino più adatto alle proprie esigenze. Realizzata con metodologia agile con le seguenti tecnologie: React JS, SASS/SCSS, Axios, Redux.`,
        periodo: 'Feb 2022',
        stato: '',
      },
      {
        id: '2',
        mansione: 'Collaboratrice',
        azienda: 'FEDITALIAIMPRESE',
        descrizione: ``,
        periodo: 'Mar 2019 - Dic 2020',
        stato: 'old',
      },
      {
        id: '3',
        mansione: 'Coordinatrice di eventi',
        azienda: 'S.G. Management',
        descrizione: ``,
        periodo: 'Set 2017 - Gen 2019',
        stato: 'old',
      },
      {
        id: '4',
        mansione: 'Addetta ai rapporti con gli enti pubblici',
        azienda: 'BigShow Management',
        descrizione: ``,
        periodo: 'Set 2015 - Dic 2016',
        stato: 'old',
      },
      {
        id: '5',
        mansione: 'Addetta alle pubbliche relazioni',
        azienda: 'Multiservices',
        descrizione: ``,
        periodo: 'Ago 2010 - Lug 2015',
        stato: 'old',
      },
    ];
  }

  showexpdet(obj: Experience) {
    this.showdetail = obj.id;
    // alert('---> ' + obj.mansione);
  }

  changeback(obj: Experience) {
    this.toggle2 = !this.toggle2;
    this.changebg = obj.id;
    // this.status = this.toggle ? 'Enable' : 'Disable';
  }

  highlightexp(obj: Experience) {
    this.toggle = !this.toggle;
  }

  ngOnInit(): void {}
}
