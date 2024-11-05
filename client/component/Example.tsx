import React, { useEffect, useState } from 'react';
import axios from "axios";

const Example = () => {
    const [message, setMessage] = useState("");

    useEffect(() => {
        // Make a GET request to your Express API
        axios.get("http://localhost:3000/api/hello")
        .then(response => {
            setMessage(response.data.message); // Assuming your API returns { message: "Hello, world!" }
        })
        .catch(error => {
            console.error("Error fetching data:", error);
        });
    }, []);
    return (
      <div>
        <h1>API Response:</h1>
        <p>{message}</p>
      </div>
    );
}

export default Example