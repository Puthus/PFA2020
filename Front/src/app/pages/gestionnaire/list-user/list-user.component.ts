import { Component, OnInit } from '@angular/core';
import { User } from '../../../modules/user';
import { UserService } from '../../../service/user.service';

@Component({
  selector: 'ngx-list-user',
  templateUrl: './list-user.component.html',
  styleUrls: ['./list-user.component.scss'],
})
export class ListUserComponent implements OnInit {
  settings = {
    add: {
      addButtonContent: '<i class="nb-plus"></i>',
      createButtonContent: '<i class="nb-checkmark"></i>',
      cancelButtonContent: '<i class="nb-close"></i>',
    },
    edit: {
      editButtonContent: '<i class="nb-edit"></i>',
      saveButtonContent: '<i class="nb-checkmark"></i>',
      cancelButtonContent: '<i class="nb-close"></i>',
    },
    delete: {
      deleteButtonContent: '<i class="nb-trash"></i>',
      confirmDelete: true,
    },
    columns: {
      id: {
        title: 'ID',
        type: 'number',
      },
      nom: {
        title: 'Nom',
        type: 'string',
      },
      latitude: {
        title: 'Latitude',
        type: 'number',
      },
      longitude: {
        title: 'Longitude',
        type: 'number',
      },
    },
  };
  source: User[];
  constructor(private service: UserService) {
    this.service.getAll().subscribe((data) => (this.source = data['list']));
  }

  ngOnInit(): void {}

  onDeleteConfirm(event): void {
    if (window.confirm('Are you sure you want to delete?')) {
      event.confirm.resolve();
    } else {
      event.confirm.reject();
    }
  }
}
