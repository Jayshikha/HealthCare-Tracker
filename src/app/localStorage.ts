export class LocalStorageItem {
    id: number;
    name: string;
    workouts: any;
  
    constructor(id: number, name: string, workouts: { type: string; minutes: number }[]) {
      this.id = id;
      this.name = name;
      this.workouts = workouts;
    }
  }
  


 
// userData = [
//         {
//           id: 1,
//           name: 'John Doe',
//           workouts: [
//             { type: 'Running', minutes: 30 },
//             { type: 'Cycling', minutes: 45 }
//           ]
//         },
//         {
//           id: 2,
//           name: 'Jane Smith',
//           workouts: [
//             { type: 'Swimming', minutes: 60 },
//             { type: 'Running', minutes: 20 }
//           ]
//         },
//         {
//           id: 3,
//           name: 'Mike Johnson',
//           workouts: [
//             { type: 'Yoga', minutes: 50 },
//             { type: 'Cycling', minutes: 40 }
//           ]
//         },
//         ]