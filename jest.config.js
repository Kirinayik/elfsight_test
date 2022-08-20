module.exports = {
    setupFilesAfterEnv: ['./jestSetup.js'],
    testEnvironment: 'jsdom',
    moduleNameMapper: {
        '@store/(.*)': '<rootDir>/src/store/$1',
        '@utils/(.*)': '<rootDir>/src/utils/$1',
        '@assets/(.*)': '<rootDir>/src/assets/$1',
        '@components/(.*)': '<rootDir>/src/components/$1',
        '@global/(.*)': '<rootDir>/src/global/$1',
        '@hooks/(.*)': '<rootDir>/src/hooks/$1',
        '@mocks/(.*)': '<rootDir>/src/mocks/$1',
        '@reducers/(.*)': '<rootDir>/src/reducers/$1',
    },
}
