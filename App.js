import React from "react";
import { createAppContainer } from "react-navigation";
import { createStackNavigator } from "react-navigation-stack";
import Signup from "./Signup";
import ForgotPassword from "./ForgotPassword";
import Feed from "./Feed";
import CreatePost from "./CreatePost";
import Login from "./Login";
import MyProfile from "./MyProfile";
import ProfileTemplate from "./ProfileTemplate";

const Stack = createStackNavigator({
  Login: {
    screen: Login,
  },
  Signup: {
    screen: Signup,
  },
  Feed:{
    screen:Feed
  },
  ForgotPassword:{
    screen:ForgotPassword
  },
  CreatePost:{
    screen:CreatePost
  },
  MyProfile:{
    screen:MyProfile
  },
  ProfileTemplate:{
    screen:ProfileTemplate
  }



});

const AppContainer = createAppContainer(Stack);

const App = () => {
  return <AppContainer />;
};

export default App;
