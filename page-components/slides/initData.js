import { uniqueIdGenerator } from 'lib';

export const initContr = {
  isCreating: false,
  isEditing: false,
  isDeleting: false,
  triggerDB: 0,
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

export const initSlide = {
  title: '',
  subtitle: '',
  objectFit: 'cover',
  rich: [{ type: 'paragraph', children: [{ text: '' }] }],
};

export const initTitle = {
  presentation: '',
  slide: '',
};
