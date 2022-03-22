import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-education',
  template: ` <div class="container-fluid p-0">
    <section
      class="resume-section p-3 p-lg-5 d-flex flex-column"
      id="education"
    >
      <div class="my-auto">
        <h2 class="mb-5">Education</h2>

        <div class="resume-item d-flex flex-column flex-md-row mb-5">
          <div class="resume-content mr-auto">
            <h3 class="mb-0">Edgemony Coding Bootcamp</h3>
            <div class="subheading mb-3">Diploma</div>
            <div>Frontend Development</div>
            <p>
              Corso intensivo della durata di quattro mesi incentrato su:
              <br />- Sviluppo di applicazioni web usando HTML5, CSS, JavaScript
              e React JS <br />- Sviluppo di applicazioni web con Create React
              App e Next JS <br />- Utilizzo del preprocessore SASS e dei moduli
              CSS per una gestione avanzata della componente stilistica dell'app
              <br />- Lavoro con REST API utilizzando sia Fetch API che librerie
              esterne come Axios <br />- State management di un'applicazione
              web.
            </p>
          </div>
          <div class="resume-date text-md-right">
            <span class="text-danger">Ott 2021 - Feb 2022</span>
          </div>
        </div>

        <div class="resume-item d-flex flex-column flex-md-row">
          <div class="resume-content mr-auto">
            <h3 class="mb-0">Liceo Classico Tommaso Gargallo</h3>
            <div class="subheading mb-3">Diploma di maturità classica</div>
            <p>GPA: 8.83/10.00</p>
            <p>Votazione finale: 100/100</p>
            <p>
              Finalista classificata alla XX edizione delle Olimpiadi dei giochi
              logici linguistici matematici "Gioia MATHESIS"
            </p>
          </div>
          <div class="resume-date text-md-right">
            <span class="text-danger">Set 2005 - Lug 2010</span>
          </div>
        </div>
      </div>
    </section>
  </div>`,
  // styleUrls: ['./education.component.css']
})
export class EducationComponent implements OnInit {
  constructor() {}

  ngOnInit(): void {}
}
