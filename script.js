const projectsContainer = document.getElementById('projectsContainer');
const articlesContainer = document.getElementById('articlesContainer');
const otherContainer = document.getElementById('otherContainer');

const projects = [
  {
    image: 'img/project-1.png',
    name: 'Design company website',
    link: 'https://vsafonova.github.io/Portfolio/SkillFactory/Project%20Lending/',
    description:
    'The straightforward design company website. It"s responsive so it looks good on a laptop and smartphone',
    tags: ['HTML', 'CSS', 'JavaScript']
  },
];

const otherProjects = [
  // {
  //   name: 'I was poisoned by Putin',
  //   link: 'https://en.wikipedia.org/wiki/Poisoning_of_Alexei_Navalny#:~:text=On%2020%20August%202020%2C%20Russian,was%20hospitalized%20in%20serious%20condition.',
  //   description:
  //     'On 20 August 2020, I was poisoned with a Novichok nerve agent and was hospitalized in serious condition.',
  //   tags: ['Novichok'],
  // },
  // {
  //   name: 'Now I am in prison',
  //   link: 'https://en.wikipedia.org/wiki/Poisoning_of_Alexei_Navalny#Return_and_imprisonment',
  //   description:
  //     '6/8 In my last word, I spoke, of course, about the war. About how it became a direct consequence of corruption and degradation. A bloody cover for the failure of the Putin regime.',
  //   tags: ['Stand with Ukraine'],
  // },
];

const articles = [
  {
    image: 'img/article.jpg',
    title: 'The cat-and-mouse experience of Proton, a Swiss company, shows what it"s like to be targeted by Russian censors — and what it takes to fight back.',
    link: 'https://www.nytimes.com/2022/12/06/technology/russia-internet-proton-vpn.html',
    description:
      'The New York Times article about VPN in Russia where my partner and I were mentioned',
  },
];

projects.forEach((item) => {
  projectsContainer.innerHTML += `
  <a
  href=${item.link}
  rel="noopener"
  target="_blank"
>
  <div class="card">
    <div class="image-container" style="background-image: url('')">
      <img src="${item.image}"/>
    </div>
    <div class="card-text">
      <h2>${item.name}</h2>
      <p>
      ${item.description}
        <span class="arrow-link">>></span>
      </p>
    </div>
    <div class="tags-container" id="tags">
      ${item.tags.map((tag) => `<span class="tags">${tag}</span>`).join('')}
    </div>
  </div>
</a>
  `;
});

otherProjects.forEach((item) => {
  otherContainer.innerHTML += `
  <a
  href=${item.link}
  rel="noopener"
  target="_blank"
>
  <div class="content-container">
    <h2>${item.name}</h2>
    <p>
    ${item.description}
      <span class="arrow-link">>></span>
    </p>
  </div>
  <div class="other-tags-container">
  ${item.tags.map((tag) => `<span class="tags">${tag}</span>`).join('')}
  </div>
</a>
  `;
});

articles.forEach((item) => {
  articlesContainer.innerHTML += `
  <a
  class="card"
  href=${item.link}
  rel="noopener"
  target="_blank"
>
  <div class="image-container">
    <img
      class="image"
      src=${item.image}
      alt="code-article"
    />
  </div>
  <div class="card-text">
    <h2>${item.title}</h2>
    <p>
    ${item.description}
      <span class="arrow-link">>></span>
    </p>
  </div>
</a>
  `;
});
