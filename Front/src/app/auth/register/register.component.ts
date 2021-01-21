import {
  ChangeDetectionStrategy,
  ChangeDetectorRef,
  Component,
  Inject,
  OnInit,
} from "@angular/core";
import {
  getDeepFromObject,
  NbAuthResult,
  NbAuthService,
  NB_AUTH_OPTIONS,
} from "@nebular/auth";
import { Router } from "@angular/router";
import { Role, RoleName } from "../../modules/role";
import { RoleService } from "../../service/role.service";

@Component({
  selector: "ngx-register",
  templateUrl: "./register.component.html",
  styleUrls: ["./register.component.scss"],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class RegisterComponent implements OnInit {
  redirectDelay: number = 0;
  showMessages: any = {};
  strategy: string = "username";

  submitted = false;
  errors: string[] = [];
  messages: string[] = [];
  user: any = {};

  constructor(
    protected service: NbAuthService,
    // protected roleService: RoleService,
    @Inject(NB_AUTH_OPTIONS) protected options = {},
    protected cd: ChangeDetectorRef,
    protected router: Router
  ) {
    this.redirectDelay = this.getConfigValue("forms.register.redirectDelay");
    this.showMessages = this.getConfigValue("forms.register.showMessages");
    this.strategy = this.getConfigValue("forms.register.strategy");
  }
  ngOnInit(): void {
    // this.roleService.getAll().subscribe((data) => (this.roles = data["list"]));
    // console.log(this.roles);
  }

  register(): void {
    this.errors = this.messages = [];
    this.submitted = true;
    this.user.role = new Array<String>();
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
          setTimeout(() => {
            return this.router.navigateByUrl(redirect);
          }, this.redirectDelay);
        }
        this.cd.detectChanges();
      });
  }

  getConfigValue(key: string): any {
    return getDeepFromObject(this.options, key, null);
  }
}
