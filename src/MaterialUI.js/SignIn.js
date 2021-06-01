import Avatar from '@material-ui/core/Avatar';
import Button from '@material-ui/core/Button';
import CssBaseline from '@material-ui/core/CssBaseline';
import TextField from '@material-ui/core/TextField';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import Checkbox from '@material-ui/core/Checkbox';
import Switch from '@material-ui/core/Checkbox';
import Radio from '@material-ui/core/Checkbox';
import Link from '@material-ui/core/Link';
import Grid from '@material-ui/core/Grid';
import Box from '@material-ui/core/Box';
import LockOutlinedIcon from '@material-ui/icons/LockOutlined';
import Typography from '@material-ui/core/Typography';
import { makeStyles } from '@material-ui/core/styles';
import Container from '@material-ui/core/Container';


function Copyright() {
  return (
    // variant='' : 文字の大きさを指定
    <Typography variant="body2" color="textSecondary" align="center">
      {'Copyright © '}
      <Link color="inherit" href="https://material-ui.com/" target='_blank'>
        Your Website
      </Link>{' '}
      {new Date().getFullYear()}
      {'.'}
    </Typography>
  );
}

// makeStyle()関数：引数にthemeオブジェクトを取る
// クラス（スタイル）をつけるための関数
const useStyles = makeStyles(theme => ({
    paper: {
    marginTop: theme.spacing(8),
    // flexにしてalignItems: 'center'とすることで中寄せになる
    // JSなのでvalueは''で囲う（そうしないと定数になってしまう）
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    },
    avatar: {
        margin: theme.spacing(1),
        backgroundColor: theme.palette.primary.main,
    },
    form: {
        width: '100%', // Fix IE 11 issue.
        marginTop: theme.spacing(1),
    },
    submit: {
        margin: theme.spacing(3, 0, 2),
    },
}))

export const SignIn = () => {
    const classes = useStyles()
    
    return(
        <Container component='main' maxWidth='xs'>
            {/* 色が若干薄くなったり、font-familyが変わったり */}
            <CssBaseline></CssBaseline>
            <div className={classes.paper}>
                <Avatar className={classes.avatar}>
                    <LockOutlinedIcon></LockOutlinedIcon>
                </Avatar>
                <Typography component='h1' variant='h5'>
                    Sign in
                </Typography>
                <form className={classes.form} noValidate>
                    {/* variant='outlined'：枠線がつく（何もしなければ下線のみ） */}
                    <TextField
                        variant='outlined'
                        margin='normal'
                        required
                        fullWidth
                        id='email'
                        label='Email Address'
                        name='email'
                        // フォーカス時に以前入力したメールアドレスを出す
                        autoComplete='email'
                    />
                    <TextField
                        variant="outlined"
                        margin="normal"
                        required
                        fullWidth
                        name="password"
                        label="Password"
                        type="password"
                        id="password"
                        // フォーカス時に以前入力したパスワードを出す
                        autoComplete="current-password"
                    />
                    <FormControlLabel
                        // control = {} : Radio, Switch ,Checkbox.
                        control={<Checkbox value="remember" color="primary" />}
                        label="Remember me"
                    />
                    <Button
                        type="submit"
                        fullWidth
                        variant="contained"
                        color="primary"
                        className={classes.submit}
                    >
                        Sign In
                    </Button>
                    {/* Grid: container, item の2種類 */}
                    <Grid container>
                    {/* grid breakpoints: xs, sm, md, lg, and xl. */}
                    {/* ブレークポイント：レイアウトが変わるポイント */}
                    {/* xs : 1 ~ 599px */}
                    {/* xs = {}  カラム数を決める（12カラム制）*/}
                        <Grid item xs>
                            <Link href="#" variant="body2">
                                Forgot password?
                            </Link>
                        </Grid>
                        <Grid item>
                            <Link href="#" variant="body2">
                                {"Don't have an account? Sign Up"}
                            </Link>
                        </Grid>
                    </Grid>
                </form>
            </div>
            {/* mt={}：margin-topっぽい値 */}
            <Box mt={8}>
                <Copyright />
            </Box>
        </Container>
    )
}