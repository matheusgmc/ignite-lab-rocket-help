import React from "react";
import { Text, VStack } from "native-base";
import { Header } from "../components/Header";
import { useNavigation, useRoute } from "@react-navigation/native";

interface DetailsProps {}

interface RouteParams {
  orderId: string;
}

export function Details() {
  const route = useRoute();
  const navigation = useNavigation();
  const { orderId } = route.params as RouteParams;
  return (
    <VStack flex={1} bg={"gray.700"}>
      <Header title={"solicitação"} />
      <Text color={"white"}>{orderId}</Text>
    </VStack>
  );
}
