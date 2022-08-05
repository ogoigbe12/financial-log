import {Invoice} from './classes/Invoice.js'
import {payment} from './classes/payment.js'
import { HasFormatter } from '../src/classes/interfaces/HasFormatter.js'
import { ListTemplates } from './classes/ListTemplates.js'
 
 

 const form = document.querySelector('.new-item-form') as HTMLFormElement

//inputs
const type = document.querySelector('#type') as HTMLSelectElement
const tofrom = document.querySelector('#tofrom') as HTMLInputElement
const details = document.querySelector('#details') as HTMLInputElement
const amount = document.querySelector('#amount') as HTMLInputElement


//list template instance
const ul = document.querySelector('ul')!
const list = new ListTemplates(ul)


form.addEventListener('submit', (e: Event)=> {
    e.preventDefault()

      let docs: HasFormatter
      if (type.value === 'invoice'){
        docs = new Invoice(tofrom.value, details.value, amount.valueAsNumber)
      }else{
        docs = new payment(tofrom.value, details.value, amount.valueAsNumber)
      }

      list.render(docs, type.value, 'end')
}) 


