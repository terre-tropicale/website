module.exports = {
  moduleDirectories: ['node_modules', 'src'],
  moduleNameMapper: { '@/(.*)': '<rootDir>/src/$1' },
  setupFilesAfterEnv: ['<rootDir>/jest.setup.ts'],
  testPathIgnorePatterns: ['<rootDir>/node_modules/', '<rootDir>/.next/']
};
