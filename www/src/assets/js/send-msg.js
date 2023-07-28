const form = document.querySelector('#form-id');
form.addEventListener('submit', async (event) => {
  event.preventDefault();
  const formData = new FormData(form);
  const data = Object.fromEntries(formData.entries());
  const response = await fetch('https://api.byteplex.info/api/test/contact/', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json'
    },
    body: JSON.stringify(data)
  });
  if (response.status === 200) {
    const result = await response.json();
    console.log("yes");
  }
  else{
    console.log("no");
  }
});