import React from "react";
import { SafeAreaView } from "react-native";

import { Landing } from "views/Landing";

const App = (): JSX.Element => {
  return (
    <SafeAreaView>
      <Landing />
    </SafeAreaView>
  );
};

export { App };
