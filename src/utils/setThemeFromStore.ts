// JSON.parse(localStorage.getItem('themeStore')).state.theme

const setThemeFromStore = () => {
  const themeStore = localStorage.getItem('themeStore');

  if (themeStore) {
    const theme = JSON.parse(themeStore).state.theme;
    document.querySelector('html')?.setAttribute("data-theme", theme)
  }
}

export default setThemeFromStore;
