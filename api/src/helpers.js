const constants = require("./config/constants");

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

const splitOptions = (query, searchingField) => {
  const result = {
    [searchingField]: query[searchingField]
  };

  const resultIds =
    result[searchingField] && result[searchingField].length > 0
      ? JSON.parse(`[${result[searchingField]}]`)
      : null;

  delete query[searchingField];

  return resultIds;
};

const isAdmin = roles => {
  let isAdmin = false;

  roles.forEach(role => {
    if (role.title === constants.user.roles.admin) {
      isAdmin = true;
    }
  });

  return isAdmin;
};

const copyQuery = query => {
  return JSON.parse(JSON.stringify(query));
};

module.exports = { pagination, splitOptions, isAdmin, copyQuery };
