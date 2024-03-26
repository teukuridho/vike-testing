import vikeReact from "vike-react/config";
import type { Config } from "vike/types";;
import Layout from "../../../layouts/AdminAdmin2Layout";

// Default config (can be overridden by pages)
export default {
  Layout,
  // <title>
  title: "My Vike App",
  extends: vikeReact,
} satisfies Config;
