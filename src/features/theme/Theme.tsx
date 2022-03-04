import { Switch } from '@mui/material';
import { useAppSelector, useAppDispatch } from '../../app/hooks';
import { toggle, selectTheme } from '../../app/themeSlice';

function Theme() {
  const dispatch = useAppDispatch();
  const theme = useAppSelector(selectTheme);

  return (
    <Switch checked={theme === 'dark'} onChange={() => dispatch(toggle())} />
  );
}

export default Theme;
