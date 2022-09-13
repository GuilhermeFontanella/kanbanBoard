import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { PrimeNGConfig } from 'primeng/api';

export interface TaskModel {
  title: string;
  description: string, 
  responsable: string;
  hours: string
}

@Component({
  selector: 'app-projects',
  templateUrl: './projects.component.html',
  styleUrls: ['./projects.component.scss']
})
export class ProjectsComponent implements OnInit {
  backlog: TaskModel[] = [
    { title: 'teste1', description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.', responsable: 'Fulano de Tal', hours: '08:00' },
    { title: 'teste2', description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.', responsable: 'Fulano de Tal', hours: '16:00' },
    { title: 'teste3', description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.', responsable: 'Fulaninho de Tal', hours: '03:00' },
  ] as TaskModel[];
  todo: TaskModel[] = [] as TaskModel[];
  doing: TaskModel[] = [
    { title: 'teste4', description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.', responsable: 'Ciclano Beltrano', hours: '01:00' },
    { title: 'teste5', description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.', responsable: 'Beltrano de Tal', hours: '10:00' }
  ] as TaskModel[]
  done: TaskModel[] = [
    { title: 'teste6', description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.', responsable: 'Fulano de Tal', hours: '03:00' }
  ] as TaskModel[];
  draggedTask: any;
  availableTasks = { teste: ''};
  dragInit: string = '';
  dragDrop: string = '';
  display: boolean = false;
  form!: FormGroup<any>;


  constructor(
    private primengConfig: PrimeNGConfig,
    private formBuilder: FormBuilder,
    private router: Router
    ) { }

  ngOnInit(): void {
    this.primengConfig.ripple = true;
    this.createForm();
  }

  createForm() {
    this.form = this.formBuilder.group({
      title: [],
      description: [],
      responsable: [],
      hours: [, Validators.required],
    })
  }

  dragStart(event: any, task: any, from: string) {
    this.draggedTask = task;
    this.dragInit = from;    
  }

  dragEnd(event: any) {
    // BACKLOG
    if (this.dragInit === 'backlog' && this.dragDrop === 'todo') {
      const index = this.backlog.indexOf(this.draggedTask);
      this.backlog.splice(index, 1);
      this.todo.push(this.draggedTask);
      return;
    } 
    if (this.dragInit === 'backlog' && this.dragDrop === 'doing') {
      const index = this.backlog.indexOf(this.draggedTask);
      this.backlog.splice(index, 1);
      this.doing.push(this.draggedTask);
      return;
    } 
    if (this.dragInit === 'backlog' && this.dragDrop === 'done') {
      const index = this.backlog.indexOf(this.draggedTask);
      this.backlog.splice(index, 1);
      this.done.push(this.draggedTask);
      return;
    } 

    // TODO
    if (this.dragInit === 'todo' && this.dragDrop === 'backlog') {
      const index = this.todo.indexOf(this.draggedTask);
      this.todo.splice(index, 1);
      this.backlog.push(this.draggedTask);
      return;
    } 
    if (this.dragInit === 'todo' && this.dragDrop === 'doing') {
      
      const index = this.todo.indexOf(this.draggedTask);
      this.todo.splice(index, 1);
      this.doing.push(this.draggedTask);
      return;
    } 
    if (this.dragInit === 'todo' && this.dragDrop === 'done') {
      const index = this.todo.indexOf(this.draggedTask);
      this.todo.splice(index, 1);
      this.done.push(this.draggedTask);
      return;
    }

    //DOING 
    if (this.dragInit === 'doing' && this.dragDrop === 'backlog') {
      const index = this.doing.indexOf(this.draggedTask);
      this.doing.splice(index, 1);
      this.backlog.push(this.draggedTask);
      return;
    } 
    if (this.dragInit === 'doing' && this.dragDrop === 'todo') {
      const index = this.doing.indexOf(this.draggedTask);
      this.doing.splice(index, 1);
      this.todo.push(this.draggedTask);
      return;
    } 
    if (this.dragInit === 'doing' && this.dragDrop === 'done') {
      const index = this.doing.indexOf(this.draggedTask);
      this.doing.splice(index, 1);
      this.done.push(this.draggedTask);
      return;
    } 

    // DONE
    if (this.dragInit === 'done' && this.dragDrop === 'backlog') {
      const index = this.done.indexOf(this.draggedTask);
      this.done.splice(index, 1);
      this.backlog.push(this.draggedTask);
      return;
    } 
    if (this.dragInit === 'done' && this.dragDrop === 'todo') {
      const index = this.done.indexOf(this.draggedTask);
      this.done.splice(index, 1);
      this.todo.push(this.draggedTask);
      return;
    } 
    if (this.dragInit === 'done' && this.dragDrop === 'doing') {
      const index = this.done.indexOf(this.draggedTask);
      this.done.splice(index, 1);
      this.doing.push(this.draggedTask);
      return;
    }
  }

  dropPlace(event: any, dropPlace: string) {
    this.dragDrop = dropPlace;
  }

  showDialog() {
    this.display = true;
  }

  closeDialog() {
    this.display = false;
  }

  createNewTask(): void {
    if (this.form.value) {
      const newTask: TaskModel = this.form.value;
      this.backlog.push(newTask);
      this.closeDialog();
    };
  }

  goBack() {
    this.router.navigate(['/']);
  }

}
