import React, { useState } from 'react';
import './Profile.css';

const Profile = () => {
    const [activeTab,setActiveTab] = useState("orders");
  return (
    <div>
          <div className="orders-container">
      <header>
        <p className="welcome-text">Welcome, Surya</p>
      </header>
      <main>
        <h1>Thank you for your orders, you can find all your orders below.</h1>
        <p className="subtitle">
          If you have a question or need assistance, please contact us.
        </p>
        <a href="#" className="logout-link">
          Log out <span className="arrow">→</span>
        </a>

 
        <div className="navigation-links">
          <button
            className={`nav-link ${activeTab === "orders" ? "active" : ""}`}
            onClick={() => setActiveTab("orders")}
          >
            Orders
          </button>
          <button
            className={`nav-link ${activeTab === "address" ? "active" : ""}`}
            onClick={() => setActiveTab("address")}
          >
            Address Book
          </button>
        </div>
        <div className='tabs-cont'>
              {
                activeTab === "orders" ? (
                     <h1 className="empty-message">You haven't placed any orders yet.</h1>
                ) : 
                (
                     <h1 className="empty-message">No saved addresses yet.</h1>
                )
              }
        </div>
      </main>
    </div>
    </div>
  )
}

export default Profile