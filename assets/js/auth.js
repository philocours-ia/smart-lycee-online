import supabaseClient from "./supabase.js";

document
.getElementById("loginForm")
.addEventListener("submit", async(e)=>{

e.preventDefault();

const email =
document.getElementById("email").value;

const password =
document.getElementById("password").value;

const {error} =
await supabaseClient.auth.signInWithPassword({
email,
password
});

if(error){
alert(error.message);
return;
}

window.location.href =
"dashboard-admin.html";

});