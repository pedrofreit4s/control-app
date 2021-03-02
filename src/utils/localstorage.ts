class LocalStorage {
  setUserSession(token: string): void {
    return window.localStorage.setItem("user@sessionId", token);
  }
  removeUserSession() {
    window.localStorage.removeItem("user@sessionId");
  }
  getUserSession(): string {
    return window.localStorage.getItem("user@sessionId") || "no";
  }
}

export default new LocalStorage();
