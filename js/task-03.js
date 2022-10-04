const images = [
  {
    url: 'https://images.pexels.com/photos/140134/pexels-photo-140134.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260',
    alt: 'White and Black Long Fur Cat',
  },
  {
    url: 'https://images.pexels.com/photos/213399/pexels-photo-213399.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260',
    alt: 'Orange and White Koi Fish Near Yellow Koi Fish',
  },
  {
    url: 'https://images.pexels.com/photos/219943/pexels-photo-219943.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260',
    alt: 'Group of Horses Running',
  },
];

const getEl = selector => document.querySelector(selector);

getEl('.gallery').insertAdjacentHTML(
  'beforeend',
  images
    .map(
      image =>
        `<li><img src=${image.url} alt=${image.alt} width='450px' height='auto' /></li>`,
    )
    .join(''),
);

getEl('.gallery').style.listStyle = 'none';
getEl('.gallery').style.display = 'flex';
getEl('.gallery').style.flexWrap = 'wrap';
getEl('.gallery').style.gap = '30px';
getEl('.gallery').style.justifyContent = 'center';
getEl('.gallery').style.alignItems = 'center';
