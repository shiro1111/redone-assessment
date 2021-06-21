import { DASHBOARD } from "src/app/shared/interface/dashboard";

const PREFIX = "DASHBOARD"

export class GET_LOV {
    static readonly type = `[${PREFIX}] GET LOV`;
}

export class ADD_REWARD {
    static readonly type = `[${PREFIX}] ADD REWARD`;
    constructor(public readonly payload: DASHBOARD.REWARD_PAYLOAD) { }
}

export class DELETE_REWARD {
    static readonly type = `[${PREFIX}] DELETE REWARD`;
    constructor(public readonly id: number) { }
}

export class EDIT_REWARD {
    static readonly type = `[${PREFIX}] EDIT REWARD`;
    constructor(public readonly payload: DASHBOARD.REWARD_PAYLOAD) { }
}

