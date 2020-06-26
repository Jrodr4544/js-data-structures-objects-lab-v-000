// Write your solution in this file!
// <<<<<<< HEAD


var driver = {}

function updateDriverWithKeyAndValue(driver, key, value) {
  return Object.assign({}, driver, {[key]: value})
}

function destructivelyUpdateDriverWithKeyAndValue(driver, key, value) {
  driver[key] = value
  return driver
}

function deleteFromDriverByKey(driver, key) {
  let updatedDriver = Object.assign({}, driver)
  delete updatedDriver[key]
  return updatedDriver
}

function destructivelyDeleteFromDriverByKey(driver, key) {
  delete driver[key]
  return driver
}

=======
function drivers() {
  var driver = {
    
  }
}

var drivers = {
  driver: {
  
  }
}
>>>>>>> 3a68fbab3611ea749bef2594598a6895ef541199
