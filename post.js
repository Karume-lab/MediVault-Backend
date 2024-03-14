async function postData() {
  const url = "http://bkyz2-fmaaa-aaaaa-qaaaq-cai.localhost:4943/users";
  const data = {
    name: "John Doe",
    age: 30,
    email: "john.doe@example.com",
    // Add more fields as needed
  };

  const options = {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(data),
  };

  try {
    const response = await fetch(url, options);

    if (!response.ok) {
      throw new Error("Failed to post data");
    }

    const responseData = await response.json();
    console.log("Response data:", responseData);

    // Process the response data further as needed
  } catch (error) {
    console.error("Error posting data:", error.message);
  }
}

// Call the function to post data
postData();
