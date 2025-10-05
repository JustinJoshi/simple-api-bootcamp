document.querySelector('#first').addEventListener('click', getData)
document.querySelector('#second').addEventListener('click', getData1)

async function getData() {
  const url = "https://api.thecatapi.com/v1/images/search";
  try {
    const response = await fetch(url);
    if (!response.ok) {
      throw new Error(`Response status: ${response.status}`);
    }

    const result = await response.json();
    document.querySelector('div').innerHTML += `<img src=${result[0].url}>`
  } catch (error) {
    console.error(error.message);
  }
}

async function getData1(e) {
  const url = "https://api.thecatapi.com/v1/images/search?limit=10";
  try {
    const response = await fetch(url);
    if (!response.ok) {
      throw new Error(`Response status: ${response.status}`);
    }

    const result = await response.json();
    result.forEach((x, i) => {
        document.querySelector('div').innerHTML += `<img src=${result[i].url}>`
        console.log('hi') 
    })
  } catch (error) {
    console.error(error.message);
  }
}