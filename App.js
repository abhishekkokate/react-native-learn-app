import { StatusBar } from "expo-status-bar";
import { useState } from "react";
import { StyleSheet, Text, View, TouchableOpacity } from "react-native";
import styled from "styled-components";
import myLogo from "./assets/icon.png";
import Card from "./components/Card";

export default function App() {
  const [count, setCount] = useState(0);
  return (
    <>
      <Container>
        <TitleBar>
          <Avatar source={require("./assets/avatar.jpg")}></Avatar>
          <TitleContaier>
            <Title>Welcome to React Native!</Title>
            <Name>Abhishek</Name>
          </TitleContaier>
          <TouchableOpacity
            style={{
              backgroundColor: "#2196f3",
              justifyContent: "center",
              alignItems: "center",
              width: 50,
              height: 50,
              borderRadius: 50,
              elevation: 4,
              marginLeft: "auto",
            }}
            onPress={() => {
              setCount(count + 1);
            }}
          >
            <Text
              style={{
                color: "white",
                fontWeight: "bold",
              }}
            >
              +
            </Text>
          </TouchableOpacity>
        </TitleBar>
        <CountContainer>
          <Title style={{ fontSize: 20 }}>Count is:</Title>
          <Name style={{ fontSize: 40 }}>{count}</Name>
        </CountContainer>
        {/* <Card /> */}
        <StatusBar style="auto" />
      </Container>
    </>
  );
}

const Container = styled.View`
  flex: 1;
  background-color: #f0f3f5;
`;

const Title = styled.Text`
  font-size: 16px;
  color: #0008;
`;

const Name = styled.Text`
  font-size: 20px;
  color: #000;
  font-weight: 600;
`;

const TitleBar = styled.View`
  width: 90%;
  margin: 10px;
  margin-top: 40px;
  flex-direction: row;
  align-items: center;
  /* background: #ff0; */
`;

const TitleContaier = styled.View``;

const Avatar = styled.Image`
  width: 50px;
  height: 50px;
  background: #000;
  border-radius: 50px;
  margin: 1% 3%;
`;

const TitleButton = styled.Button`
  width: 50px;
  border-radius: 50%;
  margin: 10px;
`;

const CountContainer = styled.View`
  font-size: 30px;
  flex: 1;
  justify-content: center;
  align-items: center;
`;
