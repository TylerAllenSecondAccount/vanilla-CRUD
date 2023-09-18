let data = [
  { id: 1, name: 'Tyler', email: 'Tylerallen@Live.com' },
  { id: 2, name: 'Billy', email: 'donothack@Live.com' },
];

let readAll = () => {
  localStorage.setItem('object', JSON.stringify(data));
  let tableData = document.querySelector('.data-table');

  let myObject = localStorage.getItem('object');
  let objectData = JSON.parse(myObject);
  let ele = '';

  objectData?.map((e) => {
    ele += `
        <tr>
            <td>${e.name}</td>
            <td>${e.email}</td>
            <td>
                    <button onClick={edit(${e.id})}>Edit</button>
                    <button onClick={deleteUser(${e.id})}>Delete</button>
            </td>
        </tr>

    `;
  });

  tableData.innerHTML = ele;
};

// delete
const deleteUser = (id) => {
  data = data.filter((e) => {
    return e.id !== id;
  });
  readAll();
  console.log(data);
};

// edit

const update = () => {
  let id = parseInt(document.querySelector('.id').value);
  let name = document.querySelector('.uname').value;
  let email = document.querySelector('.uemail').value;
  let index = data.findIndex((e) => e.id === id);
  data[index] = { id, name, email };
  document.querySelector('.edit_form').style.display = 'none';
  readAll();
};

const edit = (id) => {
  document.querySelector('.edit_form').style.display = 'block';

  let obj = data.find((e) => e.id === id);

  document.querySelector('.uname').value = obj.name;
  document.querySelector('.uemail').value = obj.email;
  document.querySelector('.id').value = obj.id;
};

// create
const create = () => {
  document.querySelector('.create_form').style.display = 'block';
  document.querySelector('.add_div').style.display = 'none';
};

function add() {
  let name = document.querySelector('.name').value;
  let email = document.querySelector('.email').value;

  let newObj = { id: 3, name: name, email: email };
  data.push(newObj);

  document.querySelector('.create_form').style.display = 'none';
  document.querySelector('.add_div').style.display = 'inline';

  readAll();
}

// edit
