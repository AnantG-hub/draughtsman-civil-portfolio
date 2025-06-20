const container = document.getElementById("container");
document.getElementById("signUp").addEventListener("click", () => {
  container.classList.add("right-panel-active");
});
document.getElementById("signIn").addEventListener("click", () => {
  container.classList.remove("right-panel-active");
});

// Signup form submit
document.getElementById("signupForm").addEventListener("submit", async (e) => {
  e.preventDefault();
  const data = {
    username: e.target.username.value,
    password: e.target.password.value
  };
  const res = await fetch("/auth/signup", {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(data)
  });
  const result = await res.json();
  alert(result.message);
});

// Login form submit
document.getElementById("loginForm").addEventListener("submit", async (e) => {
  e.preventDefault();
  const data = {
    username: e.target.username.value,
    password: e.target.password.value
  };
  const res = await fetch("/auth/login", {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(data)
  });
  const result = await res.json();
  alert(result.message);
});
