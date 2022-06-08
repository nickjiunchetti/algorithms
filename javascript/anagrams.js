const stringsArray = [
  'rope',
  'red rum',
  'silent',
  'pore',
  'murder',
  'listen',
  'repo',
  'endeavour'
]

const sortedChars = stringsArray.map(string =>
  string.replace(/\s+/g, '').split('').sort().join('')
)

const response = sortedChars.reduce((accArray, currentString, index, array) => {
  const firstStringIndex = array.indexOf(currentString)

  if (index === firstStringIndex) {
    accArray.push([stringsArray[index]])
  } else {
    const anagramGroupIndex = accArray.findIndex(innerArray => {
      return (
        innerArray[0].replace(/\s+/g, '').split('').sort().join('') ===
        currentString
      )
    })
    accArray[anagramGroupIndex].push(stringsArray[index])
  }

  return accArray
}, [])

console.log(response)
