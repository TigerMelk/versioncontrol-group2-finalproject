import { contactPage } from "./contact.js";
import { aboutPage } from "./about.js";
import { postPage } from "./postPage.js";
import { randomFeaturesPage } from "../random-features/randomFeatures.js";

function openPage(content) {
  const pageContent = document.querySelector(".page-content");
  pageContent.innerHTML = "";
  pageContent.append(content);
}

export function openContactPage() {
  setBodyClass("contact-page");

  openPage(contactPage());
}

export function openAboutPage() {
  setBodyClass("about-page");

  openPage(aboutPage());
}

export function openChatPage() {
  setBodyClass("home-page");

  openPage(postPage());
}

export function openRandomFeaturesPage() {
  setBodyClass("random-features-page");

  openPage(randomFeaturesPage());
}

function setBodyClass(pageName) {
  document.body.classList = pageName;
}