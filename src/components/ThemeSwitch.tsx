import { Switch } from '@mui/material';
import { useAppDispatch, useAppSelector } from '../app/hooks';
import { toggle, selectTheme } from '../app/themeSlice';
import Image from 'next/image';
import styles from '../styles/ThemeSwitch.module.css';

const ThemeSwitch = () => {
  const dispatch = useAppDispatch();
  const mode = useAppSelector(selectTheme);

  return (
    <div className={styles.switch}>
      <div>
        <Image src='/moon.png' width='15px' height='15px' />
        <Image src='/sun.png' width='15px' height='15px' />
      </div>
      <Switch
        color='secondary'
        checked={mode === 'dark'}
        onChange={() => dispatch(toggle())}
      />
    </div>
  );
};

export default ThemeSwitch;
