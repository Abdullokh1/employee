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
const tableBtn = document.querySelectorAll('.table__button');
const upIcon = document.querySelectorAll('.up-icon');
const nameWarning = document.querySelector('.name-warning');
const emailWarn = document.querySelector('.email-warning')
let arr = [

];

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
    if (index === id) {
      NameInput2.value = item.name
      EmailInput2.value = item.email
      MobileInput2.value = item.number; 
      DepartInput2.value = item.depart;

      editValue(index);
    }
  })
}

  function editValue(index){
    let count = 0;
    secondForm.addEventListener('submit', (e) => {
      e.preventDefault();
      if(count == 0){

        arr[index].name = NameInput2.value;
        arr[index].email = EmailInput2.value;
        arr[index].number = MobileInput2.value;
        arr[index].depart = DepartInput2.value;

        show(arr);

        count++;
      }


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

let count = 0;
tableBtn.forEach(el =>{
  el.addEventListener('click', ()=>{
    arr.sort((a,b) =>{
      if(a.name > b.name){
        return 1
      }
      if(a.name < b.name){
        return -1
      }
      return 0
    } )

    count++;

    if(count % 2 == 0){
      arr.sort((a,b) =>{
        if(a.name < b.name){
          return 1
        }
        if(a.name > b.name){
          return -1
        }
        return 0
      })

      show(arr)
    }
  show(arr)

  })
  show(arr)
})


let count2 = 0
upIcon.forEach(item =>{
  item.addEventListener('click', ()=>{
    item.style.transform = 'rotate(180deg)'
    count2++;

    if(count2 % 2 == 0){
    item.style.transform = 'rotate(0)'
    }
  })
})




NameInput.addEventListener('keyup', ()=>{
  
  let nameValue = NameInput.value;
  nameValue.trim();

  try{
    if (nameValue == ''){
      NameInput.style.border = '2px solid #ee0004';
      nameWarning.style.opacity = '1';
      throw 'Name required'
    }
    if (NameInput.value.match(/[0-9]/) != null || NameInput.value.match(/[!@#$%^&*()_+]/) != null){
      NameInput.style.border = '2px solid #ee0004';
      nameWarning.style.opacity = '1';
      throw 'Enter string! '
    } 
    else{
      NameInput.style.border = '2px solid #543FD3';
      nameWarning.innerText = '';
    }
  }
  catch (e){
    nameWarning.innerText = e;
  }
})

EmailInput.addEventListener('keyup', ()=>{
  let email = EmailInput.value;

  try{
    if (email == '') {
      EmailInput.style.border = '2px solid #ee0004';
      emailWarn.style.opacity = '1';
      throw 'Email required'
    } 
    else{
      EmailInput.style.border = '2px solid #543FD3';
      emailWarn.innerText = '';
    }
    if (EmailInput.value.includes('@')){
      EmailInput.style.border = '2px solid #543FD3';
    }
    if (!EmailInput.value.includes('@')){
      EmailInput.style.border = '2px solid #ee0004';
      emailWarn.style.opacity = '1';
      throw 'Use @'
    }
    else{
      EmailInput.style.border = '2px solid #543FD3';
    }
  }
  catch(e){
    emailWarn.innerText = e;
  }
})



NameInput.addEventListener('blur', ()=>{
  NameInput.style.border = '1px solid rgba(102, 102, 102, 0.599)';
  nameWarning.innerText = '';

})

EmailInput.addEventListener('blur', ()=>{
  EmailInput.style.border = '1px solid rgba(102, 102, 102, 0.599)';
  emailWarn.innerText = '';

})
