// import { Link } from "react-router-dom";
import React from "react";

export default function Main() {
    return (
      <main>
        <div className="sidebar">
          <button id="btn-modal">추가</button>
          <span>소주</span>
          <span>맥주</span>
          <span>샴페인</span>
          <span>와인</span>
          <span>럼</span>
        </div>
        <section className="container">
          <div className="card">
            <img
              src="https://images.unsplash.com/photo-1544782321-8fab42cfd62e?crop=entropy&cs=tinysrgb&fm=jpg&ixlib=rb-1.2.1&q=80&raw_url=true&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2070"
              alt="소주"
            />
            <span>저는 소주를 안 좋아해요!</span>
          </div>
          <div className="card">
            <img
              src="https://images.unsplash.com/photo-1436076863939-06870fe779c2?crop=entropy&cs=tinysrgb&fm=jpg&ixlib=rb-1.2.1&q=80&raw_url=true&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2070"
              alt="맥주"
            />
            <span>애플퐉스같은 맛있는 맥주가 좋아요.</span>
          </div>
          <div className="card">
            <img
              src="https://images.unsplash.com/photo-1551024709-8f23befc6f87?ixlib=rb-1.2.1&raw_url=true&q=80&fm=jpg&crop=entropy&cs=tinysrgb&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2157"
              alt="칵테일"
            />
            <span>샴페인 좋아요~ 샴페인 좋아요~</span>
          </div>
          <div className="card">
            <img
              src="https://images.unsplash.com/photo-1568213816046-0ee1c42bd559?crop=entropy&cs=tinysrgb&fm=jpg&ixlib=rb-1.2.1&q=80&raw_url=true&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2072"
              alt="와인"
            />
            <span>와인의 매력을 아직 깨닫지 못했어요.</span>
          </div>
          <div className="card">
            <img
              src="https://images.unsplash.com/photo-1470337458703-46ad1756a187?ixlib=rb-1.2.1&raw_url=true&q=80&fm=jpg&crop=entropy&cs=tinysrgb&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2069"
              alt="위스키"
            />
            <span>먹어본 적이 없을 무!</span>
          </div>
        </section>
      </main>
    );
}
