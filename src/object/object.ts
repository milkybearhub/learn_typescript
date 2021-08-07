export default function objectSample() {
  const a: object = {
    name: 'Milkybear',
    age: 32
  }
  // Error
  // a.name

  let country: {
    language: string
    name: string
  } = {
    language: 'Japanese',
    name: 'Japan'
  }

  console.log('Object object sample 1:', country)

  country = {
    language: 'English',
    name: 'USA'
  }

  console.log('Object object sample 2:', country)

  // オプショナルとreadonly
  const person: {
    age: number
    lastName: string
    readonly firstName: string
    gender?: string
  } = {
    age: 28,
    lastName: 'Odagawa',
    firstName: 'Masatoshi'
  }

  person.gender = 'male'
  person.lastName = 'Hinohara'
  // Error
  // person.firstName = 'Teruko'

  console.log('Object object sample 3', person)

  // インデックスシグネチャ
  const capitals: {
    [countryName: string]: string
  } = {
    Japan: 'Tokyo',
    Korea: 'Seoul'
  }

  capitals.China = 'Beijing'
  capitals.Canada = 'Ottawa'

  console.log('Object object sample 4:', capitals)
}
