import React, { useEffect, useCallback } from "react";
import * as SplashScreen from "expo-splash-screen";
import { ThemeProvider } from "styled-components";
import { theme } from "./src/infrastructure/theme";
import { StatusBar as ExpoStatusBar } from "expo-status-bar";
import {
  useFonts as useLato,
  Lato_300Light,
  Lato_400Regular,
  Lato_700Bold,
} from "@expo-google-fonts/lato";
import {
  useFonts as useRoboto,
  Roboto_300Light,
  Roboto_400Regular,
  Roboto_500Medium,
} from "@expo-google-fonts/roboto";
import AccountNavigator from "./src/infrastructure/navigation/account.navigator";

SplashScreen.preventAutoHideAsync();

export default function App() {
  let [LatoLoaded] = useLato({
    Lato_300Light,
    Lato_400Regular,
    Lato_700Bold,
  });

  let [RobotoLoaded] = useRoboto({
    Roboto_300Light,
    Roboto_400Regular,
    Roboto_500Medium,
  });

  useEffect(() => {
    async function prepare() {
      await SplashScreen.preventAutoHideAsync();
    }
    prepare();
  }, []);

  const onLayoutRootView = useCallback(async () => {
    if (LatoLoaded && RobotoLoaded) {
      await SplashScreen.hideAsync();
    }
  }, [LatoLoaded, RobotoLoaded]);

  if (!LatoLoaded || !RobotoLoaded) {
    return null;
  }

  return (
    <>
      <ThemeProvider theme={theme}>
        <AccountNavigator onReady={onLayoutRootView} />
        <ExpoStatusBar style="auto" />
      </ThemeProvider>
    </>
  );
}
