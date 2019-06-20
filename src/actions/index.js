// TODO: add and export your own actions
import cities from '../cities';

// eslint-disable-next-line import/prefer-default-export
export function setCities() {
  return {
    type: 'SET_CITIES',
    playload: cities
  };
}
