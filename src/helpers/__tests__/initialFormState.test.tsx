import { formConfiguration } from '../../components/TaskForm/constants';
import { initialFormState } from '../initialFormState';

describe('Initial Form State', () => {
  it('should correctly initialize the form state', () => {
    formConfiguration.forEach((config) => {
      expect(initialFormState[config.stateField]).toEqual({
        value: config.stateDefault,
        error: null,
      });
    });
  });
});