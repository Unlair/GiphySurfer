import {
  OPEN_MODAL,
  CLOSE_MODAL,
} from '../constants/сontentConst';

export function openModal(pic) {
  return {
    type: OPEN_MODAL,
    payload: pic,
  };
}

export function closeModal() {
  return {
    type: CLOSE_MODAL,
  };
}
