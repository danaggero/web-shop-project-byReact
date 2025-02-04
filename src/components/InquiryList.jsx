import React from "react";
import { useState, useEffect} from "react";

const InquiryList = () => {
    const [inquiries, setInquiries] = useState([]);

    useEffect(() => {
        const fetchInquiries = async () => {
            const response = await fetch('/asks/{id}');
            const data = await response.json();
            setInquiries(data);
        };

        fetchInquiries();
    }, []);

    return (
        <div>
            <h2>Inquiry List</h2>
            <table>
                <thead>
                    <tr>
                        <th>Name</th>
                        <th>Status</th>
                        <th>Reply</th>
                        <th>Assigned To</th>
                    </tr>
                </thead>
                <tbody>
                    {inquiries.map((inquiry) => (
                        <tr key={inquiry.id}>
                            <td>{inquiry.name}</td>
                            <td>{inquiry.status}</td>
                            <td>{inquiry.reply}</td>
                            <td>{inquiry.assignedTo}</td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    );
};

export default InquiryList;