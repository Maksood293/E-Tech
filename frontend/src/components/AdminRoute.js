import { useSelector } from "react-redux";
import { Route, Redirect } from "react-router-dom";
export default function AdminRoute({ component: Component, ...rest }) {
  const userSingin = useSelector((state) => state.userSingin);
  const { userInfo } = userSingin;
  return (
    <Route
      {...rest}
      render={(props) =>
        userInfo && userInfo.isAdmin ? (
          <Component {...props}></Component>
        ) : (
          <Redirect to="/signin" />
        )
      }
    ></Route>
  );
}
