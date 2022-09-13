import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ProjectsComponent } from './projects.component';
import { DragDropModule } from 'primeng/dragdrop';
import { CardModule } from 'primeng/card';
import { ButtonModule } from 'primeng/button';
import { ProjectsRoutingModule } from './projects-routing.module';
import { DividerModule } from 'primeng/divider';
import { RippleModule } from 'primeng/ripple';
import { DialogModule } from 'primeng/dialog';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { InputTextModule } from 'primeng/inputtext';
import { InputTextareaModule } from 'primeng/inputtextarea';
import { InputMaskModule } from 'primeng/inputmask';


@NgModule({
  declarations: [ ProjectsComponent ],
  exports: [ ProjectsComponent ],
  imports: [
    CommonModule,
    ProjectsRoutingModule,
    DragDropModule,
    CardModule,
    ButtonModule,
    DividerModule,
    RippleModule,
    DialogModule,
    FormsModule,
    ReactiveFormsModule,
    InputTextModule,
    InputTextareaModule,
    InputMaskModule
  ]
})
export class ProjectsModule { }
