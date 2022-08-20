module.exports = {
    plugins: ['@emotion/babel-plugin'],
    presets: ['@babel/preset-env', ['@babel/preset-react', { runtime: 'automatic' }], '@babel/preset-typescript'],
}
