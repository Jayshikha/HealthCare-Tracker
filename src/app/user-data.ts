// user-data.ts
export interface Workout {
    type: string;
    minutes: number;
  }
  
  export interface User {
    id: number;
    name: string;
    workouts: Workout[];
  }

export const UserData = [
    {
        id: 1,
        name: 'John Doe',
        workouts: [
            { type: 'Running', minutes: 30 },
            { type: 'Cycling', minutes: 45 }
        ]
    },
    {
        id: 2,
        name: 'Jane Smith',
        workouts: [
            { type: 'Swimming', minutes: 60 },
            { type: 'Running', minutes: 20 },
            { type: 'Pilates', minutes: 25 }
        ]
    },
    {
        id: 3,
        name: 'Mike Johnson',
        workouts: [
            { type: 'Yoga', minutes: 50 },
            { type: 'Cycling', minutes: 40 },
            { type: 'Running', minutes: 60 }
        ]
    },
    {
        id: 4,
        name: 'Emily Davis',
        workouts: [
            { type: 'Running', minutes: 25 },
            { type: 'Pilates', minutes: 35 }
        ]
    },
    {
        id: 5,
        name: 'Chris Wilson',
        workouts: [
            { type: 'Strength Training', minutes: 50 },
            { type: 'Running', minutes: 30 }
        ]
    },
    {
        id: 6,
        name: 'Sarah Brown',
        workouts: [
            { type: 'Swimming', minutes: 40 },
            { type: 'Yoga', minutes: 45 }
        ]
    },
    {
        id: 7,
        name: 'David Taylor',
        workouts: [
            { type: 'Cycling', minutes: 60 },
            { type: 'Running', minutes: 35 }
        ]
    },
    {
        id: 8,
        name: 'Laura Wilson',
        workouts: [
            { type: 'Running', minutes: 20 },
            { type: 'Swimming', minutes: 30 },
            { type: 'Pilates', minutes: 50 }
        ]
    },
    {
        id: 9,
        name: 'James Anderson',
        workouts: [
            { type: 'Strength Training', minutes: 55 },
            { type: 'Cycling', minutes: 45 }
        ]
    },
    {
        id: 10,
        name: 'Olivia Martinez',
        workouts: [
            { type: 'Strength Training', minutes: 55 },
            { type: 'Swimming', minutes: 30 },
            { type: 'Yoga', minutes: 40 }
        ]
    }
    
];
