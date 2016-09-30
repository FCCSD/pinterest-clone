import UserStore from './UserStore.js';

it('Returns the user info', () => {
  expect(UserStore.getUser()).toEqual(UserStore.user)
})
