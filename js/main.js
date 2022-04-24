const NameInput = document.getElementById('NameInput');
const EmailInput = document.getElementById('EmailInput');
const MobileInput = document.getElementById('MobileInput');
const DepartureInput = document.getElementById('DepartInput');
const form = document.querySelector('.form');
const output = document.querySelector('.table__output');
const modalEdit = document.querySelector('.modal-edit');
const NameInput2 = document.getElementById('NameInput2');
const EmailInput2 = document.getElementById('EmailInput2');
const MobileInput2 = document.getElementById('MobileInput2');
const DepartInput2 = document.getElementById('DepartInput2');
const secondForm = document.querySelector('.form-second')
const searchInput = document.getElementById('SearchInput');
const cardInput = document.querySelector('.cards__input')
const talbeHead = document.querySelectorAll('.table__head');

let arr = [];

form.addEventListener('submit', (e) => {
  e.preventDefault();

  let nameVal = NameInput.value;
  let emailVal = EmailInput.value;
  let mobileVal = MobileInput.value;
  let DepartVal = DepartureInput.value;

  
  arr.push({
    name: nameVal,
    email: emailVal,
    number: mobileVal,
    depart: DepartVal,
    id: arr.length
  })
  
  show(arr);
  
  NameInput.value = '';
  EmailInput.value = '';
  MobileInput.value = '';
  DepartureInput.value = '';
})


function show(arr) {
  output.innerHTML = '';
  arr.forEach(item => {
    let tr = document.createElement('tr');
    tr.className = 'border'
    tr.innerHTML = `
      <td>${item.name}</td>
      <td>${item.email}</td>
      <td>${item.number}</td>
      <td>${item.depart}</td>
      <td>
        <div class="d-flex edit-wrapper">
          <button class="me-2 edit-btn" onclick = "editIt(${item.id})" data-bs-toggle="modal" data-bs-target="#exampleModal2"><i class='bx  bx-edit-alt'></i></button>
          <button class='remove-btn' onclick = "remove(${item.id})"><i class='bx bx-x'></i></button>
        </div>
      </td>
    `;

    output.appendChild(tr);

  })
}


function remove(id){
  if(confirm ("Are you sure?")){
    arr = arr.filter((item) => {
      if(id != item.id){
        return item;}
    })
    show(arr);
  }
}


function editIt(id) {
  arr.forEach((item, index) => {
    if (id === index) {
      NameInput2.value = item.name
      EmailInput2.value = item.email
      MobileInput2.value = item.number; 
      DepartInput2.value = item.depart;

      editValue(id);
    }
  })
}

  function editValue(id){
    secondForm.addEventListener('submit', (e) => {
      e.preventDefault();

      arr[id].name = NameInput2.value;
      arr[id].email = EmailInput2.value;
      arr[id].number = MobileInput2.value;
      arr[id].depart = DepartInput2.value;

      show(arr);
    })
  }


searchInput.addEventListener("keyup", (e) => {
  let searchVal = searchInput.value.toLowerCase();
  output.innerHTML = '';
  arr.forEach(item =>{
    if(item.name.includes(searchVal)){
      searchShow(item)
    }
  })
});

function searchShow(item){
  let tr = document.createElement('tr');
  tr.className = 'border'
  tr.innerHTML = `
    <td class='table-data'>${item.name}</td>
    <td class='table-data'>${item.email}</td>
    <td class='table-data'>${item.number}</td>
    <td class='table-data'>${item.depart}</td>
    <td>
      <div class="d-flex edit-wrapper">
        <button class="me-2 edit-btn" onclick = "editIt(${item.id})" data-bs-toggle="modal" data-bs-target="#exampleModal2"><i class='bx  bx-edit-alt'></i></button>
        <button class='remove-btn' onclick = "remove(${item.id})"><i class='bx bx-x'></i></button>
      </div>
    </td>
  `;
  output.appendChild(tr);
}


searchInput.addEventListener('keydown', ()=>{
  cardInput.style.outline = '2px solid #333996';
})

searchInput.addEventListener('blur', ()=>{
  cardInput.style.outline = '1px solid #c4c4c4';
})



