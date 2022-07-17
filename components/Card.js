import React from "react";
import { View, Text } from "react-native";
import styled from "styled-components";

export default function Card({ title, image, caption, subtitle, logo }) {
  return (
    <Container>
      <Cover>
        <Image source={image}></Image>
        <Title>{title}</Title>
      </Cover>
      <Content>
        <Logo source={logo}></Logo>
        <Wrapper>
          <Caption>{caption}</Caption>
          <Subtitle>{subtitle}</Subtitle>
        </Wrapper>
      </Content>
    </Container>
  );
}

const Subtitle = styled.Text`
  color: #0008;
`;

const Caption = styled.Text`
  color: #000a;
  font-weight: 600;
  font-size: 20px;
`;

const Logo = styled.Image`
  width: 50px;
  height: 50px;
`;

const Wrapper = styled.View`
  margin-left: 10px;
`;

const Content = styled.View`
  flex-direction: row;
  padding-left: 20px;
  align-items: center;
  height: 80px;
`;

const Title = styled.Text`
  color: white;
  font-size: 24px;
  font-weight: 600;
  margin: 20px;
  width: 170px;
`;

const Image = styled.Image`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
`;

const Cover = styled.View`
  width: 100%;
  height: 200px;
  border-radius: 14px;
`;

const Container = styled.View`
  background: white;
  width: 315px;
  height: 280px;
  border-radius: 14px;
  margin: 20px;
  box-shadow: 0 5px 15px rgba(0, 0, 0, 0.15);
  overflow: hidden;
`;
