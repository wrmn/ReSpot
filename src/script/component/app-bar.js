let template = `
<style>
* {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
}

:host {
    display: block;
    width: 100%;
    background: rgb(255,195,36);
    background: linear-gradient(156deg, rgba(255,195,36,1) 35%, rgba(255,158,0,1) 100%);
    color: #666;
    box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2);
    border-radius:0 0 10% 10%;
}

a:link{
  text-decoration: none!important;
}

form{
  position: relative;
  top: 50%;
  left: 50%;
  transform: translate(-50%,-50%);
  transition: all 1s;
  width: 80px;
  height: 40px;
  background: #ffc324;
  box-sizing: border-box;
  border-radius: 25px;
  border: 4px solid white;
  padding: 5px;
}


form:hover{
  width: 200px;
  cursor: pointer;
}

form:hover input{
  display: block;
}


form:hover .fa{
  background: white;
  color: #ffc324;
}

input{
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;;
  height: 35px;
  line-height: 30px;
  outline: 0;
  border: 0;
  display: none;
  font-size: 1em;
  border-radius: 20px;
  padding: 0 20px;
}

#main-title {
  padding: 25px;
  padding-bottom: 0;
  font-size:2.5em;
}

#sub-title{
  font-size: 1.5em;
  padding: 25px;
  padding-top: 0;
}

#social{
  margin:25px;
  margin-left:auto; 
  font-size: 3em;
}

.social-icon{
  padding-right: 20px;
  text-decoration: none;
  color:white;
  transition: 1s all;
}


.social-icon:hover{
  color: #666;
}


.flex-row{
  display: flex;
  flex-direction: row;
}

.flex-column{
  display: flex;
  flex-direction: column;
}

.fa{
  box-sizing: border-box;
  padding: 10px;
  width: 30px;
  height: 30px;
  position: absolute;
  top: 0;
  right: 0;
  border-radius: 50%;  
  color: white;
  text-align: center;
  font-size: 1em;
}

.fa-spotify{
  color: #1DB954;
  background:black;
  padding: 1.5px;
  border-radius:50%;
}

@media screen and (max-width: 550px){
  #social{
    display:none;
  }

}

</style>
<div class="flex-row">
  <div class="flex-column">
    <div id="main-title"><i class="fab fa-spotify"></i> ReSpot</div>
    <div id="sub-title">Something that build with spotify API</div>
  </div>
  <div id="social">
  <a class="social-icon" href="https://twitter.com/0x003b" target="_blank">
    <i class="fab fa-twitter-square"></i>
  </a>
  <a class="social-icon" href="https://github.com/warmoa" target="_blank">
    <i class="fab fa-github-square"></i>
  </a>
  <a class="social-icon" href="https://wrmn.my.id" target="_blank">
    <i class="fas fa-external-link-square-alt"></i>
  </a>
  </div>
</div>
<form action="">
  <input type="search" placeholder="Search music here....">
  <i class="fa fa-search"></i>
</form>`;

class AppBar extends HTMLElement {
  constructor() {
    super();
    this.shadowDOM = this.attachShadow({
      mode: "open",
    });
  }

  connectedCallback() {
    this.render();
  }

  render() {
    this.shadowDOM.innerHTML = template;
    const styles = document.querySelector('link[href*="fontawesome"]');
    if (styles) {
      this.shadowRoot.appendChild(styles.cloneNode());
    }
  }
}

customElements.define("app-bar", AppBar);