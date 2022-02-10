export const initController = {
  isCreating: false,
  isEditing: false,
  isDeleting: false,
};

export const initFormData = {
  _id: '',

  owners: [],
  users: [],

  title: '',
  category: '',
  body: '',

  deadline: '',
  startTime: '',

  stages: [
    {
      id: '',
      _id: '',

      title: '',
      deadline: '',
      body: '',

      tasks: [
        {
          id: '',
          _id: '',

          title: '',
          v: 0,
          deadline: '',

          subtasks: [
            {
              id: '',
              _id: '',
              assignedTo: [],
              title: '',
              resolved: false,
              timeRemaining: 30,
            },
          ],
        },
      ],
    },
  ],
};
