export default (contactForm) => {
  try {
    for (const key in contactForm) {
      if (!contactForm[key].trim().length)
        throw new Error(
          `${
            key === "fromName" ? "name" : key === "fromEmail" ? "email" : key
          } must be provided`
        );
    }

    return true;
  } catch (error) {
    return error;
  }
};
