import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import Intro from './pages/StartPage';
import { Switch, Route } from 'react-router-dom';
import { withSuspense } from './hoc/withSuspanse';
import { getAlbumUserAction, getAlbumCoverAction } from './redux/actions/galleryActions';
const Gallery = React.lazy(() => import('./pages/Gallery'));
const Album = React.lazy(() => import('./pages/Album'))

function App() {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getAlbumUserAction());
    dispatch(getAlbumCoverAction());
  }, [])
  const { openAlbum } = useSelector(({ gallery }) => gallery);

  return (
    <div className="app">
      <Switch>
        <Route exact path='/' render={() => <Intro />} />
        <Route exact path='/gallerys' render={withSuspense(Gallery)} />
        <Route exact path={`/gallerys/album${openAlbum}`} render={withSuspense(Album)} />
      </Switch>
    </div>
  );
}

export default App;
