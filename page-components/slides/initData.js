import { uniqueIdGenerator } from 'lib';

export const initController = {
  isCreating: false,
  isEditing: false,
  isDeleting: false,
};

export const initForm = {
  title: '',
  descr: '',
  published: false,

  owner: [],
  users: [],
  group: [],

  slides: [],

  createdAt: '',
};

export const newSlide = {
  id: uniqueIdGenerator(),
  title: '',
  subtitle: '',
  rich: [],
};

export const initTitle = {
  presentation: '',
  slide: '',
};
