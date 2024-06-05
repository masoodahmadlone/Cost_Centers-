let data = []; // Array to hold table data

function handleFile() {
  const fileInput = document.getElementById('fileInput');
  const file = fileInput.files[0];
  const reader = new FileReader();

  reader.onload = function(event) {
    const fileContent = event.target.result;
    // Process file content, for example, if it's a CSV file
    // Split the content by line and extract data
    const lines = fileContent.split('\n');
    data = []; // Clear previous data
    for (let i = 0; i < lines.length; i++) {
      const columns = lines[i].split(',');
      const [year, inputName, institution, cost_center] = columns; // Assuming ID, Name, Email format
      data.push({ Year, Fund, Institution_department_office, Cost_Center  });
    }
    displayData();
  };

  reader.readAsText(file);
}

function addRecord() {
  const inputField = document.getElementById('inputField');
  const record = inputField.value.trim();
  if (record !== '') {
    const [id, name, email] = record.split(','); // Assuming ID, Name, Email format
    data.push({ year, fund, Cost_Center, Institution_department_office });
    inputField.value = '';
    displayData();
  }
}

// ... (previous code)

function searchTable() {
    const searchInput = document.getElementById('searchInput');
    const searchText = searchInput.value.toLowerCase().trim();
  
    const filteredData = data.filter((record) =>
      record.id.toLowerCase().includes(searchText) ||
      record.name.toLowerCase().includes(searchText) ||
      record.email.toLowerCase().includes(searchText)
    );
  
    displayData(filteredData);
  }
  
  function deleteRecord(index) {
    data.splice(index, 1);
    displayData();
  }
  
  function deleteAllRecords() {
    data = [];
    displayData();
  }
  
  function displayData(filteredData = data) {
    const tableBody = document.getElementById('tableBody');
    tableBody.innerHTML = '';
  
    filteredData.forEach((record, index) => {
      const row = document.createElement('tr');
      row.innerHTML = `
        <td>${record.year}</td> 
        <td>${record.Cost_Center}</td>
        <td>${record.Institution_department_office}</td>
        <td><button onclick="deleteRecord(${index})">Delete</button></td>
      `;
      tableBody.appendChild(row);
    });
  }
  
  // ... (rest of the previous code)

  
function displayData() {
  const tableBody = document.getElementById('tableBody');
  tableBody.innerHTML = '';

  data.forEach((record) => {
    const row = document.createElement('tr');
    row.innerHTML = `
      <td>${record.year}</td>
      <td>${record.Cost_Center}</td>
      <td>${record.Institution_department_office}</td>
      
    `;
    tableBody.appendChild(row);
  });
}

// ... (previous code)

function addRecord() {
    const inputId = document.getElementById('inputId').value.trim();
    const inputName = document.getElementById('inputName').value.trim();
    const inputEmail = document.getElementById('inputEmail').value.trim();
  
    if (inputId !== '' && inputName !== '' && inputEmail !== '') {
      data.push({ id: inputId, name: inputName, email: inputEmail });
      clearInputFields();
      displayData();
    } else {
      alert('Please fill in all fields (ID, Name, Email) to add a record.');
    }
  }
  
  function clearInputFields() {
    document.getElementById('inputId').value = '';
    document.getElementById('inputName').value = '';
    document.getElementById('inputEmail').value = '';
  }
  
  // ... (rest of the previous code)
  