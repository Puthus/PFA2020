import { Component, OnInit } from '@angular/core';
import { Travail } from '../../../modules/travail';
import { TravailService } from '../../../service/travail.service';
import { Monument } from '../../../modules/monument';

@Component({
  selector: 'ngx-list-travail',
  templateUrl: './list-travail.component.html',
  styleUrls: ['./list-travail.component.scss'],
})
export class ListTravailComponent implements OnInit {
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
      typeTravail: {
        title: 'Type Travail',
        type: 'number',
      },
      monument: {
        title: 'Monument',
        type: 'number',
        valuePrepareFunction: (data: Monument) => {
          return data.id + ' - ' + data.nom;
        },
      },
    },
  };
  source: Travail[];
  constructor(private service: TravailService) {
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
