import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Select, Store } from '@ngxs/store';
import { Observable, Subject } from 'rxjs';
import { takeUntil } from 'rxjs/operators';
import { DashboardState, DashboardStateModel } from 'src/app/store/dashboard/dashboard.state';
import { DASHBOARD } from '../../interface/dashboard';

@Component({
  selector: 'reward-form',
  templateUrl: './reward-form.component.html',
  styleUrls: ['./reward-form.component.scss']
})
export class RewardFormComponent implements OnInit {

  @Select(DashboardState.rewardType) rewardType$: Observable<Array<DASHBOARD.REWARD_TYPE>>;

  // @Input() group;
  @Input() data: DASHBOARD.REWARD_PAYLOAD;
  @Output() formData = new EventEmitter<any>();

  rewardForm: FormGroup;

  unsubsribe$ = new Subject();
  constructor(
    private store: Store,
    private fb: FormBuilder

  ) { }

  ngOnInit(): void {
    this.initForm();
    this.onFormChange();
  }

  initForm() {
    this.rewardForm = this.fb.group({
      type: [this.data ? this.data.type : '', Validators.required],
      title: [this.data ? this.data.title : '', Validators.required],
      desc: [this.data ? this.data.desc : '', Validators.required],

    })
  }

  onFormChange() {

    this.rewardForm.valueChanges.pipe(
      takeUntil(this.unsubsribe$)
    ).subscribe(res => {
      if (this.rewardForm.valid) {

        const data: DASHBOARD.REWARD_PAYLOAD = {
          desc: this.rewardForm.controls.desc.value,
          title: this.rewardForm.controls.title.value,
          type: this.rewardForm.controls.type.value,
          id: this.data ? this.data.id : null,
          typeDesc: this.data ? this.getDescOfType(this.rewardForm.controls.type.value) : null,
          img: this.data ? this.getImgUrl(this.rewardForm.controls.type.value) : null
        }
        return this.formData.emit(this.rewardForm.valid ? data : null)

      }

    })
  }

  getSelectedType(type: number){
    const rewardTypeList = this.store.selectSnapshot(DashboardState.rewardType);
    if (rewardTypeList && type) {
      return rewardTypeList.find(item => item.type === type);
    }
  }

  getDescOfType(type : number){
    const selected =  this.getSelectedType(type);
    return selected.desc;
  }
  getImgUrl(type: number) {
    const selected =  this.getSelectedType(type);
    return selected.img;
    
  }

  ngOnDestroy(): void {
    this.unsubsribe$.next();
    this.unsubsribe$.complete();
  }
}
