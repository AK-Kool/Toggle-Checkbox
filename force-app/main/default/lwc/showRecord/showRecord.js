import { api, LightningElement } from 'lwc';

export default class ShowRecord extends LightningElement 
{
    @api accountName;
    @api owner;
    @api annualRevenue;
    @api sectionName;
    @api activeSectionName;
    hasDisabled = false;

    connectedCallback()
    {
        this.hasDisabled = true;
    }

    handleToggleSection(){

    }

    handleChange(event){
        if (event.target.name === 'checkbox-toggle-19' && event.target.checked)
        {
            let secondInput = this.template.querySelector('[data-id="secondInput"]');
            secondInput.checked = true;
            secondInput.disabled = true;
        }
        else if (event.target.name === 'checkbox-toggle-19' && !event.target.checked)
        {
            let secondInput = this.template.querySelector('[data-id="secondInput"]');
            secondInput.checked = false;
            secondInput.disabled = true;
        }
    }
}