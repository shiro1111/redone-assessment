import { Injectable } from '@angular/core';
import { Action, Selector, State, StateContext } from '@ngxs/store';
import { map, min, tap } from 'rxjs/operators';
import { DASHBOARD } from 'src/app/shared/interface/dashboard';
import { ADD_REWARD, DELETE_REWARD, EDIT_REWARD, GET_LOV } from './dashboard.action';
import { DashboardService } from './dashboard.service';

export class DashboardStateModel {
    lov: DASHBOARD.LOV;
    rewardList: Array<DASHBOARD.REWARD_PAYLOAD>

}

@State<DashboardStateModel>({
    name: 'DashboardState',
    defaults: {
        lov: null,
        rewardList: []
    }
})
@Injectable()
export class DashboardState {
    constructor(private dashboardService: DashboardService) { }
    @Selector()
    static rewardType(state: DashboardStateModel) {
        return state.lov?.rewardType ? state.lov.rewardType : [];
    }

    @Selector()
    static rewardList(state: DashboardStateModel) {
        return state.rewardList ? state.rewardList : [];
    }

    @Action(GET_LOV)
    public getLov({ getState, patchState, dispatch }: StateContext<DashboardStateModel>) {
        return this.dashboardService.getLov().pipe(
            map(res => {
                patchState({
                    lov: res ? res.lov : null
                })
            })
        )
    }

    @Action(ADD_REWARD)
    public addReward({ getState, patchState, dispatch }: StateContext<DashboardStateModel>, { payload }: ADD_REWARD) {

        const _state = getState();
        const uid = Math.floor(Math.random() * 9999);
        payload = { ...payload, id: uid };

        let _rewardList = _state.rewardList ? _state.rewardList : [];
        _rewardList.length < 0 ? [..._rewardList, payload] : _rewardList.push(payload);

        return patchState({
            rewardList: _rewardList
        })
    }

    @Action(DELETE_REWARD)
    public deleteReward({ getState, patchState, dispatch }: StateContext<DashboardStateModel>, { id }: DELETE_REWARD) {
        const _state = getState();
        const _rewardList = _state.rewardList.filter(item => item.id != id);

        return patchState({
            rewardList: _rewardList
        })
    }

    @Action(EDIT_REWARD)
    public editReward({ getState, patchState, dispatch }: StateContext<DashboardStateModel>, { payload }: EDIT_REWARD) {
        const _state = getState();
        const selectedType = _state.lov?.rewardType ? _state.lov.rewardType.find((item , i ) => item.type == payload.type) : null;
        payload ={
            ...payload,
            img: selectedType.img,
            typeDesc: selectedType.desc
        }
        const _rewardIndex = _state.rewardList.findIndex(item => item.id == payload.id);
        const _newRewardList = _state.rewardList;
        _newRewardList[_rewardIndex] = payload;
        
        return patchState({
            rewardList: _newRewardList
        })
    }

}