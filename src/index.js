import _ from "lodash";
import "./styles.css";

function component() {
  //Header div
  const container = document.createElement("div");
  container.style.backgroundImage = "url('/images/bistro.jpg')";
  container.style.height = "100vh";

  //Restaurant's name
  const titleDiv = document.createElement("div");
  titleDiv.className = "title-div";

  const title = document.createElement("h1");
  title.textContent = "Sofia's bistro";
  title.style.textAlign = "center";
  titleDiv.appendChild(title);
  container.appendChild(titleDiv);

  //Tabs section
  const tabs = document.createElement("div");
  tabs.className = "tabs";

  const tabButtons = document.createElement("div");
  tabButtons.className = "buttons";

  const mainButton = document.createElement("button");
  mainButton.className = "tab-button";
  mainButton.textContent = "Main";
  mainButton.onclick = () => showTab("main");
  tabButtons.appendChild(mainButton);

  const menuButton = document.createElement("button");
  menuButton.className = "tab-button";
  menuButton.textContent = "Menu";
  menuButton.onclick = () => showTab("menu");
  tabButtons.appendChild(menuButton);

  tabs.appendChild(tabButtons);
  container.appendChild(tabs);

  tabs.appendChild(main());
  tabs.appendChild(menu());

  const element = document.createElement("div");
  element.appendChild(container);
  return element;
}

function main() {
  const mainContent = document.createElement("div");
  mainContent.setAttribute("id", "main");
  mainContent.className = "tab-div";

  mainContent.classList.add("show");
  const text = document.createElement("h1");
  text.textContent = "A magical travel through flavors";
  mainContent.appendChild(text);
  return mainContent;
}

function menu() {
  const menu = document.createElement("div");
  menu.setAttribute("id", "menu");
  menu.className = "tab-div";

  const contents = document.createElement("TABLE");
  contents.className = "menu";
  contents.innerHTML = `
      <tr>
    <th>Dish</th>
    <th>Price</th>
  </tr>
  <tr>
    <td>Soupe à L’oignon</td>
    <td>10</td>
  </tr>
  <tr>
    <td>Boeuf Bourguignon</td>
    <td>15</td>
  </tr>
  <tr>
    <td>Tarte Tatin</td>
    <td>8</td>
  </tr>`;
  menu.appendChild(contents);
  return menu;
}

function showTab(id) {
  const tabs = document.getElementsByClassName("tab-div");
  for (let i = 0; i < tabs.length ; i++) {
    tabs[i].classList.remove('show');
  }
  document.getElementById(id).classList.add("show");
}
document.getElementById("content").appendChild(component());
