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
                    <button>Edit</button>
                    <button>Delete</button>
            </td>
        </tr>

    `;
  });

  console.log(ele);

  tableData.innerHTML = ele;
};

// create

let create = () => {
  document.querySelector('.create_form').style.display = 'block';
  document.querySelector('.add_div').style.display = 'none';
};

function add() {
  let name = document.querySelector('.name').value;
  let email = document.querySelector('.email').value;

  let newObj = { id: 3, name: name, email: email };
  data.push(newObj);

  document.querySelector('.create_form').style = 'block';
  document.querySelector('.add_div').style.display = 'inline';

  readAll();
}

console.log(document.querySelector('.name').value);
