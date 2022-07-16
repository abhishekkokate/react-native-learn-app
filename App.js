import { StatusBar } from "expo-status-bar";
import React from "react";
import { StyleSheet, Text, View, TouchableOpacity } from "react-native";
import styled from "styled-components";
import myLogo from "./assets/icon.png";
import Card from "./components/Card";

export default function App() {
  return (
    <>
      <Container>
        <TitleBar>
          <Avatar source={require("./assets/avatar.jpg")}></Avatar>
          <TitleContaier>
            <Title>Welcome to React Native!</Title>
            <Name>Abhishek</Name>
          </TitleContaier>
        </TitleBar>
        <Subtitle>Continue Learining</Subtitle>
        <Card />
        <StatusBar style="auto" />
      </Container>
    </>
  );
}

const Subtitle = styled.Text`
  color: #b8bece;
  font-weight: 600;
  font-size: 15px;
  margin-top: 50px;
  margin-left: 20px;
  text-transform: uppercase;
`;

const TitleContaier = styled.View``;

const Avatar = styled.Image`
  width: 50px;
  height: 50px;
  background: #000;
  border-radius: 50px;
  margin: 1% 3%;
`;
const TitleBar = styled.View`
  width: 90%;
  margin: 10px;
  margin-top: 40px;
  flex-direction: row;
  align-items: center;
  /* background: #ff0; */
`;
const Name = styled.Text`
  font-size: 20px;
  color: #000;
  font-weight: 600;
`;
const Title = styled.Text`
  font-size: 16px;
  color: #0008;
`;

const Container = styled.View`
  flex: 1;
  background-color: #f0f3f5;
`;
