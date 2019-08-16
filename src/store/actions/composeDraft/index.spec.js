import configureMockStore from 'redux-mock-store';
import thunk from 'redux-thunk';
import mockAxios from 'axios';
import * as actions from './index';

import * as types from '../../actiontypes/messages';

window.localStorage = localStorage;

const middlewares = [thunk];
const mockStore = configureMockStore(middlewares);

describe('compose draft actions', () => {
  test('should create an action for compose draft pending', () => {
    const expectedAction = {
      type: types.COMPOSEDRAFT_PENDING,
      payload: {
        composedraftStatus: 'pending'
      }
    };
    expect(actions.composeDraftPending()).toEqual(expectedAction);
  });

  test('should create an action for compose draft success', () => {
    const expectedAction = {
      type: types.COMPOSEDRAFT_SUCCESSFUL,
      payload: {
        composedraftStatus: 'success',
        composedraftSuccess: { message: 'Message saved as draft' }
      }
    };
    expect(
      actions.composeDraftSuccess({ message: 'Message saved as draft' })
    ).toEqual(expectedAction);
  });

  test('should create an action for compose draft failure', () => {
    const expectedAction = {
      type: types.COMPOSEDRAFT_FAILURE,
      payload: {
        composedraftStatus: 'fail',
        composedraftError: { error: 'Message not saved as draft' }
      }
    };
    expect(
      actions.composeDraftFailure({ error: 'Message not saved as draft' })
    ).toEqual(expectedAction);
  });

  // test('should make asynchronous request to create draft message', () => {
  //   const draftMessage = {
  //     recipient: 'tolumide@epicmail.com',
  //     subject: 'A good subject',
  //     message: 'A good message'
  //   };
  //   const draftResponse = {
  //     message: 'Draf saved successfully'
  //   };
  //   const store = mockStore({ data: [] });
  //   mockAxios.mockImplementationOnce(() =>
  //     Promise.resolve({
  //       data: {
  //         data: [draftResponse]
  //       }
  //     })
  //   );
  //   store.dispatch(actions.composeDraftAction({ ...draftMessage }));
  // });
});
