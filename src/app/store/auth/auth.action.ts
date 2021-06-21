import { AUTH } from "src/app/shared/interface/auth";

const PREFIX = "AUTH"

export class LOGIN {
    static readonly type = `[${PREFIX}] LOGIN`;
    constructor(public readonly payload: AUTH.LOGIN_PAYLOAD) { }
}

export class LOGOUT {
    static readonly type = `[${PREFIX}] LOGOUT`;
}
