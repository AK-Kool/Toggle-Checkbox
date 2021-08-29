import { LightningElement, track } from 'lwc';
import getAccounts from '@salesforce/apex/ToggleApexController.getAccounts';

export default class ToggleDemo extends LightningElement 
{
    @track data;
    connectedCallback()
    {
        getAccounts(
            {
                limitRec: 10
            }
        ).then((result) => {
            this.data = result.map(row => {
                return {...row , ownerName: row.Owner.Name}
            });
        }).catch(error => {
            alert(JSON.stringify(error));
        });
    }
}