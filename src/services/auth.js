async function login(username, password) {
  console.log("Name: ", username);
  console.log("Password: ", password);
  const res = await fetch("/api/signin");
  return res;
}

async function signup(username, password, repeatpassword) {
  console.log("Name: ", username);
  console.log("Password: ", password);
  console.log("Repeat Password: ", repeatpassword);
  const res = await fetch("/api/signup");
  return res;
}

export { login, signup };
