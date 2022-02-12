import { uniqueIdGenerator } from 'lib';

export const initController = {
  isCreating: false,
  isEditing: false,
  isDeleting: false,
  forceOpenTasks: false,
  forceOpenSubtasks: false,
  triggerDB: 0,
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

export const emptyStage = {
  id: uniqueIdGenerator(),
  title: '',
  descr: '',

  tasks: [
    {
      title: '',
      assignedTo: [],
      id: uniqueIdGenerator(),
      subtasks: [
        {
          id: uniqueIdGenerator(),
          title: '',
          timeRemaining: 0,
          resolved: false,
        },
      ],
    },
  ],
};
export const newTask = {
  title: '',
  assignedTo: [],
  id: uniqueIdGenerator(),
  subtasks: [
    {
      id: uniqueIdGenerator(),
      title: '',
      timeRemaining: 0,
      resolved: false,
    },
  ],
};
export const newSubtask = {
  id: uniqueIdGenerator(),
  title: '',
  timeRemaining: 0,
  resolved: false,
};
