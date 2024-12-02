exports.isValidMessage = (message) => {
    if (!message || message.trim() === '') {
      return false;
    }
    return true;
  };
  