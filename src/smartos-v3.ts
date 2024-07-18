/**
 * smartos-v3 icon set component.
 * Usage: <smartos-v3 name="icon-name" size={20} color="#4F8EF7" />
 */

import createIconSet from 'react-native-vector-icons/lib/create-icon-set';
const glyphMap = {
  'ic-attach': 98,
  'ic-camera': 100,
  'ic-add': 58,
  'ic-alltype': 57414,
};

const iconSet: any = createIconSet(glyphMap, 'smartos-v3', 'smartos-v3.ttf');

export default iconSet;
