import Loadable from 'react-loadable';
import Loading from '@common/loading';

const Auth = Loadable({
    loader: () => import('./auth'),
    loading: Loading,
});

const HotBooks = Loadable({
    loader: () => import('./books/hotBooks'),
    loading: Loading,
});


const Login = Loadable({
    loader: () => import('./login'),
    loading: Loading,
});
export  {
    Auth,
    HotBooks,
    Login
}