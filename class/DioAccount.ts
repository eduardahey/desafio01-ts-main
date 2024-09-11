export abstract class DioAccount {
  private name: string
  private readonly accountNumber: number
  private balance: number = 0
  private status: boolean = true

  constructor(name: string, accountNumber: number){
    this.name = name
    this.accountNumber = accountNumber
  }

  setName = (name: string): void => {
    this.name = name
    console.log('Nome alterado com sucesso!')
  }

  getName = (): string => {
    return this.name
  }

  deposit = (valorDepositado: number): void => {
    this.balance = this.balance + valorDepositado;
  }

  withdraw = (valorSolicitado: number): void => {
    if(this.validateStatus() && this.balance > valorSolicitado){
      this.balance - valorSolicitado;
    }
  }

  getBalance = (): void => {
    console.log(this.balance)
  }

  setBalance = (valorAcrescido: number): void => {
    this.balance = this.balance + valorAcrescido;
  }

  public validateStatus = (): boolean => {
    if (this.status) {
      return this.status
    }

    throw new Error('Conta inválida')
  }
}
