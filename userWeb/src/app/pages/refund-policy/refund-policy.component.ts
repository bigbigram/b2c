
import { Component, OnInit } from '@angular/core';
import { ApiService } from 'src/app/services/api.service';
import { UtilService } from 'src/app/services/util.service';

@Component({
  selector: 'app-refund-policy',
  templateUrl: './refund-policy.component.html',
  styleUrls: ['./refund-policy.component.scss']
})
export class RefundPolicyComponent implements OnInit {
  content: any;
  loaded: boolean;
  constructor(
    public api: ApiService,
    public util: UtilService
  ) {
    this.loaded = false;
    this.getPageInfo();
  }

  getPageInfo() {
    const param = {
      id: 4
    };
    console.log('param', param);
    this.api.post_private('v1/pages/getContent', param).then((data: any) => {
      this.loaded = true;
      console.log(data);
      if (data && data.status && data.status == 200 && data.data) {
        this.content = data.data.content;
      }
    }, error => {
      console.log(error);
      this.util.apiErrorHandler(error);
      this.loaded = true;
    }).catch(error => {
      console.log(error);
      this.util.apiErrorHandler(error);
      this.loaded = true;
    });
  }
  ngOnInit(): void {
  }

}
