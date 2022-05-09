import http from './http';

function getTableData() {
  return http({
    url: '/export.json',
    method: 'GET'
  })
};

export { getTableData };