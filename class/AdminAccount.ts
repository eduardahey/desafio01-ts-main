import { DioAccount } from "./DioAccount"

export class AdminAccount extends DioAccount{
    constructor(name: string,accountNumber: number){
        super(name,accountNumber);
    }

    deposit = (valorDepositado: number): void => {
        this.setBalance(valorDepositado+10);
    }
}