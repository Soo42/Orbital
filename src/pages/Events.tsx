import { useNavigate } from "react-router-dom";



export default function Events() {
  const navigate = useNavigate();
  return (<div className="events-page"> 
  <div className="sidebar">
    <button onClick={() => navigate("/main")} className="icon">💬</button>
    <button onClick={() => navigate("/profile")} className="icon">👤</button>
    <button onClick={() => navigate("/events")} className="icon">📅</button>
  </div>
  <div className="content-container"> 
    <h1 style={{ color: "white" }}>Can I ask why it never appear????</h1>
  </div>
  </div>);
}