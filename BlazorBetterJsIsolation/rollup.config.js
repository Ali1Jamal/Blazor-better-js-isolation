//Import the modules needed for our configuration
import globby from 'globby';
import babel from '@rollup/plugin-babel';
import commonjs from '@rollup/plugin-commonjs';
import nodeResolve from '@rollup/plugin-node-resolve';
import path from 'path';
import typescript from '@rollup/plugin-typescript';
import del from 'rollup-plugin-delete';
import terser from '@rollup/plugin-terser'; //A Rollup plugin to generate a minified bundle.

let inputFiles = ['Pages/**/*.js', 'Pages/**/*.ts'];

export default {
    input: globby.sync(inputFiles),
    output: {
        //The root folder for all bundled .js files
        dir: './wwwroot/js/',
        preserveModules: true, //https://rollupjs.org/configuration-options/#output-preservemodules
        // bundle the files as ES modules
        format: 'es',
        entryFileNames: ({ facadeModuleId }) => {
            let relativePath = path.relative(path.resolve('.'), facadeModuleId);
            let parsedPath = path.parse(relativePath);
            let fileName = parsedPath.name.replace('.razor', ''); // Remove .razor from the file name
            return `${parsedPath.dir}/${fileName}.js`;
        }

    },
    plugins: [
        nodeResolve(),
        commonjs({
            include: "node_modules/**"
        }),
        babel({
            babelHelpers: 'bundled',
        }),
        typescript(),
        del({ targets: './wwwroot/js/' })//, delete existing files before copy new files [optional]
        // terser()  i'm only using terser in production to minify files. [optional]
    ]
};
