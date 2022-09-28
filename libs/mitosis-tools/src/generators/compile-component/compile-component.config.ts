export const compileComponentConfig = {
  outputPaths: {
    angular: 'libs/angular',
    react: 'libs/react',
    wc: 'libs/wc',
  },
  defaultOptions: {
    angular: {useAttributeSelector: false, outputExtension: 'ts'},
    react: {outputExtension: 'tsx'},
    wc: {outputExtension: 'ts'}
  }
}
