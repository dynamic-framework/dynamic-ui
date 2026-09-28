import { createContext } from 'react';

/**
 * Element the enclosing `DListGroup` renders, so each `DListGroupItem` can
 * check that its own element is valid content for it. `undefined` outside a
 * `DListGroup`.
 */
const ListGroupContext = createContext<'ul' | 'ol' | 'div' | undefined>(undefined);

export default ListGroupContext;
