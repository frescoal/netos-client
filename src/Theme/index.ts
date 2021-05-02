import DarkTheme from './Dark';
import LightTheme from './Light';

const Theme = (palletType: string) => {
  return palletType === 'dark' ? DarkTheme : LightTheme;
};
export default Theme;
