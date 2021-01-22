import { Component, OnInit, ChangeDetectorRef, Inject } from '@angular/core';
import {
  getDeepFromObject,
  NbAuthResult,
  NB_AUTH_OPTIONS,
  NbAuthService,
} from '@nebular/auth';
import { Router } from '@angular/router';
import { RegionService } from '../../../service/region.service';
import { MonumentService } from '../../../service/monument.service';
import { Region } from '../../../modules/region';

@Component({
  selector: 'ngx-add-monument',
  templateUrl: './add-monument.component.html',
  styleUrls: ['./add-monument.component.scss'],
})
export class AddMonumentComponent implements OnInit {
  redirectDelay = 0;
  showMessages: any = {};
  strategy = 'username';

  submitted = false;
  errors: string[] = [];
  messages: string[] = [];
  user: any = {};
  regions: Region[];
  constructor(
    protected service: MonumentService,
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
  }

  register(): void {
    this.errors = this.messages = [];
    this.submitted = true;
    this.user.role = new Array<string>();
    this.user.role.push(this.user.roleid);
    console.log(JSON.stringify(this.user));
    this.service.save(this.user).subscribe((result: NbAuthResult) => {
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
