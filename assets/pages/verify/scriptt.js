// Function to read CSV data (using Papa Parse - include the library)
function readCSV(file) {
    return new Promise((resolve, reject) => {
      Papa.parse(file, {
        header: true,
        download: true, 
        complete: results => {
          resolve(results.data);
        },
        error: error => {
          reject(error);
        }
      });
    });
  }
  
  // Function to verify credential ID
  function verifyCredential(csvData, inputID) {
    for (const row of csvData) {
      if (row.credentialID === inputID) {
        return true;
      }
    }
    return false;
  }
  
  // Get the credential ID from the URL query parameters
  const urlParams = new URLSearchParams(window.location.search);
  const credentialID = urlParams.get("credentialID");
  
  // Get reference to the result element
  const resultElement = document.getElementById("result");
  
  // Check if credentialID is found in the URL
  if (credentialID) {
    // Replace with your actual base URL (or get it from an input if needed)
    const baseUrl = "http://127.0.0.1:5500/data.csv";  
    const url = `${baseUrl}?credentialID=${credentialID}`;
  
    readCSV(url)
      .then(csvData => {
        const isVerified = verifyCredential(csvData, credentialID);
        if (isVerified) {
          resultElement.textContent = "Credential is valid!";
          resultElement.className = "valid";
        } else {
          resultElement.textContent = "Credential is invalid.";
          resultElement.className = "invalid";
        }
      })
      .catch(error => {
        console.error("Error reading CSV:", error);
        resultElement.textContent = "An error occurred.";
      });
  } else {
    // Handle the case where the credentialID is not found in the URL
    resultElement.textContent = "Credential ID not found in the URL.";
  }