async function fetchUserData() {
  const url = "http://bkyz2-fmaaa-aaaaa-qaaaq-cai.localhost:4943/users";

  try {
    const response = await fetch(url);

    if (!response.ok) {
      throw new Error("Failed to fetch data");
    }

    const userData = await response.json();
    console.log("User data:", userData);

    // Process the fetched data further as needed
  } catch (error) {
    console.error("Error fetching data:", error.message);
  }
}

// Call the function to fetch user data
fetchUserData();
