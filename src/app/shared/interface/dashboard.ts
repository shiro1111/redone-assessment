


export namespace DASHBOARD {

   export interface REWARD_TYPE{
        type: number,
        desc: string,
        img: string
    }

    export interface LOV  {
        rewardType : Array<REWARD_TYPE>
    }
   
    export interface REWARD_PAYLOAD {
        id?: number,
        type: number,
        title: string,
        desc: string,
        img? : string,
        typeDesc?: string
    }
}

export namespace CARD {
    export type DATA_CONFIG = {
        header: string,
        descp: string,
        style: STYLE
    }

    export type STYLE = {
        backgroundColor: string,
        color: string,
        icon: string
    }
}