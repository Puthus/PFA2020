import { Component, OnInit, Inject, ChangeDetectorRef } from '@angular/core';
import {
  NbAuthResult,
  getDeepFromObject,
  NbAuthService,
  NB_AUTH_OPTIONS,
} from '@nebular/auth';
import { Router } from '@angular/router';
import { Region } from '../../../modules/region';
import { RegionService } from '../../../service/region.service';

@Component({
  selector: 'ngx-add-user',
  templateUrl: './add-user.component.html',
  styleUrls: ['./add-user.component.scss'],
})
export class AddUserComponent implements OnInit {
  redirectDelay = 0;
  showMessages: any = {};
  strategy = 'username';

  submitted = false;
  errors: string[] = [];
  messages: string[] = [];
  user: any = {};
  regions: Region[];
  constructor(
    protected service: NbAuthService,
    protected regionService: RegionService,
    @Inject(NB_AUTH_OPTIONS) protected options = {},
    protected cd: ChangeDetectorRef,
    protected router: Router
  ) {
    this.redirectDelay = this.getConfigValue('forms.register.redirectDelay');
    this.showMessages = this.getConfigValue('forms.register.showMessages');
    this.strategy = this.getConfigValue('forms.register.strategy');
  }
  ngOnInit(): void {
    this.regionService
      .getAll()
      .subscribe((data) => (this.regions = data['list']));
    // console.log(this.roles);
  }

  register(): void {
    this.errors = this.messages = [];
    this.submitted = true;
    this.user.role = new Array<string>();
    this.user.role.push(this.user.roleid);
    console.log(JSON.stringify(this.user));
    this.service
      .register(this.strategy, this.user)
      .subscribe((result: NbAuthResult) => {
        this.submitted = false;
        if (result.isSuccess()) {
          this.messages = result.getMessages();
        } else {
          this.errors = result.getErrors();
        }

        const redirect = result.getRedirect();
        if (redirect) {
          setTimeout(
            () => this.router.navigateByUrl(redirect),
            this.redirectDelay
          );
        }
        this.cd.detectChanges();
      });
  }

  getConfigValue(key: string): any {
    return getDeepFromObject(this.options, key, null);
  }
}
