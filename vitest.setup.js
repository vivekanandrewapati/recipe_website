import '@testing-library/jest-dom';
import { expect } from 'vitest';
import * as matchers from '@testing-library/jest-dom/matchers';

// extends Vitest's expect method with methods from react-testing-library
expect.extend(matchers);
import { cleanup } from '@testing-library/react';

// runs a cleanup after each test case
afterEach(() => {
  cleanup();
});