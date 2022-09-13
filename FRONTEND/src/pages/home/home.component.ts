import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { MenuItem } from 'primeng/api';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
  visibleSidebar1: any;
  projects: any[] = [];

  constructor(
    private router: Router
  ) { }

  ngOnInit(): void {
    this.projects = [
      {
        code: '123',
        name: 'Projeto 1',
        status: 'Ativo',
        members: '10'
      },
      {
        code: '123',
        name: 'Projeto 1',
        status: 'Ativo',
        members: '10'
      },
      {
        code: '123',
        name: 'Projeto 1',
        status: 'Ativo',
        members: '10'
      },
      {
        code: '123',
        name: 'Projeto 1',
        status: 'Ativo',
        members: '10'
      },
    ]
  }

  goToProject(project: any): void {
    this.router.navigate([`projects/${project.code}`]);
  }

}
