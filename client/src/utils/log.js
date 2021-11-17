class Log {
  static d(tag, message) {
    if (process.env.NODE_ENV === "development") {
      console.log(tag + " -- " + message);
    }
  }
  static i(message) {
    if (process.env.NODE_ENV === "development") {
      alert(message);
    }
  }
}

export default Log;
