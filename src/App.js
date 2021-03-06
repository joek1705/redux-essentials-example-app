import React from 'react'
import { PostsList } from './features/posts/PostsList'
import { AddPostForm } from './features/posts/AddPostForm'
import { SinglePostPage } from './features/posts/SinglePostPage'
import { EditPostForm } from './features/posts/EditPostForm'
import { UsersList } from './features/users/UsersList'
import { NotificationsList } from './features/notifications/NotificationsList'
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Redirect,
} from 'react-router-dom'

import { Navbar } from './app/Navbar'
import { UserPage } from './features/users/UserPage'

function App() {
  return (
    <Router>
      <Navbar />
      <div className="App">
        <Switch>
          <Route
            exact
            path="/"
            render={() => (
              <React.Fragment>
                <AddPostForm />
                <PostsList />
              </React.Fragment>
            )}
          />
          <Route exact path="/posts/:postId" component={SinglePostPage}></Route>
          <Route exact path="/users" component={UsersList}></Route>
          <Route exact path="/users/:userId" component={UserPage}></Route>
          <Route
            exact
            path="/notifications"
            component={NotificationsList}
          ></Route>
          <Route
            exact
            path="/editPost/:postId"
            component={EditPostForm}
          ></Route>
          <Redirect to="/" />
        </Switch>
      </div>
    </Router>
  )
}

export default App
