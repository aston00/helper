document.getElementById('button1').addEventListener('click', loadCustomer);

document.getElementById('button2').addEventListener('click', loadCustomers);
//laod single
function loadCustomer(e){
  let xhr = new XMLHttpRequest();

  xhr.open('GET', 'customer.json', true);

  xhr.onload = function(){
    if(this.status == 200){
      
      let customer = JSON.parse(this.responseText);

      let output = `
        <ul>
        <li>ID: ${customer.id}</li>
        <li>Name: ${customer.name}</li>
        <li>Company: ${customer.company}</li>
        <li>Phone: ${customer.phone}</li>
        </ul>
      `;

      document.getElementById('customer').innerHTML = output;
    }
  }
  xhr.send();
}
//Customers
function loadCustomers(e){
  let xhr = new XMLHttpRequest();

  xhr.open('GET', 'customers.json', true);

  xhr.onload = function(){
    if(this.status == 200){
      
      let customers = JSON.parse(this.responseText);

      let output = '';
      customers.forEach(function(customer){
        output += `
        <ul>
        <li>ID: ${customer.id}</li>
        <li>Name: ${customer.name}</li>
        <li>Company: ${customer.company}</li>
        <li>Phone: ${customer.phone}</li>
        </ul>
      `;
      })
      

      document.getElementById('customers').innerHTML = output;
    }
  }
  xhr.send();
}