import { CompanyAccount } from './class/CompanyAccount'
import { PeopleAccount } from './class/PeopleAccount'
import { AdminAccount } from './class/AdminAccount'


const peopleAccount: PeopleAccount = new PeopleAccount(1, 'Nath', 10)
console.log(peopleAccount)
peopleAccount.deposit(10);
const companyAccount: CompanyAccount = new CompanyAccount('DIO', 20)
companyAccount.deposit(200);
companyAccount.getLoan(2000);
console.log(companyAccount);

const adminAccount: AdminAccount = new AdminAccount('Duda', 100)
adminAccount.deposit(300);