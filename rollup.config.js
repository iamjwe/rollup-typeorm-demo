import typescript from "rollup-plugin-typescript";
import resolve from 'rollup-plugin-node-resolve';

export default {
  input: "./src/index.ts",
  plugins: [
    typescript({
        typescript: require('typescript'),
        tslib: require.resolve('tslib'),
    }),
    resolve()
  ],
  output: [
    {
      format: "cjs",
      file: "lib/bundle.js"
    }
  ]
};
