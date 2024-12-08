import React from "react";
import { Image, ScrollView, Text, View, TextInput } from "react-native";
import TextComponent from "./component/text-component";

export default function Index() {
  return (
    <ScrollView>
      <Text>Learn React Native</Text>
      <View>
        <Text>Text inside view tag</Text>
        <Image
          source={{
            uri: "https://img-cdn.pixlr.com/image-generator/history/65bb506dcb310754719cf81f/ede935de-1138-4f66-8ed7-44bd16efc709/medium.webp",
          }}
          style={{ width: 200, height: 200 }}
        />
      </View>
      <TextInput
        style={{
          height: 40,
          borderColor: "gray",
          borderWidth: 1,
        }}
        defaultValue="Type here"
      />
      <TextComponent />
    </ScrollView>
  );
}
