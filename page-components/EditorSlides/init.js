export const contr = {
  isCreating: false,
  isEditing: false,
  isDeleting: false,
  trigger: 0,
};

export const form = {
  title: '',
  descr: '',
  published: false,

  owner: [],
  users: [],
  group: [],

  slides: [],

  createdAt: '',
};

export const slide = {
  title: '',
  subtitle: '',
  objectFit: 'cover',
  rich: [{ type: 'paragraph', children: [{ text: '' }] }],
};

export const titles = {
  presentation: '',
  slide: '',
};
