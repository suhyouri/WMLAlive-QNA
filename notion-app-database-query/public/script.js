const getDataFromBackend = async () => {
  const rest = await fetch('http://localhost:8000/movies');
  const data = await rest.json();
  console.log(data);
  return data;
};

const addData = async () => {
  const data = await getDataFromBackend();

  data.forEach((value) => {
    const div = document.createElement('div');
    div.classList.add('userContainer');
    console.log(value);
    div.innerHTML = `
          <h3>${value.name}</h3>
          <h3>${value.phone}</h3>
          <h3>${value.url}</h3>
      `;
    container.append(div);
  });
};

addData();
//<p>${value.tags.join(', ')}</p>