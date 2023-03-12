import { createStyles, makeStyles, Theme } from '@material-ui/core/styles';

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    root: {
      display: 'flex',
      flexDirection: 'column',
      minHeight: '100vh',
    },
    header: {
      display: 'flex',
      justifyContent: 'space-between',
      alignItems: 'center',
      padding: theme.spacing(2, 3),
      backgroundColor: theme.palette.primary.main,
      color: theme.palette.common.white,
    },
    table: {
      minWidth: 700,
    },
    confirmTitle: {
      fontWeight: 'bold',
      fontSize: '1.2rem',
      color: '#333',
    },
    confirmButton: {
      marginLeft: theme.spacing(1),
    },
  })
);

export default useStyles;
