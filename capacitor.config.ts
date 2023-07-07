import { CapacitorConfig } from "@capacitor/cli";

const config: CapacitorConfig = {
  appId: "com.thecodemaker.discovery",
  appName: "Discovery",
  webDir: "dist",
  server: {
    androidScheme: "https",
  },
};

export default config;
