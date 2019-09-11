const pagination = ({ total = 1, activePage = 1 } = {}) => {
  if (typeof total !== 'number') {
    throw new TypeError('Total is Not a Number => Total isNaN.');
  }
  if (typeof activePage !== 'number') {
    throw new TypeError('Active Page is Not a Number => Active Page isNaN.');
  }
  if (total <= 5) {
    return Array.from({ length: total }, (_, i) => i + 1);
  }

  // { total, activePage }
  const centerRule = () => {
    if ((activePage - 1) <= 0) {
      return 1;
    }
    if (activePage === total) {
      return activePage - 2;
    }
    return activePage - 1;
  };

  const visiblePages = 3;
  let pages = [
    1,
    ...Array.from({ length: visiblePages }, (_, i) => i + centerRule({ total, activePage })),
    total,
  ];
  pages = pages.filter((page, index, array) => array.indexOf(page) === index);

  let firstPage = pages[0];
  let secondPage = pages[1];
  if (secondPage === (firstPage + 2)) {
    pages = [
      firstPage,
      firstPage + 1,
      ...pages.slice(1),
    ];
  }

  // eslint-disable-next-line prefer-destructuring
  firstPage = pages[0]; secondPage = pages[1];
  if (secondPage >= (firstPage + 2)) {
    pages = [
      firstPage,
      '...',
      ...pages.slice(1),
    ];
  }

  let lastPage = pages[pages.length - 1];
  let penultimatePage = pages[pages.length - 2];
  if (penultimatePage === (lastPage - 2)) {
    pages = [
      ...pages.slice(0, -1),
      lastPage - 1,
      lastPage,
    ];
  }

  lastPage = pages[pages.length - 1];
  penultimatePage = pages[pages.length - 2];
  if (penultimatePage <= (lastPage - 2)) {
    pages = [
      ...pages.slice(0, -1),
      '...',
      lastPage,
    ];
  }


  return pages;
};

export default pagination;
