export const contr = {
  isCreating: false,
  isEditing: false,
  isDeleting: false,
  forceOpenTasks: false,
  forceOpenSubtasks: false,
  trigger: 0,
};

export const form = {
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
