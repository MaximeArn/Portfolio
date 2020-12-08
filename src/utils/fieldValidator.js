export default (contactForm) => {
  const { fromEmail, ...mandatory } = contactForm;
  try {
    for (const key in mandatory) {
      if (!mandatory[key].trim().length)
        throw new Error(
          `${key === "fromName" ? "name" : key} must be provided`
        );
    }

    return true;
  } catch (error) {
    return error;
  }
};
