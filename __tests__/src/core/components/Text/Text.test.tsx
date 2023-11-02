import {render} from '@testing-library/react-native';
import {describe, test} from '@jest/globals';

import Text from '@core/components/Text';

describe('Text Component', () => {
  test('should render correctly', () => {
    render(<Text />);
  });
});
