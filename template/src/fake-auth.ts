type Callback = () => void;

const fakeAuth = {
  isAuthenticated: false,
  login(cb: Callback) {
    this.isAuthenticated = true;
    setTimeout(cb, 100);
  },
  logout(cb: Callback) {
    this.isAuthenticated = false;
    setTimeout(cb, 100);
  },
};

export default fakeAuth;