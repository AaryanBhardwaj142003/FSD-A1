async function fetchData() {
    try {
        let response = await fetch('https://api.github.com/users?per_page=10');
        let data = await response.json();
        
        // Clear any previous user data
        const top = document.getElementById("top");
        top.innerHTML = "";
        
        // Populate new user data in the table
        data.forEach(user => {
            let row = document.createElement("tr");

            // Username cell
            let usernameCell = document.createElement("td");
            usernameCell.textContent = user.login;
            row.appendChild(usernameCell);

            // Profile link cell
            let profileCell = document.createElement("td");
            let a = document.createElement("a");
            a.textContent = "View Profile";
            a.setAttribute("href", user.html_url);
            a.setAttribute("target", "_blank");
            profileCell.appendChild(a);
            row.appendChild(profileCell);

            // Append row to table body
            top.appendChild(row);
        });
    } catch (error) {
        console.log("Error fetching data:", error);
    }
}