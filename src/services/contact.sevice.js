const { db } = require('../models');

/**
 * Create a Contact
 * @param {Object} contactBody
 * @returns {Promise<Contact>}
 */
const createContact = async (contactBody) => {
  const { fullName, emailAddress, phoneNumber, courseOfStudy, interestedCountry, hasUniversityInMind, budget } = contactBody;
  const newContact = ({
    fullName,
    emailAddress,
    phoneNumber,
    courseOfStudy,
    interestedCountry,
    hasUniversityInMind,
    budget,
  });

return db.contacts.create(newContact);
};


module.exports = {
  createContact,
};
