import {defineConfig} from "tsup";

export default defineConfig(options => ({
    entry: ['src/**/*.ts', "src/**/*.tsx"],
    dts: true,
    skipNodeModulesBundle: true,
    treeshake: true,
    format: ['cjs', "esm"],
    minify: !options.watch,
    sourcemap: true,
    splitting: true,
    target: 'es2016',
    bundle: true,
    clean: true,
}))