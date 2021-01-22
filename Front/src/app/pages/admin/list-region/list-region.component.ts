import { Component, OnInit } from '@angular/core';
import { Region } from '../../../modules/region';
import { RegionService } from '../../../service/region.service';
import { AdminRegional } from '../../../modules/admin-regional';
import { Monument } from '../../../modules/monument';

@Component({
  selector: 'ngx-list-region',
  templateUrl: './list-region.component.html',
  styleUrls: ['./list-region.component.scss'],
})
export class ListRegionComponent implements OnInit {
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
      libelle: {
        title: 'Latitude',
        type: 'number',
      },
      adminRegional: {
        title: 'Longitude',
        type: 'number',
        valuePrepareFunction: (data: AdminRegional) => {
          return data.nom + ' ' + data.prenom;
        },
      },
      monuments: {
        title: 'Nombre de monuments',
        type: 'number',
        valuePrepareFunction: (data: any[]) => {
          return data.length;
        },
      },
      recenseurs: {
        title: 'Nombre de recenseurs',
        type: 'number',
        valuePrepareFunction: (data: any[]) => {
          return data.length;
        },
      },
    },
  };
  source: Region[];
  constructor(private service: RegionService) {
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
