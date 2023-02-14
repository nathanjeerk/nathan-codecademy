function generateRandomNumber(num) {
    // Gets # from 0 -> num - 1
    return Math.floor(Math.random() * num)
  }
  
  const dudeCars = {
    brand: ['BMW', 'BENZ', 'SUBARU', 'HONDA'],
    speed: ['fast', 'slow', 'so turtle!', 'damn fast!', 'meh'],
    advice: ['go out and drive more', 'stay home', 'drift', 'be a family']
  }
  
  // Store the 'wisdom' in an array
  let personalWisdom = []
  
  // Iterate over the object
  for(let prop in dudeCars) {
    let optionIdx = generateRandomNumber(dudeCars[prop].length)
  
    // use the object's properties to customize the message being added to personalWisdom  
    switch(prop) {
      case 'brand':
        personalWisdom.push(`I bet you drive "${dudeCars[prop][optionIdx]}".`)
        break
      case 'speed':
        personalWisdom.push(`because i saw you drive "${dudeCars[prop][optionIdx]}".`)
        break
      case 'advice':
        personalWisdom.push(`You should: "${dudeCars[prop][optionIdx]}".`)
        break
      default:
        personalWisdom.push('There is not enough info.')
    }
  }
  
  function formatWisdom(wisdom) {
    // Add some ASCII here?
    // Add in more symbols to the array? like emojies or what not?
    const formatted = personalWisdom.join('\n')
    console.log(formatted)
  }
  
  formatWisdom(personalWisdom);