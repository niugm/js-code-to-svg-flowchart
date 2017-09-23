import { TOKEN_TYPES, MODIFIED_TYPES } from 'shared/constants';

export const DEFINED_MODIFIERS = {
    forEach: {
        test: node => node.name.indexOf('forEach') !== -1,
        updates: {
            name: node => 'in ' + node.name.split('.forEach')[0],
            type: TOKEN_TYPES.LOOP
        }
    }
};

export const destructionModifier = (test, newNameFn) => ({
    test,
    updates: {
        name: newNameFn,
        body: [],
        type: MODIFIED_TYPES.DESTRUCTED
    }
});

export const MODIFIER_PRESETS = {
    es5ArrayIterators: [DEFINED_MODIFIERS.forEach]
};