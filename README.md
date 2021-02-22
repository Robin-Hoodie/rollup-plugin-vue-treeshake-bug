## Readme from original repo

### Minimal example for rollup-plugin-vue treeshaking bug

- Clone the repo, which uses rollup-plugin-vue to build a component library via "npm run build".
- Copy the file "dist/testlib.esm.js" (the es module build) to a minimal vue-cli app.
- In the vue-cli app, add "import { larry, moe } from '@/testlib.esm.js';" to import only two of the three vue components provided by the library, and display them on the page.
- Run "npm run build" in the vue-cli app to produce bundled output

> Reported via [this issue](https://github.com/team-innovation/vue-sfc-rollup/issues/39), after which I discovered [this solution](https://github.com/webpack/webpack/issues/9614) indicating that the plugin output itself is still an issue.
>
> It seems that each "normalizeComponent" call needs a `/*#__PURE__*/` annotation comment for webpack to properly recognize them as tree-shakeable. For example: `const __vue_component__$1 = /*#__PURE__*/normalizeComponent({...`


## Additions compared to original repo

- Add tsconfig
- Add `vue-property-decorator` as a dependency to use class based Vue components
- Add relevant Babel presets and plugins for working with Typescript/Classes
- Convert Vue components to classes
