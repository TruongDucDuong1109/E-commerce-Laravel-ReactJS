import React from "react";
import "bootstrap/dist/css/bootstrap.css";
import "bootstrap/dist/js/bootstrap.bundle.min";
import "bootstrap/dist/css/bootstrap.min.css";
import './Menu.css';

function Menu() {
  const linkStyle = {
    fontWeight: 'bold'
  };
  const linkStyle2 = {
    fontWeight: 'bold',
  };
    return(
    <body className="menu">
      <div className="container__class">
      {/* Aside left */}
        <aside className="left__aside">
          <div>
            <div className="link__name">
              <a href="#">Account</a> / <a href="#">Home</a>
            </div>
            <div className="Personal">
              <div className="avatar">BD</div>
              <p>Hi, Bui</p>
            </div>
            <div className="list">
              <ul className="list__link">
                  <li>
                      <a href="#"><i class="bi bi-archive"></i><span style={linkStyle}>Order History</span></a>
                  </li>
                  <li>
                      <a href="#"><i class="bi bi-stars"></i><span style={linkStyle}>My Points & Rewards</span></a>
                  </li>
                  <li>
                      <a href="#"><i class="bi bi-cash-stack"></i><span style={linkStyle}>My Rewards Credit Cards</span></a>
                  </li>
                  <li>
                  <a href=""><i class="bi bi-person"></i><span className="Manage-account" span style={linkStyle}>Manage Account</span></a>
                  </li>
                  <ul className="account">
                      <li><a href="">Personal Info</a></li>
                      <li><a href="">Saved cards</a></li>
                      <li><a href="">Shipping Addresses</a></li>
                      <li><a href="">Change Password</a></li>
                      <li><a href="">Communication Preferences</a></li>
                  </ul>
                  <li>
                  <a href=""><i class="bi bi-wallet"></i><span style={linkStyle2}>Gift Cards</span></a>
                  </li>
                  <ul className="account">
                      <li><a href="">Check Gift Card balance</a></li>
                      <li><a href="">Reload Gift Card</a></li>
                  </ul>
                  <li>
                    <a href="#"><i class="bi bi-info-circle"></i><span style={linkStyle2}>Customer Service</span></a>
                  </li>
              </ul>
            </div>
          </div>
        </aside>
        {/*  Middle section */}
        <div className="middle__section">
          <div className="order__history">
            <div className="title__1">         
              <i class="bi bi-archive"></i>
              <h5><span style={linkStyle}>Order History</span></h5>
              <i class="bi bi-chevron-right"></i>

            </div>
            <div className="order__description">
              <p>You have no order</p>
            </div>
          </div>
        </div>
        {/* Aside right */}
        <aside className="right__aside">
          <div className="points__rewards">
            <div className="title__2">
              <h5>
                <i className="fa-solid fa-star"></i> MY POINTS & REWARDS<i class="bi bi-chevron-right"></i>
              </h5>
            </div>
            <div className="reward__description">
              <p className="Core"><span style={linkStyle}>Core <i class="bi bi-star-fill"></i> Rewards Member</span></p>
              <div className="rewards__available">
                <div className="money__avatar">$0</div> 
                <p>
                  <span style={linkStyle}>in rewards available.</span>
                  <br />
                  Rewards are redeemed in checkout.
                </p>
              </div>
            </div>
          </div>

          <div className="CreditCard">
            <div className="title__3">
              <h5>
                <i className="fa-solid fa-money-bills"></i> MY REWARDS CREDIT CARDS<i class="bi bi-chevron-right"></i>
              </h5>
            </div>
            <div className="creditcard__description">
              <p>Apply for a <span style={linkStyle}>Gap Good Rewards Credit Card </span>
                and earn 5 points per $1 spent.
              </p>
              <a href="">
                <figure>*credit card img*</figure>
              </a>
              <p>*Pending approval</p>
            </div>
          </div>
        </aside>
      </div>
      <a href="#">
          <button class="mail__btn click"><i class="bi bi-chat-left-dots-fill"></i></button>
      </a>
    </body>
    )
}

export default Menu;