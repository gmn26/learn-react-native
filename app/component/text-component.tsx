import { Text } from "react-native";

const getFullName = (
  firstName: string,
  middleName: string,
  lastName: string
) => {
  return firstName + " " + middleName + " " + lastName;
};

const TextComponent = () => {
  return (
    <Text
      style={{
        color: "#fff",
        backgroundColor: "#000",
      }}
    >
      Ini dari komponen yang dibuat oleh{" "}
      {getFullName("Ghazy", "Muhari", "Novrial")}
    </Text>
  );
};

export default TextComponent;
