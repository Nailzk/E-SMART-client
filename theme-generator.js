const less = require('less');
const LessPluginCleanCSS = require('less-plugin-clean-css');
const fs = require('fs');

// ng zorro defined styles
const basicStyles = `@import './node_modules/ng-zorro-antd/ng-zorro-antd.less';`;
// ng zorro compact theme variables

less.render(`${basicStyles}`, {
    javascriptEnabled: true,
    plugins: [new LessPluginCleanCSS({ advanced: true })],
    modifyVars: {
        'primary-color': '#ffd8da',
    }
}).then(data => {
    fs.writeFileSync(
        './src/styles/ant-theme.css',
        data.css
    )
}).catch(e => {
    console.error(e);
});