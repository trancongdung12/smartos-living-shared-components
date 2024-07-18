/**
 * smartos-v3 icon set component.
 * Usage: <smartos-v3 name="icon-name" size={20} color="#4F8EF7" />
 */

import createIconSet from 'react-native-vector-icons/lib/create-icon-set';
import glyphMap from './assets/fonts/smartos-v3-glyphMap.json';

const iconSet = createIconSet(glyphMap, 'smartos-v3', 'smartos-v3.ttf');

export default iconSet;
