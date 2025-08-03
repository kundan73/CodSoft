
function Kundan(){
  alert("Data Submit Successfully")
}

document.querySelectorAll(".list-items").forEach((item) => {
        item.addEventListener("click", () => {
          const id = item.textContent.toLowerCase();
          const section = document.getElementById(id);
          if (section) section.scrollIntoView({ behavior: "smooth" });
        });
      });

      // Contact Submit Alert
      document.querySelector(".cv").addEventListener("click", () => {
        alert("Thank you! I'll reach out to you soon.");
        document.querySelector("form").reset();
      });
      
    