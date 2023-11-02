import {render} from '@testing-library/react-native';
import {describe, test} from '@jest/globals';

import FullContainer from '@core/components/FullContainer';

describe('FullContainer Component', () => {
  test('should render correctly', () => {
    render(<FullContainer />);
  });
});
