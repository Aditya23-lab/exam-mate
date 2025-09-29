import { useEffect, useState } from "react";
import axios from "axios";

const UserUploads = ({ userId }) => {
  const [files, setFiles] = useState([]);

  useEffect(() => {
    const fetchMyFiles = async () => {
      try {
        const token = localStorage.getItem("token");
        const res = await axios.get("http://localhost:5000/api/files/my", {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        });
        setFiles(res.data);
      } catch (err) {
        console.error("Error fetching my files:", err);
      }
    };

    fetchMyFiles();
  }, [userId]);

  if (files.length === 0) return <p>No uploads yet.</p>;

  return (
    <ul className="space-y-2">
      {files.map((file) => (
        <li key={file._id} className="bg-gray-100 p-3 rounded">
          <p><strong>{file.originalName}</strong></p>
          <p className="text-sm text-gray-600">Subject: {file.subject}</p>
          <a
            href={`http://localhost:5000/api/files/download/${file.storedName}`}
            target="_blank"
            rel="noopener noreferrer"
            className="text-blue-600 underline text-sm"
          >
            Download
          </a>
        </li>
      ))}
    </ul>
  );
};

export default UserUploads;
