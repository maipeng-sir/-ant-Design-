const { 
    override, 
    fixBabelImports,
    addWebpackAlias
} = require('customize-cra');

const path = require("path");

module.exports = override(
    //按需加载antd
    fixBabelImports('import', {        
        libraryName: 'antd',        
        libraryDirectory: 'es',       
        style: 'css',
    }),
    //别名配置
    addWebpackAlias({        
        ["@"]: path.resolve(__dirname, "./src"),             
        ["@pages"]: path.resolve(__dirname, "./src/pages"),
        ["@components"]: path.resolve(__dirname, "./src/components"),
        ["@common"]: path.resolve(__dirname, "./src/common"),
        ["@actions"]: path.resolve(__dirname, "./src/actions"),
        ["@router"]: path.resolve(__dirname, "./src/router"),
        ["@store"]: path.resolve(__dirname, "./src/store"),
        ["@api"]: path.resolve(__dirname, "./src/api"),
        ["@utils"]: path.resolve(__dirname, "./src/utils"),
        ["@layout"]: path.resolve(__dirname, "./src/layout")      
    })
);