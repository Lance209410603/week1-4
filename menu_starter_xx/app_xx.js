const menu = [
    {
        id: 1,
        title:"buttermilk pancake",
        category:'breakfast',
        price:15.59,
        img: './images/item-1.jpeg',
        remote_img:'',
        desc:'Lorem ipsum dolor sit amet consectetur adipisicing elit. Laboriosam odio minus asperiores voluptates dolorum, provident dolores dolorem culpa harum iusto consequuntur id. Molestias amet architecto animi sed explicabo repudiandae cumque!'

    },
    {
        id: 2,
        title:"dinner double",
        category:'dinner',
        price:13.59,
        img: './images/item-2.jpeg',
        remote_img:'',
        desc:'Lorem ipsum dolor sit amet consectetur adipisicing elit. Laboriosam odio minus asperiores voluptates dolorum, provident dolores dolorem culpa harum iusto consequuntur id. Molestias amet architecto animi sed explicabo repudiandae cumque!'

    },
    {
        id: 3,
        title:"dinner double",
        category:'shake',
        price:13.99,
        img: './images/item-3.jpeg',
        remote_img:'',
        desc:'Lorem ipsum dolor sit amet consectetur adipisicing elit. Laboriosam odio minus asperiores voluptates dolorum, provident dolores dolorem culpa harum iusto consequuntur id. Molestias amet architecto animi sed explicabo repudiandae cumque!'

    },
    {
        id: 4,
        title:"egg salad",
        category:'shake',
        price:13.99,
        img: './images/item-4.jpeg',
        remote_img:'',
        desc:'Lorem ipsum dolor sit amet consectetur adipisicing elit. Laboriosam odio minus asperiores voluptates dolorum, provident dolores dolorem culpa harum iusto consequuntur id. Molestias amet architecto animi sed explicabo repudiandae cumque!'

    },
    {
        id: 5,
        title:"hamburger",
        category:'shake',
        price:13.99,
        img: './images/item-5.jpeg',
        remote_img:'',
        desc:'Lorem ipsum dolor sit amet consectetur adipisicing elit. Laboriosam odio minus asperiores voluptates dolorum, provident dolores dolorem culpa harum iusto consequuntur id. Molestias amet architecto animi sed explicabo repudiandae cumque!'

    },
    {
        id: 6,
        title:"pizza",
        category:'shake',
        price:13.99,
        img: './images/item-6.jpeg',
        remote_img:'',
        desc:'Lorem ipsum dolor sit amet consectetur adipisicing elit. Laboriosam odio minus asperiores voluptates dolorum, provident dolores dolorem culpa harum iusto consequuntur id. Molestias amet architecto animi sed explicabo repudiandae cumque!'

    }
    
];




const btn = ['all', 'breakfast', 'lunch', 'shakes'];

const sectionCenter = document.querySelector('.section-center');
const btnContainer = document.querySelector('.btn-container');

const displayMenuItems = (menu) => {
  let displayMenu = menu.map((item) => {
    return `
        <article class="menu-item">
        <img src=${item.img} alt=${item.title} class="photo" />
        <div class="item-info">
          <header>
            <h4>${item.title}</h4>
            <h4>${item.price}</h4>
          </header>
          <p class="item-text">
          ${item.desc}
          </p>
        </div>
      </article>
        `;
  });
  console.log('displayMenu before', displayMenu);
  displayMenu = displayMenu.join('');
  console.log('displayMenu after', displayMenu);
  sectionCenter.innerHTML = displayMenu;
};

const btnItems = (btn) => {
  let btnMenu = btn.map((item) => {
    return `
    <button type="button" class="filter-btn" data-id='${item}'>${item}</button>
        `;
  });
  btnMenu = btnMenu.join('');
  console.log("12",btnMenu);
  btnContainer.innerHTML = btnMenu;
};
const categories = ['all',...new Set(menu.map((item) =>
item.category))];
window.addEventListener('DOMContentLoaded', () => {
  btnItems(categories);
});

console.log(categories);
window.addEventListener('DOMContentLoaded', () => {
  displayMenuItems(menu);

});