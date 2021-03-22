import Vue from 'vue'

Vue.filter('price', (num) => {
  if (isNaN(num)) return 'Not a Number'
  let price = ''
  const reverseNumber = num
    .toString()
    .split('')
    .reverse()
    .join('')
  const arrReverseNumber = [...Array(reverseNumber.length).keys()]
  arrReverseNumber.map(index => {
    if (index % 3 === 0) price += reverseNumber.substr(index, 3) + '.'
  })

  return `Rp ${
    price.split('', price.length - 1)
    .reverse()
    .join('')
  }`
})

Vue.filter('phone', function (value) {
  if (!value) return ''
  return value.substring(0, 4) + ' - XXXX - XXXX'
})

Vue.filter('email', function (value) {
  if (!value) return ''
  return value.substring(0, 5) + '@XXXX'
})
