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
            { type: 'Running', minutes: 20 }
        ]
    },
    {
        id: 3,
        name: 'Mike Johnson',
        workouts: [
            { type: 'Yoga', minutes: 50 },
            { type: 'Cycling', minutes: 40 }
        ]
    },
    {
        id: 4,
        name: 'Mike Johnson',
        workouts: [
            { type: 'Yoga', minutes: 50 },
            { type: 'Cycling', minutes: 40 }
        ]
    },
    {
        id: 5,
        name: 'Mike Johnson',
        workouts: [
            { type: 'Yoga', minutes: 50 },
            { type: 'Cycling', minutes: 40 }
        ]
    },
    
    {
        id: 6,
        name: 'Mike Johnson',
        workouts: [
            { type: 'Yoga', minutes: 50 },
            { type: 'Cycling', minutes: 40 }
        ]
    },
    
];
