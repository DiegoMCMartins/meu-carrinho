import {render} from '@testing-library/react-native';
import {describe, test} from '@jest/globals';

import Home from '@core/screens/Home';

describe('Home Screen', () => {
  test('should render correctly', () => {
    render(<Home />);
  });
});
