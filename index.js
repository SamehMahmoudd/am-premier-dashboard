document.addEventListener('DOMContentLoaded', () => {
    // Define the API endpoint
    const apiEndpoint = 'hhttps://am-premier-server.onrender.com/customers'; // Replace with your API URL
  
    // Function to fetch data from the backend
    async function fetchData() {
      try {
        const response = await axios.get(apiEndpoint);
        const data = response.data; // Adjust based on your backend response structure
        console.log(data)
        populateTable(data);
      } catch (error) {
        console.error('Error fetching data:', error);
      }
    }
  
    // Function to populate the table with data
    function populateTable(customers) {
      const tableBody = document.querySelector('#customerTable tbody');
      tableBody.innerHTML = ''; // Clear existing data
  
      customers.forEach((customer, index) => {
        const row = document.createElement('tr');
        
        
        row.innerHTML = `
          <td>${index + 1}</td>
          <td>${customer.firstName}</td>
          <td>${customer.lastName}</td>
          <td>${customer.email}</td>
          <td>${customer.phoneNumber}</td>
          <td>${customer.address}</td>
          <td>${customer.personalQuote}</td>
          <td>${customer.commercialQuote}</td>
          <td>${customer.createdAt}</td>
        `;
        tableBody.appendChild(row);
      });
    }
  
    // Fetch data on page load
    fetchData();
  });
  