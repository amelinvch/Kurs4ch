'use strict';

function user() {
  const userInfo = {
    userId: 0,
    userName: 'anonymous',
    like: [],
  };
  document.cookie = JSON.stringify(userInfo);
}
if (document.cookie === '') {
  user();
}
