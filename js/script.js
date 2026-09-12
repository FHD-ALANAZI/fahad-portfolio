(function () {
  "use strict";

  var translations = {
    en: {
      "skip.link": "Skip to main content",
      "brand.name": "Fahad Alanazi",
      "nav.home": "Home",
      "nav.about": "About",
      "nav.experience": "Experience",
      "nav.skills": "Skills",
      "nav.projects": "Projects",
      "nav.certifications": "Certifications",
      "nav.contact": "Contact",

      "hero.eyebrow": "Portfolio & CV",
      "hero.name": "Fahad Mazi Alanazi",
      "hero.headline": "Computer Science Graduate | IT & AI",
      "hero.intro": "Computer Science graduate with practical experience in IT support and digital transformation, with a strong foundation in networking, databases, Python, SQL, and technical troubleshooting.",
      "hero.location": "Saudi Arabia",
      "hero.cta.cv": "Download CV",
      "hero.cta.contact": "Contact Me",

      "about.heading": "About Me",
      "about.text": "I am a Computer Science graduate from the University of Tabuk with a genuine interest in IT support, networking, and digital transformation. Through academic projects and hands-on internship experience, I have built a practical foundation in databases, data analysis, and troubleshooting technical issues. I enjoy solving problems methodically, learning new tools quickly, and contributing to teams that use technology to improve everyday operations. I am currently seeking entry-level and Tamheer opportunities where I can grow as an IT, data, or software professional.",

      "experience.heading": "Experience",
      "experience.role": "Digital Transformation & IT Support Intern",
      "experience.company": "Public General Hospital",
      "experience.period": "June 2025 – August 2025",
      "experience.b1": "Supported staff with basic hardware, software, and technical issues.",
      "experience.b2": "Assisted with troubleshooting devices and network connectivity.",
      "experience.b3": "Supported software updates and technical setup.",
      "experience.b4": "Helped maintain digital records and technical documentation.",
      "experience.b5": "Used Microsoft Excel and data analysis to improve IT support request tracking.",
      "experience.b6": "Worked in a regulated healthcare environment with attention to confidentiality.",

      "education.heading": "Education",
      "education.degree": "Bachelor of Computer Science",
      "education.school": "University of Tabuk",
      "education.period": "Graduation: 2026",

      "skills.heading": "Technical Skills",
      "skills.cat.programming": "Programming",
      "skills.cat.it": "IT & Infrastructure",
      "skills.cat.data": "Data",
      "skills.cat.other": "Other",
      "skill.itsupport": "IT Support",
      "skill.networks": "Computer Networks",
      "skill.lan": "LAN Connectivity",
      "skill.nettrouble": "Network Troubleshooting",
      "skill.ad": "Active Directory Basics",
      "skill.serverperm": "Windows Server Permissions",
      "skill.rdb": "Relational Databases",
      "skill.dataanalysis": "Data Analysis",
      "skill.advexcel": "Advanced Excel",
      "skill.techdoc": "Technical Documentation",
      "skill.agile": "Agile / Scrum",
      "skill.infosec": "Information Security Fundamentals",
      "skill.digtrans": "Digital Transformation",

      "projects.heading": "Projects",
      "project1.title": "Web-Based Sentiment Analysis System",
      "project1.desc": "A web-based system for analyzing text sentiment and storing results in a database.",
      "project2.title": "Alzheimer's Patient Support Website",
      "project2.desc": "A web-based concept designed to support Alzheimer's patients through reminders, simple interaction, and behavior monitoring.",
      "project3.title": "Hospital Network Configuration Project",
      "project3.tag1": "LAN configuration",
      "project3.tag2": "Connectivity testing",
      "project3.tag3": "Basic packet diagnostics",
      "project3.desc": "An academic networking project focused on configuring and testing local network connectivity.",

      "certifications.heading": "Certifications",
      "cert1": "IBM AI Developer Professional Certificate",
      "cert2": "Google Project Management Professional Certificate",
      "cert3": "AI Foundations Program – King Saud University & IBM",
      "cert4": "Advanced Microsoft Excel",

      "strengths.heading": "Core Strengths",
      "strength.1": "Problem Solving",
      "strength.2": "Technical Troubleshooting",
      "strength.3": "Analytical Thinking",
      "strength.4": "Fast Learning",
      "strength.5": "Teamwork",
      "strength.6": "Communication",
      "strength.7": "Documentation",
      "strength.8": "Adaptability",

      "contact.heading": "Contact",
      "contact.lead": "Interested in working together or discussing an opportunity?",
      "contact.form.name": "Name",
      "contact.form.email": "Email",
      "contact.form.message": "Message",
      "contact.form.send": "Send Message",

      "footer.text": "© 2026 Fahad Mazi Alanazi. All rights reserved.",

      "meta.title": "Fahad Mazi Alanazi | Computer Science Graduate — IT & AI",
      "meta.description": "Fahad Mazi Alanazi — Computer Science graduate from University of Tabuk with practical experience in IT support, networking, and digital transformation.",
      "lang.switchLabel": "العربية",
      "form.sent": "Thanks! Your email app should now open with your message ready to send."
    },

    ar: {
      "skip.link": "تخطي إلى المحتوى الرئيسي",
      "brand.name": "فهد العنزي",
      "nav.home": "الرئيسية",
      "nav.about": "نبذة عني",
      "nav.experience": "الخبرة",
      "nav.skills": "المهارات",
      "nav.projects": "المشاريع",
      "nav.certifications": "الشهادات",
      "nav.contact": "تواصل",

      "hero.eyebrow": "السيرة الذاتية والأعمال",
      "hero.name": "فهد مذعي العنزي",
      "hero.headline": "خريج علوم حاسب | تقنية المعلومات والذكاء الاصطناعي",
      "hero.intro": "خريج علوم حاسب يتمتع بخبرة عملية في الدعم الفني والتحول الرقمي، مع أساس متين في الشبكات وقواعد البيانات وبايثون ولغة SQL واستكشاف الأعطال الفنية وإصلاحها.",
      "hero.location": "المملكة العربية السعودية",
      "hero.cta.cv": "تحميل السيرة الذاتية",
      "hero.cta.contact": "تواصل معي",

      "about.heading": "نبذة عني",
      "about.text": "أنا خريج علوم حاسب من جامعة تبوك، ولدي اهتمام حقيقي بالدعم الفني والشبكات والتحول الرقمي. من خلال المشاريع الأكاديمية وخبرة التدريب العملي، بنيت أساسًا عمليًا في قواعد البيانات وتحليل البيانات واستكشاف الأعطال الفنية وإصلاحها. أستمتع بحل المشكلات بمنهجية، وتعلّم الأدوات الجديدة بسرعة، والمساهمة في فرق تستخدم التقنية لتحسين العمليات اليومية. أبحث حاليًا عن فرصة وظيفية للمستوى المبتدئ أو فرصة تدريب (تمهير) لأنمو كمختص في تقنية المعلومات أو البيانات أو البرمجيات.",

      "experience.heading": "الخبرة العملية",
      "experience.role": "متدرب تحول رقمي ودعم فني",
      "experience.company": "مستشفى عام",
      "experience.period": "يونيو 2025 – أغسطس 2025",
      "experience.b1": "دعم الموظفين في حل المشكلات الأساسية المتعلقة بالأجهزة والبرامج.",
      "experience.b2": "المساعدة في استكشاف أعطال الأجهزة والاتصال بالشبكة وإصلاحها.",
      "experience.b3": "دعم تحديثات البرامج والإعداد الفني.",
      "experience.b4": "المساعدة في صيانة السجلات الرقمية والتوثيق الفني.",
      "experience.b5": "استخدام مايكروسوفت إكسل وتحليل البيانات لتحسين تتبع طلبات الدعم الفني.",
      "experience.b6": "العمل ضمن بيئة رعاية صحية منظمة مع الحرص على السرية التامة.",

      "education.heading": "التعليم",
      "education.degree": "بكالوريوس علوم الحاسب",
      "education.school": "جامعة تبوك",
      "education.period": "تاريخ التخرج: 2026",

      "skills.heading": "المهارات التقنية",
      "skills.cat.programming": "البرمجة",
      "skills.cat.it": "تقنية المعلومات والبنية التحتية",
      "skills.cat.data": "البيانات",
      "skills.cat.other": "أخرى",
      "skill.itsupport": "الدعم الفني",
      "skill.networks": "شبكات الحاسب",
      "skill.lan": "شبكات LAN",
      "skill.nettrouble": "استكشاف أعطال الشبكات",
      "skill.ad": "أساسيات Active Directory",
      "skill.serverperm": "صلاحيات خوادم ويندوز",
      "skill.rdb": "قواعد البيانات العلائقية",
      "skill.dataanalysis": "تحليل البيانات",
      "skill.advexcel": "إكسل متقدم",
      "skill.techdoc": "التوثيق الفني",
      "skill.agile": "أجايل / سكرم",
      "skill.infosec": "أساسيات أمن المعلومات",
      "skill.digtrans": "التحول الرقمي",

      "projects.heading": "المشاريع",
      "project1.title": "نظام تحليل المشاعر النصية عبر الويب",
      "project1.desc": "نظام ويب لتحليل مشاعر النصوص وتخزين النتائج في قاعدة بيانات.",
      "project2.title": "موقع لدعم مرضى الزهايمر",
      "project2.desc": "فكرة موقع ويب مصمم لدعم مرضى الزهايمر من خلال التذكيرات والتفاعل البسيط ومراقبة السلوك.",
      "project3.title": "مشروع تهيئة شبكة مستشفى",
      "project3.tag1": "تهيئة شبكة LAN",
      "project3.tag2": "اختبار الاتصال",
      "project3.tag3": "تشخيص أساسي لحزم البيانات",
      "project3.desc": "مشروع أكاديمي في مجال الشبكات يركز على تهيئة واختبار الاتصال بالشبكة المحلية.",

      "certifications.heading": "الشهادات",
      "cert1": "شهادة IBM المهنية لمطوّري الذكاء الاصطناعي",
      "cert2": "شهادة Google المهنية لإدارة المشاريع",
      "cert3": "برنامج أساسيات الذكاء الاصطناعي – جامعة الملك سعود و IBM",
      "cert4": "دورة إكسل متقدم",

      "strengths.heading": "نقاط القوة الأساسية",
      "strength.1": "حل المشكلات",
      "strength.2": "استكشاف الأعطال الفنية",
      "strength.3": "التفكير التحليلي",
      "strength.4": "التعلم السريع",
      "strength.5": "العمل الجماعي",
      "strength.6": "التواصل",
      "strength.7": "التوثيق",
      "strength.8": "القدرة على التكيف",

      "contact.heading": "التواصل",
      "contact.lead": "مهتم بالعمل معًا أو مناقشة فرصة عمل؟",
      "contact.form.name": "الاسم",
      "contact.form.email": "البريد الإلكتروني",
      "contact.form.message": "الرسالة",
      "contact.form.send": "إرسال الرسالة",

      "footer.text": "© 2026 فهد مذعي العنزي. جميع الحقوق محفوظة.",

      "meta.title": "فهد مذعي العنزي | خريج علوم حاسب — تقنية المعلومات والذكاء الاصطناعي",
      "meta.description": "فهد مذعي العنزي — خريج علوم حاسب من جامعة تبوك يمتلك خبرة عملية في الدعم الفني والشبكات والتحول الرقمي.",
      "lang.switchLabel": "English",
      "form.sent": "شكرًا لك! سيتم فتح تطبيق البريد الإلكتروني برسالتك جاهزة للإرسال."
    }
  };

  var STORAGE_KEY = "site-lang";
  var htmlEl = document.documentElement;

  function getSavedLang() {
    try { return localStorage.getItem(STORAGE_KEY); } catch (e) { return null; }
  }
  function saveLang(lang) {
    try { localStorage.setItem(STORAGE_KEY, lang); } catch (e) { /* ignore */ }
  }

  function applyLanguage(lang) {
    var dict = translations[lang] || translations.en;

    document.querySelectorAll("[data-i18n]").forEach(function (el) {
      var key = el.getAttribute("data-i18n");
      if (dict[key] !== undefined) {
        el.innerHTML = dict[key];
      }
    });

    htmlEl.setAttribute("lang", lang);
    htmlEl.setAttribute("dir", lang === "ar" ? "rtl" : "ltr");

    document.title = dict["meta.title"];
    var metaDesc = document.querySelector('meta[name="description"]');
    if (metaDesc) metaDesc.setAttribute("content", dict["meta.description"]);

    var switchLabel = document.getElementById("lang-switch-label");
    if (switchLabel) switchLabel.textContent = dict["lang.switchLabel"];

    saveLang(lang);
  }

  function currentLang() {
    return htmlEl.getAttribute("lang") === "ar" ? "ar" : "en";
  }

  document.addEventListener("DOMContentLoaded", function () {
    var initial = getSavedLang() || "en";
    applyLanguage(initial);

    var langBtn = document.getElementById("lang-switch");
    if (langBtn) {
      langBtn.addEventListener("click", function () {
        applyLanguage(currentLang() === "en" ? "ar" : "en");
      });
    }

    var navToggle = document.getElementById("nav-toggle");
    var mainNav = document.getElementById("main-nav");
    if (navToggle && mainNav) {
      navToggle.addEventListener("click", function () {
        var isOpen = mainNav.classList.toggle("open");
        navToggle.setAttribute("aria-expanded", isOpen ? "true" : "false");
      });
      mainNav.querySelectorAll("a").forEach(function (link) {
        link.addEventListener("click", function () {
          mainNav.classList.remove("open");
          navToggle.setAttribute("aria-expanded", "false");
        });
      });
    }

    var form = document.getElementById("contact-form");
    var status = document.getElementById("form-status");
    if (form) {
      form.addEventListener("submit", function (e) {
        e.preventDefault();
        var name = document.getElementById("cf-name").value.trim();
        var email = document.getElementById("cf-email").value.trim();
        var message = document.getElementById("cf-message").value.trim();

        var subject = encodeURIComponent("Portfolio contact from " + name);
        var body = encodeURIComponent(message + "\n\n— " + name + " (" + email + ")");
        window.location.href = "mailto:fhd34884@gmail.com?subject=" + subject + "&body=" + body;

        var dict = translations[currentLang()];
        if (status) status.textContent = dict["form.sent"];
        form.reset();
      });
    }
  });
})();
