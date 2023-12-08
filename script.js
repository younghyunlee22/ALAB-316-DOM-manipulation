const mainEl = document.querySelector("main");
//Use querySelector because there's no id and it is only one element.
mainEl.style.backgroundColor = "var(--main-bg)";
mainEl.innerHTML = "<h1>Dom manipulation</h1>";
mainEl.classList.add("flex-ctr");

const topMenuEl = document.getElementById("top-menu");
topMenuEl.style.height = "100%";
topMenuEl.style.backgroundColor = "var(--top-menu-bg)";
topMenuEl.classList.add("flex-around");

// Menu data structure
var menuLinks = [
  { text: "about", href: "/about" },
  {
    text: "catalog",
    href: "#",
    subLinks: [
      { text: "all", href: "/catalog/all" },
      { text: "top selling", href: "/catalog/top" },
      { text: "search", href: "/catalog/search" },
    ],
  },
  {
    text: "orders",
    href: "#",
    subLinks: [
      { text: "new", href: "/orders/new" },
      { text: "pending", href: "/orders/pending" },
      { text: "history", href: "/orders/history" },
    ],
  },
  {
    text: "account",
    href: "#",
    subLinks: [
      { text: "profile", href: "/account/profile" },
      { text: "sign out", href: "/account/signout" },
    ],
  },
];

menuLinks.forEach((ele) => {
  let menu = document.createElement("a");
  menu.setAttribute("href", ele.href);
  menu.innerHTML = ele.text;
  topMenuEl.append(menu);
});

const subMenuEl = document.getElementById("sub-menu");
subMenuEl.style.height = "100%";
subMenuEl.style.backgroundColor = "var(--sub-menu-bg)";
subMenuEl.classList.add("flex-around");
subMenuEl.style.position = "absolute";
subMenuEl.style.top = "0";

let topMenuLinks = topMenuEl.querySelectorAll("a");
topMenuEl.addEventListener("click", function (e) {
  e.preventDefault();
  console.log(e.target.textContent);
  if (e.target.tagName !== "A") {
    return console.log("Invalid element");
  } else {
    e.target.classList.toggle("active");
    console.log("target", e.target);

    for (const link of topMenuLinks) {
      if (link !== e.target) {
        link.classList.remove("active");
        console.log("other menus", link);
      }
    }
  }
});
