import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Store } from '@ngxs/store';
import { DELETE_REWARD } from 'src/app/store/dashboard/dashboard.action';
import { DASHBOARD } from '../../interface/dashboard';

@Component({
  selector: 'reward-card',
  templateUrl: './reward-card.component.html',
  styleUrls: ['./reward-card.component.scss']
})
export class RewardCardComponent implements OnInit {

  @Input() data: DASHBOARD.REWARD_PAYLOAD;
  @Output() onEdit = new EventEmitter<DASHBOARD.REWARD_PAYLOAD>();
  constructor(
    private store: Store
  ) { }

  ngOnInit(): void {

  }
  onEditReward() {
    this.onEdit.emit(this.data);
  }


  onDeleteReward() {
    this.store.dispatch(new DELETE_REWARD(this.data.id));
  }
}
