import React from "react";
import "bootstrap/dist/css/bootstrap.css";
import "bootstrap/dist/js/bootstrap.bundle.min";
import "bootstrap/dist/css/bootstrap.min.css";
<script src="https://kit.fontawesome.com/a99c332d56.js" crossorigin="anonymous"></script>
import '.\E-commerce\src\Components\Menu\Menu.css'

function Menu() {
    return(
        <body>
        <div>
            <div class="Link-name">
                <a href="#">Account</a> / <a href="#">Home</a>
            </div>
          <div class="Personal">
                <div class="avatar">BD</div>
                <p>Name</p>
          </div>
            <div class="list">
              <div class="Order">
                <i class="fa-solid fa-box-archive"></i> <span style="font-weight: bold"><a href="#">Order History</a></span>
              </div>
              <div class="Rewards">
                 <i class="fa-solid fa-star"></i><span style="font-weight: bold"><a href="#">My Points & Rewards</a></span>
              </div>
              <div class="Credit">   
               <i class="fa-solid fa-money-bills"></i><span style="font-weight: bold"><a href="#">My Rewards Credit Cards</a></span>
              </div>
                <div> 
                  <i class="fa-solid fa-user"></i><span style="font-weight: bold">Manage Account</span>
                    <ul class="account"> 
                       <a href=""><li>Personal Info</li></a> 
                       <a href=""><li>Saved cards</li></a> 
                       <a href=""><li>Shipping Addresses</li></a> 
                       <a href=""><li>Change Password</li></a>
                       <a href=""><li>Communication Preferences</li></a>
                    </ul>
                </div>
              <div>
                 <i class="fa-solid fa-wallet"></i><span style="font-weight: bold">Gift Cards</span>
                <ul class="gift">
                    <a href=""><li>Check Gift Card balance</li></a>
                    <a href=""><li>Reload Gift Card</li></a>
                </ul>
               </div>
              <div class="information"> 
                <i class="fa-solid fa-circle-info"></i>
                <span style="font-weight: bold">
                  <a href="#">Customer Service</a>
                  </span>
              </div>
            </div>
        </div>
    </body>
    )
}

export default Menu()