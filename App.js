import { FontAwesomeIcon } from "@fortawesome/react-native-fontawesome";
import { faRotateRight } from "@fortawesome/free-solid-svg-icons";
import { StatusBar } from "expo-status-bar";
import React, { useEffect, useRef, useState } from "react";
import {
  StyleSheet,
  Text,
  View,
  TouchableOpacity,
  Animated,
  ScrollView,
  SafeAreaView,
} from "react-native";
import styled from "styled-components";
import myLogo from "./assets/icon.png";
import Card from "./components/Card";

export default function App() {
  const [randomProfile, setRandomProfile] = useState();
  useEffect(() => {
    getProfile();
  }, []);
  async function getProfile() {
    try {
      console.log("getting Profile");
      fetch("https://randomuser.me/api/")
        .then((response) => response.json())
        .then((json) => {
          setRandomProfile(json);
          console.log(randomProfile?.results[0].name.first);
        })
        .catch((err) => {
          console.log(err);
        });
      // console.log(randomProfile);
    } catch (err) {
      console.log(err);
    }
  }

  return (
    <>
      <Container>
        <SafeAreaView>
          <ScrollView>
            <TitleBar>
              <Avatar
                source={{ uri: randomProfile?.results[0].picture.medium }}
              ></Avatar>
              <TitleContaier>
                <Title>Welcome to React Native!</Title>
                <Name>{randomProfile?.results[0].name.first}</Name>
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
                  getProfile();
                }}
              >
                <ReloadIconContainer>
                  <FontAwesomeIcon
                    icon={faRotateRight}
                    style={{
                      color: "white",
                    }}
                    size={20}
                  />
                </ReloadIconContainer>
              </TouchableOpacity>
            </TitleBar>
            <Subtitle>Continue Learining</Subtitle>
            <ScrollView
              horizontal={true}
              showsHorizontalScrollIndicator={false}
            >
              <Card
                title={"Styled Components"}
                image={require("./assets/background2.jpg")}
                caption={"React Native"}
                logo={require("./assets/logo-react.png")}
                subtitle={"5 of 12 Sessions"}
              />
              <Card
                title={"Styled Components"}
                image={require("./assets/background1.jpg")}
                caption={"React Native"}
                logo={require("./assets/logo-react.png")}
                subtitle={"5 of 12 Sessions"}
              />
            </ScrollView>
          </ScrollView>
        </SafeAreaView>
        <StatusBar style="auto" />
      </Container>
    </>
  );
}

const ReloadIconContainer = styled.View`
  transition: all 0.3s ease-out;
  transform: rotate(0deg);
`;

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
  justify-content: flex-start;
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
  width: 100%;
  height: 100%;
`;
