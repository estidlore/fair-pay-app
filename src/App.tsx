import { appStyles } from "appStyles";
import React from "react";
import { SafeAreaView, ScrollView } from "react-native";

import { Landing } from "views/Landing";

const App = (): JSX.Element => {
  return (
    <SafeAreaView style={[appStyles.root]}>
      <ScrollView>
        <Landing />
      </ScrollView>
    </SafeAreaView>
  );
};

export { App };
