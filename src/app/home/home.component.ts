import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  template: ` <div class="container-fluid p-0">
    <section class="resume-section p-3 p-lg-5 d-flex d-column" id="about">
      <div class="my-auto">
        <h1 class="mb-0">
          Rebecca
          <span class="text-danger">Mollica</span>
        </h1>
        <div class="subheading mb-5">
          Siracusa, SR 96100 · (+39) 339-4129408 ·
          <a class="text-danger" href="mailto:name@email.com"
            >rebecca.mollicaxm@gmail.com</a
          >
        </div>
        <p class="mb-5">
          {{ paragraphhome }}
        </p>
        <ul class="list-inline list-social-icons mb-0">
          <li class="list-inline-item">
            <a href="https://www.linkedin.com/in/rebecca-mollica">
              <span class="fa-stack fa-lg">
                <i class="fa fa-circle fa-stack-2x"></i>
                <i class="fa fa-linkedin fa-stack-1x fa-inverse"></i>
              </span>
            </a>
          </li>
          <li class="list-inline-item">
            <a href="https://github.com/rebecca-xm">
              <span class="fa-stack fa-lg">
                <i class="fa fa-circle fa-stack-2x"></i>
                <i class="fa fa-github fa-stack-1x fa-inverse"></i>
              </span> 
            </a>
          </li>
        </ul>
      </div>
    </section>
  </div>`,
  // styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  paragraphhome: string;
  constructor() {
    this.paragraphhome = `Appassionata di tecnologia da sempre, ho finalmente colto l'occasione per mettermi alla prova e dimostrare il mio valore nel settore della programmazione. Sono una persona mossa da una forte motivazione e da un'inesauribile sete di conoscenza, che dalle pregresse esperienze lavorative ha appreso l'importanza di comunicare e lavorare in team.`;
  }

  ngOnInit(): void {}
}
