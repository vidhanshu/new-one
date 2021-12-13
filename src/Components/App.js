import React, { useState } from "react";
import Body from "./Body";
import Header from "./Header";
import "../css/style.css"
import data from "../API/data"
import Top from "./Top"
import Menu from "./Menu";
import Form from "./Form";
import Help from "./Help"
import About from "./About"
var count = 0;


function App() {
  /* initializations */
  const [top, setTop] = useState(data);

  const [state, setState] = React.useState(0);



  window.onload = () => {

    //intialization section
    const nav_ar = [...document.getElementsByClassName("actual-logo")];

    const Top = document.querySelector(".top");

    var left_button = document.querySelector(".left");

    var right_button = document.querySelector(".right");

    var title = document.querySelector(".title");

    var availability = document.querySelector(".availability");

    var category = document.querySelector(".category");

    var Home = document.querySelector(".fa-home-b");
    var Games = document.querySelector(".fa-dice-b");
    var cloud = document.querySelector(".fa-cloud-b");
    var settings = document.querySelector(".fa-cog-b");

    const menu_page = document.querySelector(".Nav-menu");
    const menu_bar = document.querySelector(".fa-bars");
    const close = document.querySelector(".close");


    menu_bar.addEventListener('click', () => {
      menu_page.style.width = "100vw";
    })
    close.addEventListener('click', () => {
      menu_page.style.width = "0vw";
    })

    Home.addEventListener('click', () => {
      document.documentElement.scrollTop = 0;
      Top.style.height = "100vh";
      setState(0);
    })
    Games.addEventListener('click', () => {
      Top.style.height = "0vh";
      setState(2);
    })
    cloud.addEventListener('click', () => {
      Top.style.height = "0vh";
      setState(1);
    })
    settings.addEventListener('click', () => {
      Top.style.height = "0vh";
      setState(3);
    })


    /*     Top.style.width="100%";
     */

    /* i'm writing javascript here for the active class */
    nav_ar.map((e) => {
      e.addEventListener('click', () => {
        nav_ar.map(k => {
          k.classList.remove("active");
        })
        e.classList.add("active");
      })
    })

    /*scroll tp[] */
    window.onscroll = function () {
      if (document.documentElement.scrollTop == "0") {
        Top.style.height = "100vh";
        Top.style.display = "block";
      } else {
        Top.style.height = "0px";
      }
    }


    //scroller
    const left = () => {
      (count == 0) ? count = top.length - 1 : count--;
      Top.style.background = "url(" + top[count].img + ")";
      title.innerHTML = top[count].game_name;
      availability.innerHTML = top[count].availability;
      category.innerHTML = top[count].category;
    }


    const right = () => {
      (count >= top.length - 1) ? count = 0 : count++;
      Top.style.background = "url(" + top[count].img + ")";
      title.innerHTML = top[count].game_name;
      availability.innerHTML = top[count].availability;
      category.innerHTML = top[count].category;
    }

    //autoscroll after 6s if don't want comment out
    setInterval(right, 6000);


    //adding event listeners to the left and right butttons int e top coponent
    left_button.addEventListener('click', left);
    right_button.addEventListener('click', right);




    const form = document.querySelector(".sign-up-in");
    const form_btn = document.querySelector('.form-btn');
    const close_form = document.querySelector(".close-form")
    const user_btn = document.querySelector(".fa-user");
    const help_btn = document.querySelector(".Help-btn");
    const about_btn = document.querySelector(".About-btn")
    const close_About = document.querySelector(".close-About")
    const close_Help = document.querySelector(".close-Help"
    )
    const help_icon = document.querySelector(".fa-question"
    )
    const about_icon = document.querySelector(".id"
    )
    const about = document.querySelector(".About-section");
    const help = document.querySelector(".Help-section");

    /* for form */
    form_btn.addEventListener('click', () => {
      form.style.height = "100vh";
    })
    user_btn.addEventListener('click', () => {
      form.style.height = "100vh";
    })
    close_form.addEventListener('click', () => {
      form.style.height = "0vh";
    })

    /* for help */
    help_btn.addEventListener('click', () => {
      help.style.height = "100vh";
    })
    close_Help.addEventListener('click', () => {
      help.style.height = "0vh"
    })

    help_icon.addEventListener('click', () => {
      help.style.height = "100vh"
    })
    /* for about */
    about_btn.addEventListener('click', () => {
      about.style.height = "100vh";
    })
    
    close_About.addEventListener('click', () => {
      about.style.height = "0";
    })
    
    about_icon.addEventListener('click',()=>{
      about.style.height = "100vh";
    })




  };
  return (
    <div className="main-container">
      <Form />
      <Help />
      <About />
      <Top />
      <Header />
      <Menu />
      <Body value={state} />
    </div>
  );
}

export default App;
