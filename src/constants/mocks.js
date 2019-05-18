const requests = [
  {
    id : 1,
    bloodType : 'B+',
    name : 'Cristiano Ronald',
    age : 24,
    gender : 'Male',
    distance : 28,
    time : 12,
    priority : 'urgent'
  },
  {
    id : 2,
    bloodType : 'O+',
    name : 'Raul Gonzales',
    age : 24,
    gender : 'Male',
    distance : 45,
    time : 15,
    priority : 'urgent'
  },
  {
    id : 3,
    bloodType : 'A-',
    name : 'Sergio Ramos',
    age : 32,
    gender : 'Male',
    distance : 30,
    time : 10,
    priority : 'urgent'
  },
]

const chart =[
  1.1,
  3,
  1.5,
  2.3,
  3.2,
  7,
  8.2,
  1.2,
  2,
  1.2,
  8,
  3.8,
  5.8,
  3.9,
  5.1,
  0.1,
  6
]

const user = {
  avatar : require('../assets/images/avatar.png')
}

export { requests , chart , user}