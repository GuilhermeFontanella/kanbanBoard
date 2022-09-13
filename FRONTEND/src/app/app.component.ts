import { Component, OnInit } from '@angular/core';
import { MenuItem } from 'primeng/api';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  title = 'kanbanBoard';
  items: MenuItem[] = [];

  ngOnInit(): void {
    this.items = [
      {label: 'Projects', icon: 'pi pi-fw pi-briefcase', routerLink: '/'},
      {label: 'Open', icon: 'pi pi-fw pi-download', routerLink: '/'},
      {label: 'Undo', icon: 'pi pi-fw pi-refresh', routerLink: '/'}
    ];
  }
}
