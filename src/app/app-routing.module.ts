import { ProjectsComponent } from './projects/projects.component';
import { InterestsComponent } from './interests/interests.component';
import { SkillsComponent } from './skills/skills.component';
import { ExperienceComponent } from './experience/experience.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { EducationComponent } from './education/education.component';
import { HomeComponent } from './home/home.component';

const routes: Routes = [
  {'path': '', component: HomeComponent},
  {'path': 'experience', component: ExperienceComponent},
  {'path': 'education', component: EducationComponent},
  {'path': 'skills', component: SkillsComponent},
  {'path': 'interests', component: InterestsComponent},
  {'path': 'projects', component: ProjectsComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
