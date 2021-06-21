import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Actions, ofActionDispatched, ofActionSuccessful, Select, Store } from '@ngxs/store';
import { Observable } from 'rxjs';
import { DASHBOARD } from 'src/app/shared/interface/dashboard';
import { ADD_REWARD, EDIT_REWARD, GET_LOV } from 'src/app/store/dashboard/dashboard.action';
import { DashboardState } from 'src/app/store/dashboard/dashboard.state';

@Component({
  selector: 'app-reward',
  templateUrl: './reward.component.html',
  styleUrls: ['./reward.component.scss']
})
export class RewardComponent implements OnInit {

  displayModal: boolean = false;
  isFormEdit: boolean = false;
  editFormDetail;

  @Select(DashboardState.rewardList) rewardList$: Observable<Array<DASHBOARD.REWARD_PAYLOAD>>

  rewardDetail: DASHBOARD.REWARD_PAYLOAD;

  constructor(
    private store: Store,
    private action: Actions,
    private fb: FormBuilder
  ) { }

  ngOnInit(): void {
    this.getLov();
  }

  getLov() {
    this.store.dispatch(new GET_LOV)
  }

  showModalDialog(data?: DASHBOARD.REWARD_PAYLOAD) {

    this.isFormEdit = data ? true : false;
    this.rewardDetail = data ? data : null;
    this.displayModal = true;
  }


  formData(event) {
    this.rewardDetail = event ? event : null;
  }

  onEdit(event) {
    if (event) {
      this.showModalDialog(event);
    }
  }
  onSubmit() {

    if (this.rewardDetail) {

      if (this.isFormEdit) {
        this.store.dispatch(new EDIT_REWARD(this.rewardDetail))
      } else {
        this.store.dispatch(new ADD_REWARD(this.rewardDetail));
      }
      this.displayModal = false;
    }
  }

}
