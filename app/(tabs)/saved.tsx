import { View, Text, Image } from "react-native";
import React from "react";
import { icons } from "@/constants/icons";

const Saved = () => {
  return (
    <View className="flex-1 bg-primary">
      <View className="flex justify-center items-center flex-1 flex-col gap-5">
        <Image
          source={icons.save}
          className="size-10"
          tintColor={"#fff"}
        ></Image>
        <Text className="text-gray-500 text-base">Saved</Text>
      </View>
    </View>
  );
};

export default Saved;
