import _Spacer from './Spacer';
import _RoundImage from './RoundImage';
import _B from './B';
import _AliveBadge from './AliveBadge';
import _ErrorBox from './ErrorBox';

export const Spacer = _Spacer;
export const RoundImage = _RoundImage;

/**
 * Component to render Bold text
 * @param children the text string to render as bold
 */
export const B = _B;

/**
 * Badge for character status ('Alive', 'Dead', 'unknown') in absolute position
 * @param status status of the character (`Alive`, `Dead`, `unknown`)
 * @param position `{top, left}` absoulte position
 */
export const AliveBadge = _AliveBadge;
export const ErrorBox = _ErrorBox;
