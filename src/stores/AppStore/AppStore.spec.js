import AppStore from './AppStore.js';

it('Returns the stored data', () => {
  expect(AppStore.returnData()).toEqual(AppStore.data)
})
