module.exports = (sequelize, dataType) => {
  const Contact = sequelize.define('Contact', {
    fullName: {
      type: dataType.STRING,
      allowNull: false,
    },
    emailAddress: {
      type: dataType.STRING,
      allowNull: false,
    },
    phoneNumber: {
      type: dataType.STRING,
      allowNull: false,
    },
    courseOfStudy: {
      type: dataType.STRING,
      allowNull: false,
    },
    interestedCountry: {
      type: dataType.STRING,
      allowNull: false,
    },
    hasUniversityInMind: {
      type: dataType.STRING,
      allowNull: false,
    },
    budget: {
      type: dataType.STRING,
      allowNull: true,
    },
  });

  return Contact;
};
