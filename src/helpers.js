const pagination = query => {
  let pageNum, sizeNum;
  let { page, size } = query;

  page = parseInt(page);
  size = parseInt(size);

  page ? (pageNum = page) : (pageNum = 1);
  size ? (sizeNum = size) : (sizeNum = 5);

  const offset = (pageNum - 1) * sizeNum;
  const limit = sizeNum;

  const pagination = {
    offset,
    limit
  };

  delete query.page;
  delete query.size;

  return { pagination };
};

module.exports = { pagination };
