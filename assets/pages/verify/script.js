// Function to read CSV data (using Papa Parse's promise)
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
  
 
  function verifyCredential(csvData, inputID) {
    for (const row of csvData) {
      if (row.credentialID === inputID) {
        return { name: row.NAME, type: row.TYPE, date:row.DATE }; // Return an object containing both name and type
      }
    }
    return null; // Return null if the credential ID is not found
  }
  

  const credentialIDInput = document.getElementById("credentialID");
  const verifyButton = document.getElementById("verifyButton");
  const resultElement = document.getElementById("result");
  const resultNameElement = document.getElementById("result_name");
  const resultTypeElement = document.getElementById("result_type");
  const resultDateElement = document.getElementById("result_date");

  verifyButton.addEventListener("click", () => {
    const inputID = credentialIDInput.value;
  
    readCSV("data.csv")
      .then(csvData => {
        const credentialInfo = verifyCredential(csvData, inputID);
        if (credentialInfo) {
          const { name, type, date } = credentialInfo;
          resultElement.textContent = `Credential is valid!`;
          resultElement.className = "valid";
  
          // Set the content of result_name and result_type elements
          resultNameElement.textContent = `Name: ${name}`;
          resultTypeElement.textContent = `Type: ${type}`;
          resultDateElement.textContent = `Issue Date: ${date}`;
        } else {
          resultElement.textContent = "Credential is invalid.";
          resultElement.className = "invalid";
  
          // Clear the content of result_name and result_type elements if the credential is invalid
          resultNameElement.textContent = "";
          resultTypeElement.textContent = "";
          resultDateElement.textContent = "";
        }
      })
      .catch(error => {
        console.error("Error reading CSV:", error);
        resultElement.textContent = "An error occurred.";
  
        // Clear the content of result_name and result_type elements if an error occurs
        resultNameElement.textContent = "";
        resultTypeElement.textContent = "";
      });
  });
  