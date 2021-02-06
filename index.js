"use strict";

const openBtn = document.querySelector(".modalBtn");
const modal = document.querySelector(".modal");
const overlay = modal.querySelector(".modalOverlay");
const closeBtn = modal.querySelector("button");

const openModal = () => {
    modal.classList.remove("hidden");
};

const closeModal = () => {
    modal.classList.add("hidden");
};
openBtn.addEventListener("click", openModal);
closeBtn.addEventListener("click", closeModal);
