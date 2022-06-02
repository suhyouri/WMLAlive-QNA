// import { Link } from "react-router-dom";
import React from "react";

export default function Modal() {
  return (
    <div id="modal" className="modal-overlay">
      <div className="modal-window">
        <div className="title">
          <h2>모달</h2>
        </div>
        <div className="close-area">X</div>
        <form className="content" id="form">
          <li>이름</li>
          <input
            id="name"
            className="name"
            placeholder="화이트와인"
            type="text"
            required
          />
          <li>이미지</li>
          <input id="url" className="url" placeholder="URL" required />
          <li>내용</li>
          <input
            id="intro"
            className="intro"
            placeholder="주로 청포도로 만든다네요"
            required
          />
          <button>Save</button>
        </form>
      </div>
    </div>
  );
}
