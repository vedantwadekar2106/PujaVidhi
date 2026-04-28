const form = document.getElementById("patrikaForm");
const status = document.getElementById("status");

function isText(value) {
  return /^[A-Za-z ]+$/.test(value);
}

form.addEventListener("submit", async (e) => {
  e.preventDefault();

  // ensure userId exists
  if (!localStorage.getItem("pujaUserId")) {
    localStorage.setItem("pujaUserId", "USER-" + Date.now());
  }

  const data = {
    userId: localStorage.getItem("pujaUserId"),
    email: document.getElementById("email").value.trim(),

    name: document.getElementById("name").value.trim(),
    gender: document.getElementById("gender").value,
    fatherName: document.getElementById("fatherName").value.trim(),
    motherName: document.getElementById("motherName").value.trim(),
    dob: document.getElementById("dob").value,

    tob: document.getElementById("time").value, // ✅ correct

    place: document.getElementById("place").value.trim(),
    type: document.getElementById("type").value
  };

  // VALIDATION
  if (!data.name || !isText(data.name)) return alert("Enter valid name");
  if (!data.email) return alert("Enter email");
  if (!data.gender) return alert("Select gender");
  if (!data.fatherName || !isText(data.fatherName)) return alert("Enter valid father name");
  if (!data.motherName || !isText(data.motherName)) return alert("Enter valid mother name");
  if (!data.dob) return alert("Select DOB");
  if (!data.tob) return alert("Select time"); // ✅ FIXED
  if (!data.place) return alert("Enter place");
  if (!data.type) return alert("Select Patrika type");

  status.innerText = "Submitting your details...";

  try {
    const res = await fetch("http://localhost:5000/api/patrika", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(data)
    });

    const result = await res.json();

    if (result.success) {
      status.innerText = "✅ " + result.message;
      form.reset();
    } else {
      status.innerText = "❌ Error: " + result.message;
    }
  } catch (err) {
    status.innerText = "❌ Server error";
  }
});

// ----- TIME FIX + FULL MINUTES -----
(function() {
  const hourSelect = document.getElementById('hourSelect');
  const minuteSelect = document.getElementById('minuteSelect');
  const ampmSelect = document.getElementById('ampmSelect');
  const timeInput = document.getElementById('time');

  // ✅ GENERATE 00–59 MINUTES
  for (let i = 0; i < 60; i++) {
    const val = String(i).padStart(2, '0');
    const option = document.createElement("option");
    option.value = val;
    option.textContent = val;
    minuteSelect.appendChild(option);
  }

  function updateTimeInput() {
    let hour = parseInt(hourSelect.value, 10);
    const minute = minuteSelect.value;
    const ampm = ampmSelect.value;

    if (ampm === 'PM' && hour !== 12) {
      hour += 12;
    } else if (ampm === 'AM' && hour === 12) {
      hour = 0;
    }

    const formattedHour = String(hour).padStart(2, '0');
    timeInput.value = `${formattedHour}:${minute}`;
  }

  hourSelect.addEventListener('change', updateTimeInput);
  minuteSelect.addEventListener('change', updateTimeInput);
  ampmSelect.addEventListener('change', updateTimeInput);

  updateTimeInput();
})();