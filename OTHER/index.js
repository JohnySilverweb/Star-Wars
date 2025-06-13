const myData = {
    name: 'Egor',
    surname: 'Egorov',
    age: 20,
    sex: 'man',
    iLiveIn() {
        let city = 'Moscov'
        return city;
    }
};

const myParents = {
    dad: 'Denis',
    mom: '??',
    babushka: 'BABUSHKA',
}

const myFullData = {
    ...myData,
    city: myData.iLiveIn()
}

function changeAge(person) {
    person.age += 1
    return person
} 

changeAge(myData)



function increaseAge(person) {
    const updatedPerson = Object.assign({}, person)
    updatedPerson.age += 1
    return updatedPerson
}


function newFn() {
   function withinFn() {
        console.log(zz)
    }
    withinFn()
}

const allData = {
    ...myFullData,
    ...myParents,
    also: 'i am gay'
}

/* console.table(allData)

const myFirstArray = [0, undefined, 'Maks']
console.log(myFirstArray[0])

const mySecondArray = new Array('maks', 'egor', 'kirill', 'giorno')
console.log(mySecondArray[2]) */


const numbers = [3, 6, 9]
const bNumbers = numbers.map(el => el / 3)
console.log(numbers)
console.log(bNumbers)


const friends = [
    {name: 'Egor', sex: 'female'},
    {name: 'Kirill', sex: 'male'}
]

const males = friends.filter(({sex}) => sex === 'male')
/* console.log(friends) */
console.log(males)

const abatukam = 12;
const steven = 15

if(steven === 15) {
    console.log(abatukam)
} else if(abatukam === 12) {
    console.log('amabatukam')
}
else {
    console.log('no')
}

const guys = [
    maks = {age: 20, penis: 72},
    kirill = {age: 21, penis: '??'}
]


const {name, surname} = myData
console.log(name, surname)


const randomN = [22, 11, 34];
const [fitst, second, third] = randomN;
console.log(second)


console.log('Request data...')

/* const p = new Promise((resolve, reject) => {
    setTimeout(() => {
        console.log('Prepairing data...')
        const backendData = {
            status: 'working',
            cabel: 'UTF'
        }
        resolve(backendData)
    }, 2000)
})

p.then(data => {
   const p2 = new Promise((resolve, reject) => {
    setTimeout(() => {
        resolve(data)
        data.modified = true
    }, 2000)
   })
}).then(clientData => {
    console.log('Data recieved', clientData)
}) */


const pp = new Promise((resolve, reject) => {
    resolve(33)
})

pp.then(value => {
    console.log(value)
})