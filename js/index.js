const siteContent = {
  "nav": {
    "nav-item-1": "Services",
    "nav-item-2": "Product",
    "nav-item-3": "Vision",
    "nav-item-4": "Features",
    "nav-item-5": "About",
    "nav-item-6": "Contact",
    "img-src": "img/logo.png"
  },
  "cta": {
    "h1": "DOM Is Awesome",
    "button": "Get Started",
    "img-src": "img/header-img.png"
  },
  "main-content": {
    "features-h4":"Features",
    "features-content": "Features content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",
    "about-h4":"About",
    "about-content": "About content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",
    "middle-img-src": "img/mid-page-accent.jpg",
    "services-h4":"Services",
    "services-content": "Services content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",
    "product-h4":"Product",
    "product-content": "Product content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",
    "vision-h4":"Vision",
    "vision-content": "Vision content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",
  },
  "contact": {
    "contact-h4" : "Contact",
    "address" : "123 Way 456 Street Somewhere, USA",
    "phone" : "1 (888) 888-8888",
    "email" : "sales@greatidea.io",
  },
  "footer": {
    "copyright" : "Copyright Great Idea! 2018"
  },
};

// Example: Update the img src for the logo
let logo = document.getElementById("logo-img");
logo.setAttribute('src', siteContent["nav"]["img-src"])

let middleImg = document.querySelector("#cta-img");
middleImg.setAttribute("src", siteContent["cta"]["img-src"]);

let finalImg = document.querySelector("#middle-img");
finalImg.setAttribute("src", siteContent["main-content"]["middle-img-src"])

let head = document.querySelectorAll("nav a")
head[0].textContent = siteContent["nav"]["nav-item-1"];
head[1].textContent = siteContent["nav"]["nav-item-2"];
head[2].textContent = siteContent["nav"]["nav-item-3"];
head[3].textContent = siteContent["nav"]["nav-item-4"];
head[4].textContent = siteContent["nav"]["nav-item-5"];
head[5].textContent = siteContent["nav"]["nav-item-6"];
head[0].style.color = "green"
head[1].style.color = "green"
head[2].style.color = "green"
head[3].style.color = "green"
head[4].style.color = "green"
head[5].style.color = "green"

let button = document.querySelector("button");
button.textContent = siteContent["cta"]["button"];

let heading = document.querySelector(".cta-text h1");
heading.textContent = siteContent["cta"]["h1"]

let miniHeaders = document.querySelectorAll(".main-content h4");
console.log(miniHeaders)
miniHeaders[0].textContent = siteContent["main-content"]["features-h4"];
miniHeaders[1].textContent = siteContent["main-content"]["about-h4"];
miniHeaders[2].textContent = siteContent["main-content"]["services-h4"];
miniHeaders[3].textContent = siteContent["main-content"]["product-h4"];
miniHeaders[4].textContent = siteContent["main-content"]["vision-h4"];

let paragraphs = document.querySelectorAll(".main-content p");
paragraphs[0].textContent = siteContent["main-content"]["features-content"]
paragraphs[1].textContent = siteContent["main-content"]["about-content"]
paragraphs[2].textContent = siteContent["main-content"]["services-content"]
paragraphs[3].textContent = siteContent["main-content"]["product-content"]
paragraphs[4].textContent = siteContent["main-content"]["vision-content"]

let contact = document.querySelector(".contact h4");
contact.textContent = siteContent["contact"]["contact-h4"];

let contactP = document.querySelectorAll(".contact p");
contactP[0].textContent = siteContent["contact"]["address"];
contactP[1].textContent = siteContent["contact"]["phone"];
contactP[2].textContent = siteContent["contact"]["email"];

let footer = document.querySelector("footer");
footer.textContent = siteContent["footer"]["copyright"];

let betterHeader1 = document.createElement("a")
betterHeader1.textContent = "item1"

let betterHeader2 = document.createElement("a")
betterHeader2.textContent = "item2"

let nav = document.querySelector("nav");

nav.prepend(betterHeader1);
nav.append(betterHeader2);




// let about = document.querySelector(".main-content h4");
// about.textContent = siteContent["main-content"]["about-h4"]
