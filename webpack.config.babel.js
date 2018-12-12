import path from "path";
const DIST_PATH = path.resolve(__dirname, "lib");

const getConfig = target => {
    let cfg = {
        target: "web",
        entry: `./src/index`,
        module: {
            rules: [
                {
                    test: /\.jsx?$/,
                    exclude: /node_modules/,
                    use: {
                        loader: "babel-loader",
                    }
                }
            ]
        },
        output: {
            path: path.join(DIST_PATH),
            filename: "[name].js",
        },
    };
       return cfg;
};

export default [getConfig("web")];
