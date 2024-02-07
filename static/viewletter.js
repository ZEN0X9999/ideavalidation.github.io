async function fetchMessageAndSubmit() {
    try {
        // Fetch message from the first endpoint
        const response = await fetch("http://127.0.0.1:80/message/3", {
            credentials: "omit",
            headers: {
                "User-Agent": "Mozilla/5.0 (X11; Linux x86_64; rv:120.0) Gecko/20100101 Firefox/120.0",
                Accept: "*/*",
                "Accept-Language": "en-US,en;q=0.5",
                "Sec-GPC": "1",
            },
            referrer: "http://127.0.0.1:80/letters?id=3",
            method: "GET",
            mode: "cors",
        });
        if (!response.ok) {
            throw new Error("Failed to fetch message");
        }
        const data = await response.json();
        const message = data.message;
        
        // Submit the message to the second endpoint
        const submitResponse = await fetch("http://127.0.0.1:80/submit", {
            credentials: "omit",
            headers: {
                "User-Agent": "Mozilla/5.0 (X11; Linux x86_64; rv:120.0) Gecko/20100101 Firefox/120.0",
                Accept: "*/*",
                "Accept-Language": "en-US,en;q=0.5",
                "Content-Type": "application/json",
                "Sec-GPC": "1",
            },
            referrer: "http://127.0.0.1:80/",
            body: JSON.stringify({ message: message }),
            method: "POST",
            mode: "cors",
        });
        if (!submitResponse.ok) {
            throw new Error("Failed to submit message");
        }
        
        console.log("Message submitted successfully");
    } catch (error) {
        console.error("There was a problem:", error);
    }
}

// Call the function to execute the process
fetchMessageAndSubmit();
