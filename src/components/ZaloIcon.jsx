import React, { useState } from 'react';
import './ZaloIcon.css';

function ZaloIcon() {
  const [showForm, setShowForm] = useState(false);
  const [message, setMessage] = useState('');

  const openForm = () => {
    setShowForm(true);
  };

  const closeForm = () => {
    setShowForm(false);
    setMessage(''); // Xóa nội dung tin nhắn sau khi đóng form
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Gửi tin nhắn đến Zalo ở đây (bạn cần thêm logic xử lý gửi tin nhắn)
    console.log('Tin nhắn đã được gửi:', message);
    closeForm(); // Đóng form sau khi gửi tin nhắn
  };

  return (
    <div>
      <div className={`zalo-icon ${showForm ? 'hidden' : ''}`} onClick={openForm}>
      <img
            style={{ width: "50px", height: "50px" }}
            src="https://classic.vn/wp-content/uploads/2022/07/zalo-icon.png"
            alt="Zalo Icon"
            // onClick={openModal}
          />
      </div>
      <div className={`zalo-modal ${showForm ? 'active' : ''}`}>
        <span className="close-button" onClick={closeForm}>&times;</span>
        <form onSubmit={handleSubmit}>
          <input
            type="text"
            placeholder="Nhập tin nhắn cho Zalo"
            value={message}
            onChange={(e) => setMessage(e.target.value)}
          />
          <button type="submit">Gửi</button>
        </form>
      </div>
    </div>
  );
}

export default ZaloIcon;
