const { NotImplementedError } = require('../extensions/index.js');

/**
 * Given an email address, return it's domain.
 *
 * @param {String} email
 * @return {String}
 *
 * @example
 * For the input 'prettyandsimple@example.com', the output should be 'example.com'
 *
 */
 function getEmailDomain(email) { 
    let newEmail = email;
    if (newEmail.indexOf('@') === -1) {
      return newEmail;
    } else {
      newEmail = newEmail.substr(newEmail.indexOf("@") + 1);
      return getEmailDomain(newEmail);
    }
}

module.exports = {
  getEmailDomain
};
