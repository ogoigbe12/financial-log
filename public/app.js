import { Invoice } from './classes/Invoice.js';
import { payment } from './classes/payment.js';
import { ListTemplates } from './classes/ListTemplates.js';
const form = document.querySelector('.new-item-form');
//inputs
const type = document.querySelector('#type');
const tofrom = document.querySelector('#tofrom');
const details = document.querySelector('#details');
const amount = document.querySelector('#amount');
//list template instance
const ul = document.querySelector('ul');
const list = new ListTemplates(ul);
form.addEventListener('submit', (e) => {
    e.preventDefault();
    let docs;
    if (type.value === 'invoice') {
        docs = new Invoice(tofrom.value, details.value, amount.valueAsNumber);
    }
    else {
        docs = new payment(tofrom.value, details.value, amount.valueAsNumber);
    }
    list.render(docs, type.value, 'end');
});
