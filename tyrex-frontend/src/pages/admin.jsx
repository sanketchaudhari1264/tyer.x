import { useEffect, useState } from "react";

function Admin() {
  const [enquiries, setEnquiries] = useState([]);

  useEffect(() => {
    fetch("http://localhost:5000/api/enquiries")
      .then(res => res.json())
      .then(data => setEnquiries(data))
      .catch(err => console.error(err));
  }, []);

  return (
    <div style={{ padding: "20px" }}>
      <h1>All Enquiries</h1>

      {enquiries.length === 0 ? (
        <p>No enquiries found</p>
      ) : (
        enquiries.map((e, i) => (
          <div key={i} style={{ border: "1px solid gray", margin: "10px", padding: "10px" }}>
            <p><b>Name:</b> {e.name}</p>
            <p><b>Phone:</b> {e.phone}</p>
            <p><b>Message:</b> {e.message}</p>
          </div>
        ))
      )}
    </div>
  );
}

export default Admin;
