fetch("http://localhost:5000/api/bhakti")
  .then(res => res.json())
  .then(data => {
    const container = document.getElementById("bhakti-container");

    data.forEach(item => {
      const div = document.createElement("div");

      div.innerHTML = `
        <h3>${item.title}</h3>
        <p>${item.category}</p>
        <p>${item.content}</p>
      `;

      container.appendChild(div);
    });
  })
  .catch(err => console.log(err));

  // 🔱 POPUP
window.onload = () => {
  const popup = document.getElementById("popup");
  const audio = document.getElementById("chant");

  popup.classList.remove("hidden");

  audio.play().catch(() => {
    document.body.addEventListener("click", () => audio.play(), { once: true });
  });

  setTimeout(() => {
    popup.classList.add("hidden");
  }, 3000);
};

// 🔥 FETCH BHAKTI DATA
fetch("http://localhost:5000/api/bhakti")
  .then(res => res.json())
  .then(data => {
    const container = document.getElementById("bhakti-container");

    data.forEach(item => {
      const div = document.createElement("div");

      div.className = "bg-white shadow p-4 rounded";

      div.innerHTML = `
        <h3 class="text-lg font-bold">${item.title}</h3>
        <p class="text-sm text-gray-500">${item.category}</p>
        <p class="mt-2 text-sm">${item.content.substring(0, 80)}...</p>
      `;

      container.appendChild(div);
    });
  })
  .catch(err => console.log(err));

  // Run on every page load
window.addEventListener("DOMContentLoaded", async () => {
  let userId = localStorage.getItem("pujaUserId");

  if (!userId) {
    // First time user → create new ID
    const res = await fetch("http://localhost:5000/api/users/register", {
      method: "POST",
    });

    const data = await res.json();

    if (data.userId) {
      localStorage.setItem("pujaUserId", data.userId);
      console.log("New User Created:", data.userId);
    }
  } else {
    console.log("Existing User:", userId);
  }

  // make global
  window.currentUserId = localStorage.getItem("pujaUserId");
});