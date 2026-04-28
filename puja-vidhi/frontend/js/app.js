// ============================= 🌐 TRANSLATIONS =============================
const translations = {
  en: {
    nav_home: "Home",
    nav_patrika: "Patrika",
    nav_shanti: "Shanti",
    nav_other: "Other",
    signup_btn: "Sign Up",
    card1_title: "Udak Shanti",
    card1_desc: "Removes negativity and increases positivity.",
    card2_title: "Vastu Shanti",
    card2_desc: "Brings peace and balance to your home.",
    card3_title: "Satyanarayan",
    card3_desc: "For blessings and harmony.",
    footer_motto:
      "Let’s understand happiness and duty — true happiness comes when we fulfill our duties with sincerity and purpose.",
    footer_patrika_title: "Patrika",
    patrika_item1: "Janm Kundli",
    patrika_item2: "Rashi Kundli",
    patrika_item3: "Grah Dasha",
    patrika_item4: "Bhavishya",
    footer_abhishek_title: "Abhishek",
    abhishek_item1: "Ganesh Pujan",
    abhishek_item2: "Satyanarayan",
    footer_categories_title: "Categories",
    categories_item1: "Puja Services",
    categories_item2: "Booking",
    footer_contact_title: "Contact",
    contact_address: "Mumbai, India",
    contact_phone: "+91 xxxxxxxxxx",
  },
  hi: {
    nav_home: "होम",
    nav_patrika: "पत्रिका",
    nav_shanti: "शांति",
    nav_other: "अन्य",
    signup_btn: "साइन अप",
    card1_title: "उदक शांति",
    card1_desc: "नकारात्मकता दूर करता है और सकारात्मकता बढ़ाता है।",
    card2_title: "वास्तु शांति",
    card2_desc: "आपके घर में शांति और संतुलन लाता है।",
    card3_title: "सत्यनारायण",
    card3_desc: "आशीर्वाद और सद्भाव के लिए।",
    footer_motto:
      "आइए खुशी और कर्तव्य को समझें — सच्ची खुशी तब मिलती है जब हम अपने कर्तव्यों को ईमानदारी और उद्देश्य से पूरा करते हैं।",
    footer_patrika_title: "पत्रिका",
    patrika_item1: "जन्म कुंडली",
    patrika_item2: "राशि कुंडली",
    patrika_item3: "ग्रह दशा",
    patrika_item4: "भविष्य",
    footer_abhishek_title: "अभिषेक",
    abhishek_item1: "गणेश पूजन",
    abhishek_item2: "सत्यनारायण",
    footer_categories_title: "श्रेणियाँ",
    categories_item1: "पूजा सेवाएं",
    categories_item2: "बुकिंग",
    footer_contact_title: "संपर्क करें",
    contact_address: "मुंबई, भारत",
    contact_phone: "+91 xxxxxxxxxx",
  },
  mr: {
    nav_home: "मुखपृष्ठ",
    nav_patrika: "पत्रिका",
    nav_shanti: "शांती",
    nav_other: "इतर",
    signup_btn: "साइन अप",
    card1_title: "उदक शांती",
    card1_desc: "नकारात्मकता दूर करते आणि सकारात्मकता वाढवते.",
    card2_title: "वास्तु शांती",
    card2_desc: "तुमच्या घरात शांती आणि संतुलन आणते.",
    card3_title: "सत्यनारायण",
    card3_desc: "आशीर्वाद आणि सुसंवादासाठी.",
    footer_motto:
      "चला आनंद आणि कर्तव्य समजून घेऊया — खरा आनंद तेव्हा मिळतो जेव्हा आपण आपली कर्तव्ये प्रामाणिकपणे आणि उद्देशाने पूर्ण करतो.",
    footer_patrika_title: "पत्रिका",
    patrika_item1: "जन्म कुंडली",
    patrika_item2: "राशी कुंडली",
    patrika_item3: "ग्रह दशा",
    patrika_item4: "भविष्य",
    footer_abhishek_title: "अभिषेक",
    abhishek_item1: "गणेश पूजन",
    abhishek_item2: "सत्यनारायण",
    footer_categories_title: "वर्ग",
    categories_item1: "पूजा सेवा",
    categories_item2: "बुकिंग",
    footer_contact_title: "संपर्क",
    contact_address: "मुंबई, भारत",
    contact_phone: "+91 xxxxxxxxxx",
  },
};

// ============================= 🌐 LANGUAGE =============================
function setLanguage(lang) {
  if (!translations[lang]) lang = "en";
  const t = translations[lang];

  document.querySelectorAll("[data-i18n-key]").forEach((el) => {
    const key = el.getAttribute("data-i18n-key");
    if (t[key]) el.innerText = t[key];
  });

  const mottoEl = document.getElementById("footerMessage");
  if (mottoEl) mottoEl.innerText = t.footer_motto;
}

// ============================= 🔱 POPUP + AUDIO =============================
function handlePopup() {
  const popup = document.getElementById("popup");
  const audio = document.getElementById("chant");

  if (!popup || !audio) return;

  popup.classList.add("show");

  audio.play().catch(() => {
    document.body.addEventListener(
      "click",
      () => audio.play(),
      { once: true }
    );
  });

  setTimeout(() => {
    popup.classList.remove("show");
    popup.classList.add("hide");
  }, 3500);
}

// ============================= 🙏 USER ID SYSTEM =============================
async function initUser() {
  let userId = localStorage.getItem("pujaUserId");

  if (!userId) {
    try {
      const res = await fetch("http://localhost:5000/api/users/register", {
        method: "POST",
      });

      const data = await res.json();

      if (data.userId) {
        localStorage.setItem("pujaUserId", data.userId);
        console.log("✅ New User:", data.userId);
      }
    } catch (err) {
      console.log("User Init Error:", err);
    }
  }

  window.currentUserId = localStorage.getItem("pujaUserId");
}

// ============================= 🔥 FETCH BHAKTI =============================
async function loadBhakti() {
  const container = document.getElementById("bhakti-container");
  if (!container) return; // skip if not present

  try {
    const res = await fetch("http://localhost:5000/api/bhakti");
    const data = await res.json();

    container.innerHTML = "";

    data.forEach((item) => {
      const div = document.createElement("div");

      div.className = "bg-white shadow p-4 rounded";

      div.innerHTML = `
        <h3 class="text-lg font-bold">${item.title}</h3>
        <p class="text-sm text-gray-500">${item.category}</p>
        <p class="mt-2 text-sm">${item.lyrics?.substring(0, 80) || ""}...</p>
      `;

      container.appendChild(div);
    });
  } catch (err) {
    console.log("Bhakti Error:", err);
  }
}

// ============================= 🚀 INIT APP =============================
window.addEventListener("DOMContentLoaded", async () => {
  // language
  const savedLang = localStorage.getItem("puja_lang") || "en";
  setLanguage(savedLang);

  const langSelect = document.getElementById("langSwitcher");
  if (langSelect) {
    langSelect.value = savedLang;
    langSelect.addEventListener("change", (e) => {
      const lang = e.target.value;
      localStorage.setItem("puja_lang", lang);
      setLanguage(lang);
    });
  }

  // features
  handlePopup();
  await initUser();
  loadBhakti();

  console.log("🚀 Puja Vidhi App Loaded");
});