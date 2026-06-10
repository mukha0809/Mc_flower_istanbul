{\rtf1\ansi\ansicpg1251\cocoartf2867
\cocoatextscaling0\cocoaplatform0{\fonttbl\f0\fswiss\fcharset0 Helvetica;}
{\colortbl;\red255\green255\blue255;}
{\*\expandedcolortbl;;}
\paperw11900\paperh16840\margl1440\margr1440\vieww11520\viewh8400\viewkind0
\pard\tx720\tx1440\tx2160\tx2880\tx3600\tx4320\tx5040\tx5760\tx6480\tx7200\tx7920\tx8640\pardirnatural\partightenfactor0

\f0\fs24 \cf0 window.addEventListener("load", () => \{\
    document.body.classList.add("loaded");\
\});\
\
const darkModeBtn = document.getElementById("darkModeBtn");\
\
if (darkModeBtn) \{\
    darkModeBtn.addEventListener("click", () => \{\
        document.body.classList.toggle("dark");\
\
        if (document.body.classList.contains("dark")) \{\
            localStorage.setItem("theme", "dark");\
        \} else \{\
            localStorage.setItem("theme", "light");\
        \}\
    \});\
\}\
\
if (localStorage.getItem("theme") === "dark") \{\
    document.body.classList.add("dark");\
\}\
\
const observer = new IntersectionObserver((entries) => \{\
    entries.forEach(entry => \{\
        if (entry.isIntersecting) \{\
            entry.target.classList.add("show");\
        \}\
    \});\
\}, \{\
    threshold: 0.15\
\});\
\
document.querySelectorAll(".card, .hero, .about").forEach(el => \{\
    observer.observe(el);\
\});\
\
document.querySelectorAll('a[href^="#"]').forEach(anchor => \{\
    anchor.addEventListener("click", function (e) \{\
        e.preventDefault();\
\
        document.querySelector(\
            this.getAttribute("href")\
        ).scrollIntoView(\{\
            behavior: "smooth"\
        \});\
    \});\
\});}
