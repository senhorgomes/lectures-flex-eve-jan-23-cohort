//Easier way to access this bigObject?

const bigObject = {
  level: 1,
  floors: {
    basement: {
      level: -1,
    },
    main: {
      level: 1,
      floors: {
        second: {
          level: 2,
        }
      }
    }
  },
}

const number2 = bigObject.floors.main.floors.second.level; // 2
const floorsOfMain = bigObject.floors.main.floors;