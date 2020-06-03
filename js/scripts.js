// End point - https://api.github.com/users/ivosoares/repos

const btnRepos = document.getElementById('btnRepos');
const divResult = document.getElementById('divResult');
btnRepos.addEventListener("click", getRepos);

// função acessa api do git

async function getRepos() {
  const url = 'https://api.github.com/users/larissasiq/repos';
  const response = await fetch(url)
  const result =  await response.json()

  console.log(response);
  console.log(result);

  result.forEach(element => {
    const link = document.createElement("a");
    link.href = element.html_url;
    link.textContent = element.full_name;
    divResult.appendChild(link);
    divResult.appendChild(document.createElement("br"));
  });

}